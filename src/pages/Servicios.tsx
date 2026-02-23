import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import serviceCleaning from "@/assets/service-cleaning.webp";
import serviceAesthetic from "@/assets/service-aesthetic.webp";
import serviceImplants from "@/assets/service-implants.webp";
import serviceWhitening from "@/assets/service-whitening.webp";
import serviceOrthodontics from "@/assets/service-orthodontics.webp";
import serviceEndodontics from "@/assets/service-endodontics.webp";

const services = [
  {
    title: "Limpieza Dental Profesional",
    description:
      "Eliminación de placa y sarro con ultrasonido de última generación. Incluye pulido dental y aplicación de flúor para protección prolongada.",
    image: serviceCleaning,
  },
  {
    title: "Estética Dental",
    description:
      "Diseño de sonrisa personalizado, carillas de porcelana y resinas de alta estética para transformar tu imagen con resultados naturales.",
    image: serviceAesthetic,
  },
  {
    title: "Implantes y Rehabilitación",
    description:
      "Implantes de titanio con tecnología de precisión digital. Rehabilitación oral completa para devolverte funcionalidad y confianza.",
    image: serviceImplants,
  },
  {
    title: "Blanqueamiento Dental",
    description:
      "Tratamiento profesional en consultorio con luz LED de alta potencia. Resultados visibles desde la primera sesión, hasta 8 tonos más blancos.",
    image: serviceWhitening,
  },
  {
    title: "Ortodoncia",
    description:
      "Alineadores transparentes y brackets de última generación para corregir la posición dental de forma discreta y efectiva.",
    image: serviceOrthodontics,
  },
  {
    title: "Endodoncia",
    description:
      "Tratamientos de conductos con microscopio operatorio y sistemas rotatorios para preservar tus dientes naturales sin dolor.",
    image: serviceEndodontics,
  },
];

const Servicios = () => {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Nuestros Servicios"
        subtitle="Tratamientos especializados con tecnología de punta y atención personalizada."
        image={serviceCleaning}
        imageAlt="Servicios dentales profesionales"
      />

      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceDetailCard
                key={service.title}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24"
        style={{
          background:
            "linear-gradient(135deg, hsl(82, 50%, 25%), hsl(82, 55%, 32%))",
        }}
      >
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-6">
            ¿Necesitas un tratamiento?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-10 max-w-lg mx-auto">
            Agenda tu cita de evaluación sin compromiso.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-primary-bright text-primary-foreground font-body font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-elegant"
          >
            Agendar Cita
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const ServiceDetailCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group rounded-xl overflow-hidden bg-background shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, hsla(210, 10%, 15%, 0.6), transparent)",
          }}
        />
      </div>
      <div className="p-8">
        <h3 className="font-display text-xl font-semibold text-foreground mb-3">
          {service.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default Servicios;
