type Project = {
  name: string;
  role: string;
  timeframe: string;
  description: string;
  stack?: string;
};

const projects: Project[] = [
  
  {
    name: "VerusAI – Compliance & Identity Platform",
    role: "Co-founder & Chief Architect",
    timeframe: "2023 – Present",
    description:
      "Architecting AI agents and LLM-backed workflows for KYC/AML, identity verification, and ongoing monitoring in regulated environments.",
    stack: "Python, Node.js, LLM APIs, event-driven microservices",
  },
  {
    name: "Stockscore – Equity Analytics & Scoring",
    role: "Co-founder & Product Head",
    timeframe: "2024 – Present",
    description:
      "Building scoring models and explainable signals for stocks and portfolios to help investors and advisors understand risk and behavior.",
    stack: "Python, time-series models, web front-end, cloud-native APIs",
  },
  {
    name: "Digital Identity & Signing Platform",
    role: "Solutions Architect",
    timeframe: "2022 – 2023",
    description:
      "Led design of DID-compliant digital identity and signing infrastructure for national ID and contract-signing use cases.",
    stack: "W3C DID, blockchain, secure key management, REST APIs",
  },
];

export function SelectedAiProjects() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Selected AI & Data Projects</h2>
        <div className="space-y-6">
          {projects.map((p) => (
            <article
              key={p.name}
              className="rounded-lg border border-border bg-card p-5 shadow-sm hover-glow"
            >
              <h3 className="text-lg font-semibold text-primary">{p.name}</h3>
              <p className="text-sm text-muted-foreground">
                {p.role} · {p.timeframe}
              </p>
              <p className="mt-2 text-sm text-foreground">{p.description}</p>
              {p.stack && (
                <p className="mt-2 text-xs text-muted-foreground">Stack: {p.stack}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
