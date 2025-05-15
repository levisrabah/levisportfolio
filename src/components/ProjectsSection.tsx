
import { Briefcase, Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Drowsiness Detection System",
      description:
        "An AI-powered system that detects driver drowsiness in real-time using computer vision and machine learning algorithms, helping prevent road accidents.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      tags: ["Python", "TensorFlow", "OpenCV", "Flask"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Church Ticketing App",
      description:
        "A mobile-friendly web application that allows churches to sell and manage event tickets, track attendance, and handle registrations for various church programs.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      links: {
        github: "#",
        demo: "#",
      },
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website showcasing my skills, projects, and professional experience with a modern design and dark/light theme toggle.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      links: {
        github: "#",
        demo: "#",
      },
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center justify-center mb-12">
          <div className="bg-primary/10 p-3 rounded-full">
            <Briefcase className="text-primary w-6 h-6" />
          </div>
          <h2 className="section-title ml-3">Featured Projects</h2>
        </div>
        
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
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
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
