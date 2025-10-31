
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const roles = [
    "Full Stack Software Developer",
    "Developer Relations Advocate",
    "Backend Developer",
    "Frontend Developer"
  ];

  useEffect(() => {
    const animationInterval = setInterval(() => {
      // Start fade out animation
      setIsAnimating(true);
      
      // Change role after fade out
      setTimeout(() => {
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        // Start fade in animation
        setIsAnimating(false);
      }, 500); // Half of animation duration
      
    }, 3000); // Show each role for 3 seconds
    
    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-grid-pattern"
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <Avatar className="h-40 w-40 md:h-56 md:w-56 border-4 border-primary shadow-lg mb-6">
            <AvatarImage 
              src="/lovable-uploads/27a27901-ca2c-493a-9ccc-b72c2441aabc.png" 
              alt="Levis profile photo" 
              className="object-cover"
            />
            <AvatarFallback className="text-5xl">LV</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 animate-fade-in">
            Hello, I'm Levis Otieno Rabah
          </h1>
        </div>
        <div className="h-16 mb-8 flex justify-center items-center">
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl">
            I'm a <span 
              className={`text-primary font-semibold inline-block min-w-40 transition-opacity duration-1000 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              {roles[roleIndex]}
            </span>
          </p>
        </div>
        <div className="space-x-4 animate-fade-in">
          <Button size="lg" className="group" onClick={() => scrollToSection('projects')}>
            Projects
          </Button>
          <Button variant="outline" size="lg" className="group" onClick={() => scrollToSection('contact')}>
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
