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
      "Equity analytics platform that scores portfolios and investor behavior to improve decision-making.",
  },
  {
    name: "ZYND Protocol",
    role: "Protocol Co-designer",
    blurb:
      "Protocol and reference architecture for AI-native, on-/off-chain orchestration with Alan Scott's Omnis/ZYND initiative.",
  },
  {
    name: "Freedom App",
    role: "Founder",
    blurb:
      "Personal productivity and financial freedom companion (in development), combining AI agents and behavioral insights.",
  },
];

export function Ventures() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-semibold mb-6">Ventures</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {ventures.map((v) => (
          <div
            key={v.name}
            className="rounded-lg border border-slate-700 bg-slate-900/40 p-4"
          >
            <h3 className="text-lg font-semibold">{v.name}</h3>
            <p className="text-sm text-slate-400">{v.role}</p>
            <p className="mt-2 text-sm text-slate-300">{v.blurb}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
