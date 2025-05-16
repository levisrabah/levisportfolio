
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    "Backend Developer",
    "Frontend Developer",
    "Database Designer",
    "Portfolio Website Developer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-grid-pattern"
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <Avatar className="h-56 w-56 border-4 border-primary shadow-lg mb-6">
            <AvatarImage 
              src="/lovable-uploads/27a27901-ca2c-493a-9ccc-b72c2441aabc.png" 
              alt="Levis profile photo" 
              className="object-cover"
            />
            <AvatarFallback className="text-5xl">LV</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 animate-fade-in">
            Hello, I'm Levis
          </h1>
        </div>
        <div className="h-10 mb-8">
          <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl animate-fade-in overflow-hidden">
            I'm a <span className="text-primary font-semibold">{roles[roleIndex]}</span>
          </p>
        </div>
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
