import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import diffTechnology from "@/assets/diff-technology.webp";
import diffAttention from "@/assets/diff-attention.webp";
import diffBiosafety from "@/assets/diff-biosafety.webp";

const differentiators = [
  {
    title: "Tecnología avanzada",
    description: "Equipos de última generación para diagnósticos precisos y tratamientos mínimamente invasivos.",
    image: diffTechnology,
  },
  {
    title: "Atención personalizada",
    description: "Cada paciente recibe un plan de tratamiento adaptado a sus necesidades específicas.",
    image: diffAttention,
  },
  {
    title: "Protocolos de bioseguridad",
    description: "Estrictos procesos de esterilización y control de infecciones para tu tranquilidad.",
    image: diffBiosafety,
  },
];

const DifferentiatorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Por qué elegir nuestra clínica
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {differentiators.map((item, index) => (
            <DiffCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DiffCard = ({ item, index }: { item: typeof differentiators[0]; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="w-full aspect-square rounded-xl overflow-hidden mb-6 shadow-card">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {item.title}
      </h3>
      <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
        {item.description}
      </p>
    </div>
  );
};

export default DifferentiatorSection;
