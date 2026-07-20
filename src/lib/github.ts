export interface GithubConfig {
  token: string;
  owner: string;
  repo: string;
  branch: string;
}

export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  category: 'tech' | 'philosophy';
}

const GITHUB_API = 'https://api.github.com';

async function fetchGithub(endpoint: string, config: GithubConfig, options: RequestInit = {}) {
  const url = `${GITHUB_API}/repos/${config.owner}/${config.repo}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Authorization': `Bearer ${config.token}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`GitHub API error (${response.status}): ${errorText}`);
  }

  return response.json();
}

export async function publishNewPost(
  config: GithubConfig, 
  metadata: PostMetadata, 
  markdownContent: string
) {
  // 1. Get branch reference
  const refData = await fetchGithub(`/git/ref/heads/${config.branch}`, config);
  const latestCommitSha = refData.object.sha;

  // 2. Get latest commit to find the base tree
  const commitData = await fetchGithub(`/git/commits/${latestCommitSha}`, config);
  const baseTreeSha = commitData.tree.sha;

  // 3. Create blob for markdown file
  const mdPath = metadata.category === 'tech' 
    ? `public/blog-posts/${metadata.slug}.md`
    : `public/writings/${metadata.slug}.md`;
    
  const mdBlobData = await fetchGithub('/git/blobs', config, {
    method: 'POST',
    body: JSON.stringify({
      content: markdownContent,
      encoding: 'utf-8',
    }),
  });

  // 4. Fetch the existing data file to append to
  const dataFilePath = metadata.category === 'tech'
    ? 'src/data/blogPosts.ts'
    : 'src/data/philosophicalWritings.ts';
    
  let fileContent = '';
  let fileSha = '';
  
  try {
    const fileData = await fetchGithub(`/contents/${dataFilePath}?ref=${config.branch}`, config);
    fileContent = atob(fileData.content);
    fileSha = fileData.sha;
  } catch (error) {
    throw new Error(`Could not read ${dataFilePath}. Ensure the file exists.`);
  }

  // 5. Append the new metadata to the TS file
  // Find the export array and insert before the closing bracket
  const arrayName = metadata.category === 'tech' ? 'blogPosts' : 'philosophicalWritings';
  const newEntry = `  {
    title: "${metadata.title.replace(/"/g, '\\"')}",
    date: "${metadata.date}",
    excerpt: "${metadata.excerpt.replace(/"/g, '\\"')}",
    slug: "${metadata.slug}",
  },
`;
  
  // A crude but effective way to prepend to the array (assuming standard format)
  // Look for `export const blogPosts = [` and insert right after it.
  const regex = new RegExp(`(export const ${arrayName}(?:.*?)=\\s*\\[)`);
  const updatedFileContent = fileContent.replace(regex, `$1\n${newEntry}`);

  if (updatedFileContent === fileContent) {
    throw new Error(`Could not find the array to append to in ${dataFilePath}`);
  }

  // 6. Create blob for the updated TS file
  const tsBlobData = await fetchGithub('/git/blobs', config, {
    method: 'POST',
    body: JSON.stringify({
      content: updatedFileContent,
      encoding: 'utf-8',
    }),
  });

  // 7. Create a new tree
  const newTreeData = await fetchGithub('/git/trees', config, {
    method: 'POST',
    body: JSON.stringify({
      base_tree: baseTreeSha,
      tree: [
        {
          path: mdPath,
          mode: '100644',
          type: 'blob',
          sha: mdBlobData.sha,
        },
        {
          path: dataFilePath,
          mode: '100644',
          type: 'blob',
          sha: tsBlobData.sha,
        }
      ],
    }),
  });

  // 8. Create a new commit
  const newCommitData = await fetchGithub('/git/commits', config, {
    method: 'POST',
    body: JSON.stringify({
      message: `Add new ${metadata.category} post: ${metadata.title}`,
      tree: newTreeData.sha,
      parents: [latestCommitSha],
    }),
  });

  // 9. Update the reference (push to branch)
  await fetchGithub(`/git/refs/heads/${config.branch}`, config, {
    method: 'PATCH',
    body: JSON.stringify({
      sha: newCommitData.sha,
      force: false,
    }),
  });
  
  return { success: true, commitUrl: newCommitData.html_url };
}
