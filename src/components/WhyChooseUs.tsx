import { UserCheck, FileText, ShieldCheck, Users, Zap, Lock } from 'lucide-react';

const features = [
  {
    icon: UserCheck,
    title: 'Human-in-the-Loop Quality',
    desc: 'Human expertise helps ensure nuanced and reliable AI data.',
  },
  {
    icon: FileText,
    title: 'Detailed Guidelines',
    desc: 'Structured instructions help teams maintain consistent annotation quality.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    desc: 'Multi-level review processes help identify and reduce annotation errors.',
  },
  {
    icon: Users,
    title: 'Scalable Teams',
    desc: 'Flexible human capacity for growing data requirements.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    desc: 'Efficient workflows designed to deliver quality data on schedule.',
  },
  {
    icon: Lock,
    title: 'Data Confidentiality',
    desc: 'Professional processes designed around responsible handling of client data.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <div className="badge text-accent-soft border-accent/30 mb-4">
            Why Us
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Why Choose Bros Annotation?
          </h2>
          <p className="text-text-muted">
            We combine human expertise with structured workflows to deliver data
            you can trust.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`glass-card p-7 reveal reveal-delay-${(i % 3) + 1}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                  <feat.icon className="text-primary-soft" size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {feat.title}
                </h3>
              </div>
              <p className="text-text-muted leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
