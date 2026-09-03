import {
  Image,
  Video,
  FileText,
  Languages,
  CheckCircle2,
  MessageSquare,
  ShieldAlert,
  Search,
  Gauge,
  ListChecks,
  BarChart3,
  Layers3,
} from 'lucide-react';

const services = [
  { icon: Image, label: 'Image Annotation' },
  { icon: Video, label: 'Video Annotation' },
  { icon: FileText, label: 'Text Annotation' },
  { icon: Languages, label: 'NLP Data Annotation' },
  { icon: CheckCircle2, label: 'LLM Response Evaluation' },
  { icon: MessageSquare, label: 'Prompt Evaluation' },
  { icon: ShieldAlert, label: 'Content Moderation' },
  { icon: Search, label: 'Search Relevance Evaluation' },
  { icon: Gauge, label: 'AI Safety Testing' },
  { icon: ListChecks, label: 'Data Quality Assurance' },
  { icon: BarChart3, label: 'Human Preference Ranking' },
  { icon: Layers3, label: 'Multimodal Data Labeling' },
];

export function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="badge text-accent-soft border-accent/30 mb-4">
            Services
          </div>
         <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
           AI Data Annotation & LLM Evaluation Services
          </h2>
          <p className="text-text-muted">
            A full suite of annotation and evaluation services covering every
            modality and stage of the AI development pipeline.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={service.label}
              className={`glass-card p-5 flex flex-col items-center text-center gap-3 reveal reveal-delay-${(i % 4) + 1}`}
            >
              <div className="w-11 h-11 rounded-xl bg-surface-2 border border-border flex items-center justify-center transition-colors group-hover:border-primary/30">
                <service.icon className="text-primary-soft" size={20} />
              </div>
              <h3 className="text-sm font-medium text-text leading-snug">
                {service.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
