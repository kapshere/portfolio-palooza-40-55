type Project = {
  name: string;
  role: string;
  timeframe: string;
  description: string;
  stack?: string;
};

const projects: Project[] = [
  {
    name: "LLM-powered Compliance & Policy Assistant",
    role: "Architect & Player–coach",
    timeframe: "2023 – 2025",
    description:
      "Designed an LLM + RAG assistant for policy, contract, and regulatory questions with custom evaluation suites to measure accuracy, hallucination, and latency.",
    stack: "Python, vector DB, evaluation harness, Azure/OpenAI APIs",
  },
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
    timeframe: "2021 – 2023",
    description:
      "Led design of DID-compliant digital identity and signing infrastructure for national ID and contract-signing use cases.",
    stack: "W3C DID, blockchain, secure key management, REST APIs",
  },
];

export function SelectedAiProjects() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold mb-6">Selected AI & Data Projects</h2>
      <div className="space-y-6">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-lg border border-slate-700 bg-slate-900/40 p-4"
          >
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="text-sm text-slate-400">
              {p.role} · {p.timeframe}
            </p>
            <p className="mt-2 text-sm text-slate-300">{p.description}</p>
            {p.stack && (
              <p className="mt-2 text-xs text-slate-400">Stack: {p.stack}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
