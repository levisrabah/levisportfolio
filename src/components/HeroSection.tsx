
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-grid-pattern"
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <Avatar className="h-40 w-40 border-4 border-primary shadow-lg mb-6">
            <AvatarImage 
              src="/lovable-uploads/1c6cf77e-bb11-48b1-9935-22ce3897350e.png" 
              alt="Levis profile photo" 
              className="object-cover"
            />
            <AvatarFallback className="text-4xl">LV</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 animate-fade-in">
            Hello, I'm Levis
          </h1>
        </div>
        <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in max-w-2xl mx-auto">
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
