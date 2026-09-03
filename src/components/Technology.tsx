import {
  Boxes,
  Code2,
  Brain,
  Sparkles,
  Eye,
  ThumbsUp,
  Gauge,
  ShieldCheck,
  ClipboardCheck,
  UserCheck,
  MessageSquare,
  ShieldAlert,
} from 'lucide-react';

const tech = [
  { icon: Boxes, label: 'CVAT' },
  { icon: Code2, label: 'Python' },
  { icon: Brain, label: 'NLP' },
  { icon: Sparkles, label: 'LLMs' },
  { icon: Brain, label: 'Machine Learning' },
  { icon: Eye, label: 'Computer Vision' },
  { icon: ThumbsUp, label: 'RLHF' },
  { icon: Gauge, label: 'AI Evaluation' },
  { icon: ClipboardCheck, label: 'Data Quality' },
  { icon: UserCheck, label: 'Human-in-the-Loop' },
  { icon: MessageSquare, label: 'Prompt Evaluation' },
  { icon: ShieldAlert, label: 'Content Moderation' },
];

export function Technology() {
  return (
    <section id="technology" className="section-pad bg-bg-soft/30">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="badge text-primary-soft border-primary/30 mb-4">
            Technology
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            AI Data Annotation Technology & Expertise
          </h2>
          <p className="text-text-muted">
            We use professional annotation platforms, machine learning technologies,
            and human-in-the-loop workflows to deliver accurate, scalable AI training
            and evaluation data.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tech.map((item, i) => (
            <div
              key={item.label}
              className={`glass-card p-5 flex items-center gap-3.5 reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center shrink-0">
                <item.icon className="text-primary-soft" size={18} />
              </div>
              <span className="text-sm font-medium text-text">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
