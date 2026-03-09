const ventures = [
  {
    name: "VerusAI.ai",
    role: "Co-founder & Chief Architect",
    blurb:
      "AI-first platform focused on compliance, identity, and risk analytics for regulated enterprises.",
  },
  {
    name: "Stockscore.in",
    role: "Co-founder & Product Head",
    blurb:
      "Equity analytics platform that automates stock, sector and market's fundamental analysis, scores portfolios and investor behavior to improve Investment decision-making.",
  },
  {
    name: "ZYND Protocol & Alan Scott Enterprises",
    role: "Emerging Technology (AI Agents, LLM, Blockchain) Consultant",
    blurb:
      "Protocol Co-designer for Zynd. Protocol and reference architecture for AI-native, on-/off-chain orchestration with Alan Scott's Omnis/ZYND initiative.",
  },
  {
    name: "Freedom App",
    role: "Solopreneur",
    blurb:
      "Personal productivity and financial freedom companion (in development), combining AI agents and behavioral insights. Self developed with AI coding agents", 
  },
];

export function Ventures() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary mb-6">Ventures</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {ventures.map((v) => (
            <div
              key={v.name}
              className="rounded-lg border border-border bg-card p-5 shadow-sm hover-glow"
            >
              <h3 className="text-lg font-semibold text-primary">{v.name}</h3>
              <p className="text-sm text-muted-foreground">{v.role}</p>
              <p className="mt-2 text-sm text-foreground">{v.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
