import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Tag, Calendar, ArrowRight } from "lucide-react";
import promoFamily from "@/assets/promo-family.webp";
import promoWhitening from "@/assets/promo-whitening.webp";
import promoFirstVisit from "@/assets/promo-firstvisit.webp";

const promotions = [
  {
    title: "Plan Familiar",
    description:
      "Trae a toda tu familia y obtén un 20% de descuento en limpiezas dentales para cada integrante. La salud bucal es mejor en familia.",
    discount: "20% OFF",
    validUntil: "Válido hasta Marzo 2026",
    image: promoFamily,
  },
  {
    title: "Blanqueamiento Premium",
    description:
      "Sesión de blanqueamiento dental profesional con tecnología LED a precio especial. Incluye kit de mantenimiento para el hogar.",
    discount: "30% OFF",
    validUntil: "Válido hasta Abril 2026",
    image: promoWhitening,
  },
  {
    title: "Primera Consulta Gratis",
    description:
      "Tu primera evaluación dental completa sin costo. Incluye diagnóstico, plan de tratamiento personalizado y radiografía panorámica.",
    discount: "GRATIS",
    validUntil: "Sin fecha límite",
    image: promoFirstVisit,
  },
];

const Promociones = () => {
  const introAnim = useScrollAnimation();

  return (
    <main>
      <Navbar />
      <PageHero
        title="Promociones"
        subtitle="Aprovecha nuestras ofertas especiales para cuidar tu sonrisa."
        image={promoFamily}
        imageAlt="Promociones dentales para toda la familia"
      />

      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div
            ref={introAnim.ref}
            className={`text-center mb-16 transition-all duration-700 ${
              introAnim.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              Ofertas Activas
            </h2>
            <p className="mt-4 font-body text-muted-foreground text-lg max-w-xl mx-auto">
              Promociones por tiempo limitado. No dejes pasar la oportunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <PromoCard key={promo.title} promo={promo} index={index} />
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
            ¿Quieres aprovechar alguna promoción?
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg mb-10 max-w-lg mx-auto">
            Contáctanos y agenda tu cita con descuento.
          </p>
          <a
            href="/contacto"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-lg bg-primary-bright text-primary-foreground font-body font-semibold text-lg hover:brightness-110 transition-all duration-300 shadow-elegant"
          >
            Agendar Cita <ArrowRight size={20} />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

const PromoCard = ({
  promo,
  index,
}: {
  promo: (typeof promotions)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group rounded-xl overflow-hidden bg-background shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={promo.image}
          alt={promo.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsla(82, 50%, 30%, 0.85), hsla(210, 10%, 25%, 0.85))",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-4xl font-bold text-primary-foreground">
            {promo.discount}
          </span>
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-display text-xl font-semibold text-foreground mb-3">
          {promo.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
          {promo.description}
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar size={14} className="text-primary-bright" />
          <span className="font-body text-xs">{promo.validUntil}</span>
        </div>
      </div>
    </div>
  );
};

export default Promociones;
