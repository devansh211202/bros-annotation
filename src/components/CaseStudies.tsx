import { Brain, Eye, ShieldAlert } from 'lucide-react';

const cases = [
  {
    icon: Brain,
    title: 'LLM Response Evaluation',
    desc: 'Structured human evaluation of AI responses across quality, relevance, helpfulness, and instruction-following criteria.',
  },
  {
    icon: Eye,
    title: 'Computer Vision Dataset',
    desc: 'Image and video annotation workflows for machine learning and computer vision datasets.',
  },
  {
    icon: ShieldAlert,
    title: 'AI Safety Evaluation',
    desc: 'Systematic evaluation of potentially harmful, unsafe, or policy-sensitive AI outputs.',
  },
];

export function CaseStudies() {
  return (
    <section className="section-pad bg-bg-soft/30">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="badge text-cyan border-cyan/30 mb-4">
            Case Studies
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Sample Projects
          </h2>
          <p className="text-text-muted">
            Representative examples of the types of projects we handle. These are
            illustrative samples, not real client engagements.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {cases.map((item, i) => (
            <div
              key={item.title}
              className={`glass-card p-7 relative reveal reveal-delay-${i + 1}`}
            >
              <span className="absolute top-5 right-5 px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider text-text-dim bg-surface-2 border border-border">
                Sample Project
              </span>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
                <item.icon className="text-primary-soft" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3 pr-20">
                {item.title}
              </h3>
              <p className="text-text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
