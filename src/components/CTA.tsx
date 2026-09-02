import { ArrowRight, Mail } from 'lucide-react';

export function CTA() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="relative glass-card rounded-3xl p-10 sm:p-16 text-center overflow-hidden reveal">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/15 blur-[100px]" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full bg-accent/10 blur-[80px]" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Ready to Build Better AI?
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Have an AI data, annotation, or model evaluation requirement?
              Let's discuss how Bros Annotation can help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => scrollTo('#contact')} className="btn-primary">
                Start a Conversation
                <ArrowRight size={18} />
              </button>
              <a
                href="mailto:brosannotation@gmail.com"
                className="btn-secondary"
              >
                <Mail size={18} />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
