import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 50, suffix: 'K+', label: 'Tasks Completed' },
  { value: 99, suffix: '%+', label: 'Quality Accuracy' },
  { value: 24, suffix: '/7', label: 'Operational Support' },
  { value: 0, suffix: '', label: 'Global Talent Network', isText: true, textValue: 'Global' },
];

export function Stats() {
  return (
    <section className="relative py-16 lg:py-20 border-y border-border bg-bg-soft/50">
      <div className="container-x">
        <div className="max-w-2xl mb-12 reveal">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Human Expertise Behind Better AI
          </h2>
          <p className="text-text-muted leading-relaxed">
            AI systems are only as reliable as the data and feedback used to
            build them. Bros Annotation connects human expertise with modern AI
            workflows to deliver accurate, consistent, and scalable data
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`glass-card p-6 text-center reveal reveal-delay-${i + 1}`}
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient-blue mb-2">
                {stat.isText ? (
                  <span>{stat.textValue}</span>
                ) : (
                  <Counter target={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}
