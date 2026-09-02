import { Brain, Tag, ClipboardCheck, ThumbsUp, ShieldCheck, Layers } from 'lucide-react';

const solutions = [
  {
    icon: Brain,
    title: 'LLM Post-Training',
    desc: 'Human feedback and preference data designed to improve the quality, helpfulness, and alignment of language models.',
  },
  {
    icon: Tag,
    title: 'Data Annotation',
    desc: 'High-quality text, image, video, and multimodal annotation for machine learning datasets.',
  },
  {
    icon: ClipboardCheck,
    title: 'LLM Evaluation',
    desc: 'Evaluate AI responses for accuracy, relevance, helpfulness, reasoning, and overall quality.',
  },
  {
    icon: ThumbsUp,
    title: 'RLHF',
    desc: 'Human preference data and structured feedback to support reinforcement learning from human feedback workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'AI Safety',
    desc: 'Safety testing, content classification, red teaming, and policy-based evaluation for responsible AI.',
  },
  {
    icon: Layers,
    title: 'Multimodal AI',
    desc: 'Annotation and evaluation across text, images, audio, and video for next-generation AI systems.',
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="section-pad bg-bg-soft/30">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="badge text-primary-soft border-primary/30 mb-4">
            Solutions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            AI Data Solutions Built for Scale
          </h2>
          <p className="text-text-muted">
            Comprehensive data services covering the full lifecycle of AI model
            development — from annotation to evaluation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              className={`glass-card p-7 group reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <sol.icon className="text-primary-soft" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold text-white mb-3">
                {sol.title}
              </h3>
              <p className="text-text-muted leading-relaxed mb-5">{sol.desc}</p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary-soft hover:text-white transition-colors"
              >
                Learn More
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
