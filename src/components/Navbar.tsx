import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Antes y Después", href: "/antes-y-despues" },
  { label: "Promociones", href: "/promociones" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-border/50"
      style={{
        background:
          "linear-gradient(135deg, hsla(210, 10%, 15%, 0.92), hsla(210, 10%, 20%, 0.88))",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Nav — centered */}
          <ul className="hidden md:flex items-center gap-8 mx-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`font-body text-sm font-medium transition-colors duration-300 ${
                    location.pathname === item.href
                      ? "text-primary-bright"
                      : "text-primary-foreground/70 hover:text-primary-bright"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA — right */}
          <Link
            to="/contacto"
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold hover:bg-primary-bright transition-colors duration-300 shrink-0"
          >
            Agendar Cita
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 animate-fade-in">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block font-body text-base transition-colors ${
                      location.pathname === item.href
                        ? "text-primary-bright"
                        : "text-primary-foreground/70 hover:text-primary-bright"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contacto"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold"
                >
                  Agendar Cita
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
