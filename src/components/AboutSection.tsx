
import { User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center justify-center mb-12">
          <div className="bg-primary/10 p-3 rounded-full">
            <User className="text-primary w-6 h-6" />
          </div>
          <h2 className="section-title ml-3">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h3 className="section-subtitle">Get to know me</h3>
            <p className="mb-4 text-muted-foreground">
              I'm a passionate Full-Stack Developer with a strong focus on backend 
              development. I enjoy turning complex problems into simple, elegant solutions.
            </p>
            <p className="mb-4 text-muted-foreground">
              As a tech enthusiast, I have a natural curiosity for learning new technologies 
              and frameworks. I thrive in collaborative environments where I can contribute 
              my skills while continuing to grow as a developer.
            </p>
            <p className="mb-4 text-muted-foreground">
              My journey in software development began at Moringa School, where I built a solid 
              foundation in programming principles. Now at Vambo AI, I'm applying my skills to 
              create innovative solutions that make a real difference.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg mb-2">1+</h4>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg mb-2">10+</h4>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg mb-2">Backend</h4>
              <p className="text-muted-foreground">Specialization</p>
            </div>
            <div className="glass-card p-6 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-lg mb-2">24/7</h4>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
