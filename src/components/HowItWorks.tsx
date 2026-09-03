const steps = [
  {
    num: '01',
    title: 'DEFINE',
    desc: 'Understand the model, dataset, business objective, and evaluation requirements.',
  },
  {
    num: '02',
    title: 'ANNOTATE',
    desc: 'Generate high-quality human-labeled data while following detailed project guidelines.',
  },
  {
    num: '03',
    title: 'EVALUATE',
    desc: 'Measure model performance and identify weaknesses, inconsistencies, and edge cases.',
  },
  {
    num: '04',
    title: 'IMPROVE',
    desc: 'Turn human feedback and evaluation insights into better AI systems.',
  },
];

export function HowItWorks() {
  return (
    <section className="section-pad bg-bg-soft/30">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="badge text-cyan border-cyan/30 mb-4">
            Process
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Our AI Data Annotation & Evaluation Process
          </h2>
          <p className="text-text-muted">
            A structured four-step process that turns human expertise into
            measurable AI improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px">
            <svg className="w-full h-2" preserveAspectRatio="none">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="url(#stepGrad)"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-dash"
              />
              <defs>
                <linearGradient id="stepGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative reveal reveal-delay-${i + 1}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 rounded-full glass-card flex items-center justify-center mb-5">
                  <span className="font-display text-2xl font-bold text-gradient-blue">
                    {step.num}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl -z-10" />
                </div>
                <h3 className="font-display text-lg font-bold text-white tracking-wider mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed max-w-xs">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
