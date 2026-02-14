const items = [
  {
    title: "Applied AI & LLM Systems",
    body:
      "Hands-on design of LLM features (RAG, prompt/system design, guardrails) and ML models, from problem framing through deployment and monitoring.",
  },
  {
    title: "MLOps / LLMOps & Reliability",
    body:
      "Evaluation frameworks, experiment tracking, CI/CD for models, observability and safeguards for hallucination, latency, and cost.",
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
    <section className="py-16">
      <h2 className="text-2xl font-semibold mb-6">AI & Data Leadership</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-slate-700 bg-slate-900/40 p-4"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
