import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.webp";

const Contacto = () => {
  const formAnim = useScrollAnimation();
  const infoAnim = useScrollAnimation();

  return (
    <main>
      <Navbar />
      <PageHero
        title="Contacto"
        subtitle="Estamos aquí para atenderte. Agenda tu cita o envíanos un mensaje."
        image={clinicInterior}
        imageAlt="Clínica dental moderna"
      />

      <section className="py-24 bg-gray-light">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div
              ref={formAnim.ref}
              className={`transition-all duration-700 ${
                formAnim.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                Envíanos un Mensaje
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-2">
                      Apellido
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+503 0000-0000"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-base hover:bg-primary-bright transition-all duration-300 shadow-elegant"
                >
                  Enviar Mensaje <Send size={16} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              ref={infoAnim.ref}
              className={`transition-all duration-700 ${
                infoAnim.isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                Información de Contacto
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary-bright" />
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-semibold text-foreground mb-1">
                      Teléfono
                    </h4>
                    <a
                      href="tel:+50312345678"
                      className="font-body text-sm text-muted-foreground hover:text-primary-bright transition-colors"
                    >
                      +503 1234-5678
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary-bright" />
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-semibold text-foreground mb-1">
                      Correo Electrónico
                    </h4>
                    <a
                      href="mailto:info@dentalclinic.com"
                      className="font-body text-sm text-muted-foreground hover:text-primary-bright transition-colors"
                    >
                      info@dentalclinic.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary-bright" />
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-semibold text-foreground mb-1">
                      Dirección
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Av. Principal 1234, Centro Médico, Ciudad
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-primary-bright" />
                  </div>
                  <div>
                    <h4 className="font-body text-sm font-semibold text-foreground mb-1">
                      Horario
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Lunes a Viernes: 8:00 AM - 6:00 PM
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      Sábados: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 rounded-xl overflow-hidden shadow-card h-64 bg-secondary flex items-center justify-center">
                <div className="text-center">
                  <MapPin
                    size={32}
                    className="text-muted-foreground mx-auto mb-2"
                  />
                  <p className="font-body text-sm text-muted-foreground">
                    Mapa de ubicación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contacto;
