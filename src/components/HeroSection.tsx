import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-dental.webp";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Odontóloga atendiendo paciente en clínica dental moderna"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, hsla(210, 15%, 12%, 0.72), hsla(82, 40%, 18%, 0.6))",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-2xl">
          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight opacity-0 animate-fade-up"
          >
            Odontología moderna con atención personalizada
          </h1>
          <p
            className="mt-6 font-body text-lg sm:text-xl text-primary-foreground/85 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Tecnología avanzada y cuidado integral para tu sonrisa.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary-bright text-primary-foreground font-body font-semibold text-base hover:brightness-110 transition-all duration-300 shadow-elegant"
            >
              Agendar Cita
            </Link>
            <Link
              to="/servicios"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold text-base hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Conocer Servicios
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
