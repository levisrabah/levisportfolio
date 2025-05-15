
import { ArrowDown } from "lucide-react";
import HeroBackground from "@/components/3d/HeroBackground";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16">
      <HeroBackground />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm Levis — <br />
              <span className="text-primary">I build meaningful digital solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
              A passionate Full-Stack Developer focused on creating intuitive and impactful web applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
              <img 
                src="/lovable-uploads/3f9d45c0-92e8-4468-ab35-7ccd14a5bbad.png" 
                alt="Levis Portrait" 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-primary/30"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground hover:text-primary transition-colors"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
