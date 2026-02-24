import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import baHero from "@/assets/ba-hero.webp";
import baVeneers from "@/assets/ba-veneers.webp";
import baRestoration from "@/assets/ba-restoration.webp";
import baWhitening from "@/assets/ba-whitening.webp";
import baOrthodontics from "@/assets/ba-orthodontics.webp";
import baImplants from "@/assets/ba-implants.webp";

const cases = [
  {
    title: "Carillas de Porcelana",
    description:
      "Transformación completa de la sonrisa con carillas ultrafinas de porcelana, logrando un resultado natural y duradero.",
    image: baVeneers,
    treatment: "Carillas",
    duration: "2 semanas",
  },
  {
    title: "Restauración Integral",
    description:
      "Rehabilitación oral completa con coronas y restauraciones estéticas para devolver la funcionalidad y belleza de la sonrisa.",
    image: baRestoration,
    treatment: "Restauración",
    duration: "4 semanas",
  },
  {
    title: "Blanqueamiento Dental",
    description:
      "Blanqueamiento profesional con tecnología LED avanzada, logrando hasta 8 tonos más blancos en una sola sesión.",
    image: baWhitening,
    treatment: "Blanqueamiento",
    duration: "1 sesión",
  },
  {
    title: "Ortodoncia Invisible",
    description:
      "Alineación perfecta con alineadores transparentes, corrigiendo la posición dental de forma discreta y cómoda.",
    image: baOrthodontics,
    treatment: "Ortodoncia",
    duration: "12 meses",
  },
  {
    title: "Implantes Dentales",
    description:
      "Reemplazo de piezas dentales perdidas con implantes de titanio y coronas de cerámica de alta estética.",
    image: baImplants,
    treatment: "Implantes",
    duration: "3 meses",
  },
];

const testimonials = [
  {
    name: "María García",
    treatment: "Carillas de Porcelana",
    rating: 5,
    comment:
      "Estoy encantada con el resultado. Mis carillas se ven completamente naturales y me han devuelto la confianza para sonreír sin pena. El equipo fue muy profesional y atento durante todo el proceso.",
  },
  {
    name: "Carlos Hernández",
    treatment: "Implantes Dentales",
    rating: 5,
    comment:
      "Después de años sin una pieza dental, el implante cambió mi vida. Puedo comer con normalidad y mi sonrisa luce completa. El procedimiento fue mucho más sencillo de lo que esperaba.",
  },
  {
    name: "Ana Martínez",
    treatment: "Blanqueamiento Dental",
    rating: 5,
    comment:
      "En una sola sesión mis dientes quedaron increíblemente blancos. Es un cambio notorio y todos me preguntan qué me hice. Sin duda lo recomiendo al 100%.",
  },
  {
    name: "Roberto López",
    treatment: "Ortodoncia Invisible",
    rating: 5,
    comment:
      "Los alineadores fueron la mejor decisión. Nadie notó que los llevaba y ahora tengo la sonrisa que siempre quise. El seguimiento mensual fue impecable.",
  },
  {
    name: "Laura Rivas",
    treatment: "Restauración Integral",
    rating: 4,
    comment:
      "Tenía varios dientes en mal estado y el equipo logró una rehabilitación completa. Estoy feliz con los resultados, me siento como una persona nueva cada vez que sonrío.",
  },
  {
    name: "Diego Fuentes",
    treatment: "Carillas de Porcelana",
    rating: 5,
    comment:
      "El cambio fue impresionante. Mis dientes se veían desgastados y ahora lucen perfectos. La atención fue de primera y el resultado superó todas mis expectativas.",
  },
];

const AntesYDespues = () => {
  const introAnim = useScrollAnimation();
  const testimonialsAnim = useScrollAnimation();
  const ctaAnim = useScrollAnimation();

  return (
    <main>
      <Navbar />
      <PageHero
        title="Antes y Después"
        subtitle="Resultados reales que hablan por sí solos. Descubre las transformaciones que hemos logrado."
        image={baHero}
        imageAlt="Paciente sonriendo con resultados dentales"
      />

      {/* Intro */}
      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={introAnim.ref}
            className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-700 ${
              introAnim.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Transformaciones Reales
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Cada caso es único y refleja nuestro compromiso con la excelencia.
              Utilizamos las técnicas más avanzadas para lograr resultados que
              superan las expectativas de nuestros pacientes.
            </p>
          </div>

          {/* Cases Grid */}
          <div className="space-y-16">
            {cases.map((c, i) => (
              <CaseCard key={c.title} caseData={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={testimonialsAnim.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              testimonialsAnim.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Lo Que Dicen Nuestros Pacientes
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
              La satisfacción de nuestros pacientes es nuestra mejor carta de
              presentación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, hsl(82, 50%, 25%), hsl(82, 55%, 32%))",
        }}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={ctaAnim.ref}
            className={`text-center transition-all duration-700 ${
              ctaAnim.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              ¿Listo para tu transformación?
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Agenda tu consulta de valoración y descubre cómo podemos
              transformar tu sonrisa.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-foreground text-foreground font-body font-semibold hover:bg-primary-foreground/90 transition-colors duration-300"
            >
              Agendar Consulta
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const CaseCard = ({
  caseData,
  index,
}: {
  caseData: (typeof cases)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className={`rounded-xl overflow-hidden shadow-elegant ${
          isEven ? "" : "lg:order-2"
        }`}
      >
        <img
          src={caseData.image}
          alt={`Resultado de ${caseData.title}`}
          className="w-full h-72 sm:h-80 object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <div className={isEven ? "" : "lg:order-1"}>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-body text-xs font-semibold">
            {caseData.treatment}
          </span>
          <span className="font-body text-xs text-muted-foreground">
            Duración: {caseData.duration}
          </span>
        </div>
        <h3 className="font-display text-2xl font-bold text-foreground mb-4">
          {caseData.title}
        </h3>
        <p className="font-body text-muted-foreground leading-relaxed">
          {caseData.description}
        </p>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`p-8 rounded-xl bg-secondary shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-1 flex flex-col ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote size={28} className="text-primary/30 mb-4" />
      <p className="font-body text-sm text-muted-foreground leading-relaxed flex-grow mb-6">
        "{testimonial.comment}"
      </p>
      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={
              i < testimonial.rating
                ? "text-primary-bright fill-primary-bright"
                : "text-muted-foreground/30"
            }
          />
        ))}
      </div>
      <p className="font-display text-sm font-semibold text-foreground">
        {testimonial.name}
      </p>
      <p className="font-body text-xs text-muted-foreground">
        {testimonial.treatment}
      </p>
    </div>
  );
};

export default AntesYDespues;
