import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16" style={{ background: "hsl(210, 10%, 15%)" }}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Inicio", href: "/" },
                { label: "Nosotros", href: "/nosotros" },
                { label: "Servicios", href: "/servicios" },
                { label: "Promociones", href: "/promociones" },
                { label: "Blog", href: "/blog" },
                { label: "Contacto", href: "/contacto" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="font-body text-sm text-primary-foreground/60 hover:text-primary-bright transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-bright shrink-0" />
                <span className="font-body text-sm text-primary-foreground/70">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-bright shrink-0" />
                <span className="font-body text-sm text-primary-foreground/70">
                  info@dentalclinic.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="text-primary-bright shrink-0 mt-0.5"
                />
                <span className="font-body text-sm text-primary-foreground/70">
                  Av. Principal 1234, Centro Médico, Ciudad
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">
              Síguenos
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-foreground/10 text-primary-foreground hover:bg-primary-bright transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary-foreground/10 text-primary-foreground hover:bg-primary-bright transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="font-body text-xs text-primary-foreground/40 text-center">
            © {new Date().getFullYear()} Clínica Dental. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
