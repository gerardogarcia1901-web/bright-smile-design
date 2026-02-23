import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import aboutTeam from "@/assets/about-team.webp";
import aboutMission from "@/assets/about-mission.webp";
import aboutClinic from "@/assets/about-clinic.webp";

const values = [
  {
    title: "Excelencia Clínica",
    description:
      "Formación continua y uso de materiales de primera calidad en cada procedimiento.",
  },
  {
    title: "Empatía",
    description:
      "Escuchamos tus necesidades y te acompañamos en cada paso de tu tratamiento.",
  },
  {
    title: "Innovación",
    description:
      "Incorporamos tecnología de vanguardia para resultados más precisos y cómodos.",
  },
  {
    title: "Integridad",
    description:
      "Diagnósticos honestos y transparentes, siempre pensando en tu bienestar.",
  },
];

const Nosotros = () => {
  const missionAnim = useScrollAnimation();
  const valuesAnim = useScrollAnimation();
  const clinicAnim = useScrollAnimation();

  return (
    <main>
      <Navbar />
      <PageHero
        title="Quiénes Somos"
        subtitle="Un equipo comprometido con tu salud bucal y tu bienestar."
        image={aboutTeam}
        imageAlt="Equipo de profesionales de la clínica dental"
      />

      {/* Mission */}
      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={missionAnim.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
              missionAnim.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nuestra Misión
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Brindar atención odontológica integral de la más alta calidad,
                combinando tecnología avanzada con un trato humano y
                personalizado. Creemos que cada sonrisa merece un cuidado
                excepcional.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Desde nuestra fundación, hemos atendido a miles de pacientes con
                un enfoque centrado en la prevención, la estética y la
                rehabilitación oral completa.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-elegant">
              <img
                src={aboutMission}
                alt="Atención dental profesional"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={valuesAnim.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              valuesAnim.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Nuestros Valores
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <ValueCard key={v.title} value={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Space */}
      <section className="relative py-0">
        <div className="relative min-h-[50vh] flex items-center">
          <img
            src={aboutClinic}
            alt="Interior moderno de la clínica"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-foreground/40" />
          <div className="relative z-10 container mx-auto px-6 lg:px-12 py-24">
            <div
              ref={clinicAnim.ref}
              className={`max-w-xl transition-all duration-1000 ${
                clinicAnim.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div
                className="rounded-xl p-10 backdrop-blur-md"
                style={{ background: "hsla(210, 10%, 20%, 0.7)" }}
              >
                <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
                  Nuestras Instalaciones
                </h2>
                <p className="font-body text-lg text-primary-foreground/85 leading-relaxed">
                  Un espacio moderno, cálido y equipado con la última tecnología
                  para que cada visita sea una experiencia cómoda y segura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const ValueCard = ({
  value,
  index,
}: {
  value: { title: string; description: string };
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`p-8 rounded-xl bg-background shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="font-display text-lg font-semibold text-foreground mb-3">
        {value.title}
      </h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        {value.description}
      </p>
    </div>
  );
};

export default Nosotros;
