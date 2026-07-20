export function Ventures() {
  const ventures = [
    {
      name: "aCausal Labs Private Limited",
      role: "Founder",
      timeframe: "Dec 2025 – Present",
      blurb:
        "Building Freedom Wise: A game changing product for personal finance to help people in achieving financial freedom.",
      details:
        "A serious company developing personal productivity and financial freedom companions combining AI agents and behavioral insights.",
      stack: "Mobile Architecture, Blockchain, LLMs, AI Agents",
    },
    {
      name: "VerusAI.ai",
      role: "Co-founder & Chief Architect",
      timeframe: "Nov 2024 – Present",
      blurb:
        "AI-first platform focused on cryptocurrency compliance, identity, and risk analytics for regulated enterprises. Responsible for technical vision, AI architecture, and core product roadmap.",
      details:
        "Architecting LLM-based agents for KYC/AML workflows, document intelligence, and ongoing monitoring — combining RAG with policy-aware guardrails and domain-specific evaluation pipelines. Supporting GTM, solutioning, proof-of-value designs, and executive briefings.",
      stack: "Python, Node.js, LLM APIs, event-driven microservices",
    },
    {
      name: "ZYND Protocol & Alan Scott Enterprises",
      role: "Strategic Advisor & Protocol Co-designer",
      timeframe: "2024 – 2025",
      blurb:
        "Co-designed protocol and reference architecture for ZYND, an AI-driven on-chain/off-chain orchestration layer under the Alan Scott/Omnis umbrella, focusing on data integrity, identity, and agent coordination.",
      details:
        "Strategic advisor to an AI startup hub incubating B2B AI products; defined reusable technical patterns (identity, data pipelines, evaluation harnesses) across portfolio companies. Conducted architecture reviews, risk assessments, and roadmap workshops with emphasis on responsible AI and enterprise readiness.",
    },
    {
      name: "Independent Technology Consultant & Startup Advisor",
      role: "Hybrid",
      timeframe: "Jan 2024 – Dec 2025",
      blurb:
        "Advising and mentoring multiple early-stage AI/blockchain startups on product strategy, architecture, and GTM — often acting as an extended co-founder for design, hiring, and fundraising narratives.",
      details:
        "Designed and implemented AI agents and LLM-backed features for AML/fraud detection, stock market analysis, and enterprise search, including RAG and evaluation/guardrail patterns.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-background/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Ventures & AI Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {ventures.map((v, index) => (
            <div
              key={v.name}
              className="rounded-lg border border-border bg-card p-6 shadow-sm hover-glow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-primary">{v.name}</h3>
              <p className="text-sm font-medium text-muted-foreground">{v.role} · {v.timeframe}</p>
              <p className="mt-3 text-sm text-foreground/90">{v.blurb}</p>
              {v.details && (
                <p className="mt-3 text-sm text-muted-foreground">{v.details}</p>
              )}
              {v.stack && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                    {v.stack}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ventures;
