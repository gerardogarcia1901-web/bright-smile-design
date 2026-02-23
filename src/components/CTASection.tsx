import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      className="py-24"
      style={{
        background: "linear-gradient(135deg, hsl(82, 50%, 25%), hsl(82, 55%, 32%))",
      }}
    >
      <div
        ref={ref}
        className={`container mx-auto px-6 lg:px-12 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Agenda tu evaluación hoy
        </h2>
        <p className="font-body text-primary-foreground/80 text-lg mb-10 max-w-lg mx-auto">
          Da el primer paso hacia una sonrisa saludable y radiante.
        </p>
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-primary-bright text-primary-foreground font-body font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-elegant"
        >
          Agendar Cita
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
