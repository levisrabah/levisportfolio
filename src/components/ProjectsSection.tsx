import { Briefcase, Github, ExternalLink, Download } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Drowsiness Detection System",
      description:
        "Multilingual drowsiness detection using Vambo AI API for inclusivity.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Python", "OpenCV", "Flask", "Vambo AI API"],
      links: {
        github: "https://github.com/levisrabah/Drowsiness-Detector",
        demo: "https://drive.google.com/file/d/1bmfcJ_e-RaZVQcz5AxQobzq8nG9d_D6J/view?usp=sharing",
      },
    },
    {
      title: "Vijana Sport Management System",
      description:
        "A platform for managing youth sports programs, handling enrollments, schedules, and communication.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      tags: ["Python", "Flask", "React", "HTML/CSS"],
      links: {
        github: "https://github.com/levisrabah/Final-Project-PH4",
        
      },
    },
    {
      title: "Agriculture Management System",
      description:
        "Connects farmers with buyers, tracks logistics, and uses blockchain for transparency and insights.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Python", "Flask", "PostgreSQL", "Web3.js", "Solidity", "HTML/CSS"],
      links: {
        github: "https://github.com/SARAH-MIGADA-a/agritech-supply-chain",
        demo: "https://drive.google.com/file/d/19mBZftZNOvow65RRXZJ-01pU7VRB_doo/view?usp=sharing",
      },
    },
  ];

  const handleCVDownload = () => {
    // Path to CV in public folder
    const cvPath = "/Levis%20Otieno%20Rabah%20CV.pdf";
    
    // Create an anchor element and trigger the download
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = "Levis Otieno Rabah CV.pdf";
    document.body.appendChild(link);
    
    // Try to download and handle potential errors
    try {
      link.click();
      toast.success("CV download started", {
        description: "Thank you for your interest in my work!",
      });
    } catch (error) {
      toast.error("Download failed", {
        description: "Please try again later or contact me directly.",
      });
    }
    
    // Clean up
    document.body.removeChild(link);
  };

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center justify-center mb-12">
          <div className="bg-primary/10 p-3 rounded-full">
            <Briefcase className="text-primary w-6 h-6" />
          </div>
          <h2 className="section-title ml-3">Featured Projects</h2>
        </div>

        {/* Download CV button - placed at the top of projects section */}
        <div className="flex justify-center gap-3 mb-12">
          <Button 
            onClick={handleCVDownload} 
            className="group animate-fade-in"
            variant="outline"
          >
            <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
            Download My CV
          </Button>
          <a
            href="/Levis%20Otieno%20Rabah%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group animate-fade-in px-4 py-2 border border-input rounded-md hover:bg-secondary transition-colors text-sm font-medium"
          >
            Preview CV
          </a>
        </div>
        
        {/* Interactive Carousel for Projects */}
        <Carousel className="w-full max-w-5xl mx-auto mb-16">
          <CarouselContent>
            {projects.map((project) => (
              <CarouselItem key={project.title}>
                <div className="glass-card p-6">
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="lg:w-1/2">
                      <div className="relative group overflow-hidden rounded-lg shadow-lg">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-56 md:h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="flex gap-4">
                            <a
                              href={project.links.github}
                              className="p-2 bg-background rounded-full hover:bg-background/80 transition-colors"
                              aria-label="View GitHub Repository"
                            >
                              <Github className="h-6 w-6" />
                            </a>
                            <a
                              href={project.links.demo}
                              className="p-2 bg-background rounded-full hover:bg-background/80 transition-colors"
                              aria-label="View Live Demo"
                            >
                              <ExternalLink className="h-6 w-6" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2">
                      <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                      <p className="text-muted-foreground mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a 
                          href={project.links.github} 
                          className="flex items-center text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github className="h-5 w-5 mr-2" />
                          View Code
                        </a>
                        <a 
                          href={project.links.demo} 
                          className="flex items-center text-primary hover:text-primary/80 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5 mr-2" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 lg:-left-16" />
          <CarouselNext className="absolute -right-12 lg:-right-16" />
        </Carousel>
        
        {/* Keep the original project display for mobile and as a fallback */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center animate-fade-in`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="lg:w-1/2">
                <div className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 md:h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.links.github}
                        className="p-2 bg-background rounded-full hover:bg-background/80 transition-colors"
                        aria-label="View GitHub Repository"
                      >
                        <Github className="h-6 w-6" />
                      </a>
                      <a
                        href={project.links.demo}
                        className="p-2 bg-background rounded-full hover:bg-background/80 transition-colors"
                        aria-label="View Live Demo"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.links.github} 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </a>
                  <a 
                    href={project.links.demo} 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
