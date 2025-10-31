
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("#about");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section for link highlighting
  useEffect(() => {
    const sectionIds = ["hero", "about", "resume", "skills", "projects", "labs", "experience", "contact"];
    const handle = () => {
      let current: string | null = null;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = `#${id}`;
          break;
        }
      }
      if (current) setActiveId(current);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const navLinks = [
    { href: "#about", title: "About" },
    { href: "#resume", title: "Resume" },
    { href: "#skills", title: "Skills" },
    { href: "#projects", title: "Projects" },
    { href: "#labs", title: "Labs" },
    { href: "#experience", title: "Experience" },
    { href: "#contact", title: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-3 md:py-4"
          : "bg-background/40 backdrop-blur-sm py-4 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center">
          <div className="flex-1 shrink-0" aria-hidden="true" />

          <div className="hidden md:flex items-center space-x-7 justify-end flex-1">
            <nav className="flex items-center space-x-3 whitespace-nowrap">
              {navLinks.map((link) => {
                const isActive = activeId === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2.5 rounded-md text-base md:text-lg font-medium transition-colors ${
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {link.title}
                    <span
                      className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full transition-opacity ${
                        isActive ? "bg-primary opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>
            <ThemeToggle />
            <Button asChild size="default" className="ml-2 text-base md:text-lg px-5 py-2.5">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          <div className="flex md:hidden items-center space-x-4 ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary transition-colors text-xl"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-background/95 backdrop-blur-md border-t mt-2 py-5 px-4 sm:px-6 animate-fade-in" role="navigation" aria-label="Mobile Navigation">
          <div className="flex items-center justify-between pb-3">
            <span className="text-lg font-semibold">Menu</span>
            <ThemeToggle />
          </div>
          <ul className="space-y-1">
            {navLinks.map((link) => {
              const isActive = activeId === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block px-4 py-3 rounded-md transition-colors font-medium text-lg ${
                      isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="pt-3">
            <Button asChild className="w-full text-lg py-6">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Hire Me</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
