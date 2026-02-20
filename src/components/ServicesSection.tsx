import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import serviceCleaning from "@/assets/service-cleaning.webp";
import serviceAesthetic from "@/assets/service-aesthetic.webp";
import serviceImplants from "@/assets/service-implants.webp";

const services = [
  {
    title: "Limpieza Dental Profesional",
    description: "Eliminación de placa y sarro con tecnología de última generación para una higiene oral completa.",
    image: serviceCleaning,
  },
  {
    title: "Estética Dental",
    description: "Diseño de sonrisa, blanqueamiento y carillas para resaltar tu mejor versión.",
    image: serviceAesthetic,
  },
  {
    title: "Implantes y Rehabilitación",
    description: "Soluciones permanentes con implantes de titanio y rehabilitación oral integral.",
    image: serviceImplants,
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicios" className="py-24 bg-gray-light">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Servicios Destacados
          </h2>
          <p className="mt-4 font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Tratamientos especializados con los más altos estándares de calidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="aspect-[4/5] relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, hsla(160, 35%, 30%, 0.85), hsla(210, 10%, 25%, 0.85))",
          }}
        />
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <h3 className="font-display text-2xl font-bold text-primary-foreground mb-3">
            {service.title}
          </h3>
          <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
