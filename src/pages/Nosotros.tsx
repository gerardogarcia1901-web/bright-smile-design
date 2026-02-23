import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Award,
  Heart,
  Lightbulb,
  ShieldCheck,
  Users,
  GraduationCap,
  Stethoscope,
  Clock,
} from "lucide-react";
import aboutTeam from "@/assets/about-team.webp";
import aboutMission from "@/assets/about-mission.webp";
import aboutClinic from "@/assets/about-clinic.webp";

const values = [
  {
    title: "Excelencia Clínica",
    description:
      "Formación continua y uso de materiales de primera calidad en cada procedimiento.",
    icon: Award,
  },
  {
    title: "Empatía",
    description:
      "Escuchamos tus necesidades y te acompañamos en cada paso de tu tratamiento.",
    icon: Heart,
  },
  {
    title: "Innovación",
    description:
      "Incorporamos tecnología de vanguardia para resultados más precisos y cómodos.",
    icon: Lightbulb,
  },
  {
    title: "Integridad",
    description:
      "Diagnósticos honestos y transparentes, siempre pensando en tu bienestar.",
    icon: ShieldCheck,
  },
];

const stats = [
  { number: "+5,000", label: "Pacientes Atendidos", icon: Users },
  { number: "+15", label: "Años de Experiencia", icon: Clock },
  { number: "+10", label: "Especialistas", icon: GraduationCap },
  { number: "+20", label: "Tratamientos Disponibles", icon: Stethoscope },
];

const Nosotros = () => {
  const missionAnim = useScrollAnimation();
  const visionAnim = useScrollAnimation();
  const statsAnim = useScrollAnimation();
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
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Desde nuestra fundación, hemos atendido a miles de pacientes con
                un enfoque centrado en la prevención, la estética y la
                rehabilitación oral completa.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Nuestro equipo multidisciplinario trabaja de manera coordinada
                para ofrecer planes de tratamiento integrales, asegurando que
                cada paciente reciba exactamente lo que necesita.
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

      {/* Vision */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={visionAnim.ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center transition-all duration-700 ${
              visionAnim.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="order-2 md:order-1 rounded-xl overflow-hidden shadow-elegant">
              <img
                src={aboutTeam}
                alt="Equipo profesional dental"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Nuestra Visión
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">
                Ser la clínica dental de referencia en la región, reconocida por
                la excelencia de nuestros tratamientos, la calidez de nuestro
                equipo y el compromiso con la innovación tecnológica.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Aspiramos a transformar la experiencia dental tradicional,
                eliminando el miedo y la ansiedad, y reemplazándolos con
                confianza y satisfacción en cada visita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, hsl(82, 50%, 25%), hsl(82, 55%, 32%))",
        }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={statsAnim.ref}
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
              statsAnim.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <stat.icon
                  size={32}
                  className="text-primary-foreground/80 mx-auto mb-3"
                />
                <p className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.number}
                </p>
                <p className="font-body text-sm text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
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
            <p className="mt-4 font-body text-muted-foreground text-lg max-w-xl mx-auto">
              Los pilares que guían cada decisión y cada tratamiento en nuestra
              clínica.
            </p>
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
                  Contamos con salas de espera confortables, consultorios
                  totalmente equipados y áreas de esterilización de última
                  generación.
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
  value: (typeof values)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`p-8 rounded-xl bg-background shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-1 text-center ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
        <value.icon size={24} className="text-primary-bright" />
      </div>
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
