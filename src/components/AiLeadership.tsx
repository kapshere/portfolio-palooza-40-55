const items = [
  {
    title: "Applied AI & LLM Systems",
    body:
      "Hands-on design of LLM features (RAG, prompt/system design, guardrails) and ML models, from problem framing through deployment and monitoring.",
  },
  {
    title: "AI Agents for Enterprises",
    body:
      "Evaluating business domain and desinging AI agents, applications using AI Agents for creating new age AI based teams and applications",
  },
  {
    title: "Compliance, Risk & Identity",
    body:
      "AML/fraud models, digital identity and signing (W3C DID), CBDC and data integrity platforms in banking and government contexts.",
  },
  {
    title: "Player–coach Leadership",
    body:
      "Leading and mentoring small AI/DS teams while remaining hands-on with architecture, code reviews, and customer-facing solutioning.",
  },
];

export function AiLeadership() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-primary mb-6">AI & Data Leadership</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-card p-5 shadow-sm hover-glow"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
