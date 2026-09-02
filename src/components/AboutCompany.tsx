const flow = [
  'Human Expertise',
  'Data Annotation',
  'Evaluation',
  'Model Improvement',
  'Better AI',
];

export function AboutCompany() {
  return (
    <section className="section-pad">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="reveal">
          <div className="badge text-accent-soft border-accent/30 mb-4">
            Our Mission
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
            Built Around Human Expertise
          </h2>
          <p className="text-text-muted leading-relaxed">
            Bros Annotation is focused on helping AI teams turn human expertise
            into high-quality training and evaluation data. From annotation and
            quality assurance to LLM evaluation and AI safety, we aim to make AI
            development more reliable through structured human feedback.
          </p>
        </div>

        <div className="reveal reveal-delay-2">
          <FlowVisual />
        </div>
      </div>
    </section>
  );
}

function FlowVisual() {
  return (
    <div className="flex flex-col items-center gap-0">
      {flow.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <div
            className={`glass-card px-6 py-4 rounded-xl w-full max-w-xs text-center ${
              i === flow.length - 1 ? 'border-primary/40 glow-blue' : ''
            }`}
          >
            <span
              className={`font-display font-semibold ${
                i === flow.length - 1 ? 'text-gradient-blue' : 'text-white'
              }`}
            >
              {step}
            </span>
          </div>
          {i < flow.length - 1 && (
            <div className="h-8 flex items-center">
              <svg width="2" height="32" className="overflow-visible">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="32"
                  stroke="url(#flowGrad)"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-dash"
                />
                <defs>
                  <linearGradient id="flowGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
