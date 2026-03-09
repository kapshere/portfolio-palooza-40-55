import { Badge } from "@/components/ui/badge";

const ventures = [
  {
    name: "Stockscore.in",
    role: "Co-founder & Product Head",
    timeframe: "Oct 2025 – Present",
    blurb:
      "Equity analytics platform that automates fundamental analysis of stocks, sectors, and markets. Designing AI-driven scoring models to quantify investor behavior, risk, and portfolio quality for retail and advisory users.",
    details:
      "Owning productisation (B2B) strategy, defining experimentation and evaluation frameworks (backtests, A/Bs, uplift vs benchmarks), and partnering with early users to tune thresholds, alerts, and UX for actionable insights.",
    stack: "Python, time-series models, cloud-native APIs",
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
    timeframe: "2025 – Present",
    blurb:
      "Co-designed protocol and reference architecture for ZYND, an AI-driven on-chain/off-chain orchestration layer under the Alan Scott/Omnis umbrella, focusing on data integrity, identity, and agent coordination.",
    details:
      "Strategic advisor to an AI startup hub incubating B2B AI products; defined reusable technical patterns (identity, data pipelines, evaluation harnesses) across portfolio companies. Conducted architecture reviews, risk assessments, and roadmap workshops with emphasis on responsible AI and enterprise readiness.",
  },
  {
    name: "Freedom Wise",
    role: "Solopreneur",
    timeframe: "In Development",
    blurb:
      "Personal productivity and financial freedom companion combining AI agents and behavioral insights. Self-developed with AI coding agents.",
  },
  {
    name: "Independent Technology Consultant & Startup Advisor",
    role: "Hybrid",
    timeframe: "Jan 2024 – Present",
    blurb:
      "Advising and mentoring multiple early-stage AI/blockchain startups on product strategy, architecture, and GTM — often acting as an extended co-founder for design, hiring, and fundraising narratives.",
    details:
      "Designed and implemented AI agents and LLM-backed features for AML/fraud detection, stock market analysis, and enterprise search, including RAG and evaluation/guardrail patterns.",
  },
];

export function Ventures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Ventures & AI Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {ventures.map((v) => (
            <div
              key={v.name}
              className="rounded-lg border border-border bg-card p-5 shadow-sm hover-glow"
            >
              <h3 className="text-lg font-semibold text-primary">{v.name}</h3>
              <p className="text-sm text-muted-foreground">{v.role} · {v.timeframe}</p>
              <p className="mt-2 text-sm text-foreground">{v.blurb}</p>
              {v.details && (
                <p className="mt-2 text-xs text-muted-foreground">{v.details}</p>
              )}
              {v.stack && (
                <div className="mt-3">
                  <Badge variant="secondary" className="text-xs">{v.stack}</Badge>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
