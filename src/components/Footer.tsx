
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left text-muted-foreground">
              &copy; {currentYear} Levis. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToTop}
              className="bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground p-2 rounded-full transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
