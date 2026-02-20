import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo placeholder */}
          <a href="#inicio" className="flex items-center gap-3">
            <span className="text-2xl font-display font-bold text-primary">
              DentalClinic
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-body text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold hover:bg-primary-bright transition-colors duration-300"
          >
            Agendar Cita
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
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
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-body text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-semibold"
                >
                  Agendar Cita
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
