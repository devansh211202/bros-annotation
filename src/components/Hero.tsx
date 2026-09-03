import { ArrowRight, MessageSquare } from 'lucide-react';

const featureBadges = [
  'LLM Evaluation',
  'Data Annotation',
  'RLHF',
  'AI Safety',
];

export function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background grid + glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left content */}
        <div className="max-w-xl">
          <div className="badge text-primary-soft border-primary/30 mb-6 reveal is-visible">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-soft animate-pulse-glow" />
            AI Data &amp; Model Training
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-white mb-6">
            AI Data Annotation
            <br />
            <span className="text-gradient">& LLM Evaluation</span>
          </h1>

          <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-lg">
            Bros Annotation provides high-quality human data, annotation,
            evaluation, and feedback services that help AI teams build smarter,
            safer, and more reliable models.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button onClick={() => scrollTo('#solutions')} className="btn-primary">
              Explore Solutions
              <ArrowRight size={18} />
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-secondary">
              <MessageSquare size={18} />
              Talk to Us
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {featureBadges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-text-muted bg-surface/40 border border-border backdrop-blur-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden lg:block">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-lg ml-auto">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-border animate-spin-slow" />
      <div className="absolute inset-8 rounded-full border border-border animate-spin-slow" style={{ animationDirection: 'reverse' }} />

      {/* Central glow */}
      <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl animate-pulse-glow" />

      {/* Neural network SVG */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id="nodeGrad">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </radialGradient>
          <radialGradient id="nodeGrad2">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </radialGradient>
        </defs>

        {/* Connections */}
        <g stroke="url(#lineGrad)" strokeWidth="1" opacity="0.5">
          <line x1="80" y1="80" x2="200" y2="200" className="animate-dash" />
          <line x1="320" y1="80" x2="200" y2="200" className="animate-dash" />
          <line x1="80" y1="320" x2="200" y2="200" className="animate-dash" />
          <line x1="320" y1="320" x2="200" y2="200" className="animate-dash" />
          <line x1="80" y1="80" x2="320" y2="80" className="animate-dash" />
          <line x1="320" y1="80" x2="320" y2="320" className="animate-dash" />
          <line x1="320" y1="320" x2="80" y2="320" className="animate-dash" />
          <line x1="80" y1="320" x2="80" y2="80" className="animate-dash" />
          <line x1="140" y1="140" x2="260" y2="140" className="animate-dash" />
          <line x1="260" y1="140" x2="260" y2="260" className="animate-dash" />
          <line x1="260" y1="260" x2="140" y2="260" className="animate-dash" />
          <line x1="140" y1="260" x2="140" y2="140" className="animate-dash" />
        </g>

        {/* Nodes */}
        <circle cx="200" cy="200" r="14" fill="url(#nodeGrad)" className="animate-pulse-glow" />
        <circle cx="80" cy="80" r="8" fill="url(#nodeGrad2)" className="animate-pulse-glow" />
        <circle cx="320" cy="80" r="8" fill="url(#nodeGrad)" className="animate-pulse-glow" />
        <circle cx="80" cy="320" r="8" fill="url(#nodeGrad2)" className="animate-pulse-glow" />
        <circle cx="320" cy="320" r="8" fill="url(#nodeGrad)" className="animate-pulse-glow" />
        <circle cx="140" cy="140" r="5" fill="#22d3ee" opacity="0.8" />
        <circle cx="260" cy="140" r="5" fill="#22d3ee" opacity="0.8" />
        <circle cx="140" cy="260" r="5" fill="#22d3ee" opacity="0.8" />
        <circle cx="260" cy="260" r="5" fill="#22d3ee" opacity="0.8" />
      </svg>

      {/* Floating data cards */}
      <div className="absolute top-4 right-0 glass-card px-4 py-3 rounded-xl animate-float">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
          <span className="text-xs font-mono text-text-muted">annotation_active</span>
        </div>
        <div className="text-sm font-semibold text-white mt-1">98.7% accuracy</div>
      </div>

      <div className="absolute bottom-8 left-0 glass-card px-4 py-3 rounded-xl animate-float-slow">
        <div className="text-xs font-mono text-text-muted">eval_score</div>
        <div className="text-sm font-semibold text-white mt-1">4.82 / 5.00</div>
      </div>

      <div className="absolute top-1/2 -right-4 glass-card px-3 py-2 rounded-lg animate-float" style={{ animationDelay: '2s' }}>
        <div className="text-xs font-mono text-cyan">RLHF</div>
      </div>
    </div>
  );
}
