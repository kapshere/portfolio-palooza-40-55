
interface ContactMessage {
  name: string;
  email: string;
  message: string;
  date: string;
}

export const saveMessage = async (message: ContactMessage): Promise<void> => {
  try {
    // In a real-world scenario, we would send this to a server
    // For this demo, we'll simulate storage by logging to console
    console.log("Message received:", message);
    
    // Format the message in markdown
    const markdownContent = `
# Message from ${message.name}

- **Date:** ${new Date(message.date).toLocaleString()}
- **Email:** ${message.email}

## Message:

${message.message}
`;
    
    // In a real implementation, this would be a server-side API call
    // to write the file to the repository
    // Here we're just logging the content that would be saved
    console.log("Markdown content to be saved:", markdownContent);
    
    // Simulated successful storage
    return Promise.resolve();
  } catch (error) {
    console.error("Error saving message:", error);
    return Promise.reject(error);
  }
};
