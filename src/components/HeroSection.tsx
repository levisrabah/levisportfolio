import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-grid-pattern"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 animate-fade-in">
          Hello, I'm Levis
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in">
          I'm a Full Stack Developer specializing in meaningful digital
          solutions.
        </p>
        <div className="space-x-4 animate-fade-in">
          <Button size="lg" className="group">
            Projects
          </Button>
          <Button variant="outline" size="lg" className="group">
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

