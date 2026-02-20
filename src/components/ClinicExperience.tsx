import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import clinicInterior from "@/assets/clinic-interior.webp";

const ClinicExperience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="relative py-0">
      <div className="relative min-h-[60vh] flex items-center">
        <img
          src={clinicInterior}
          alt="Interior moderno de la clínica dental"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/40" />

        <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24">
          <div
            ref={ref}
            className={`max-w-xl ml-auto transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className="rounded-xl p-10 backdrop-blur-md"
              style={{
                background: "hsla(210, 10%, 20%, 0.7)",
              }}
            >
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
                Experiencia Clínica
              </h2>
              <p className="font-body text-lg text-primary-foreground/85 leading-relaxed">
                Un espacio diseñado para tu comodidad y confianza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicExperience;
