
import { Book, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Tech Lead Volunteer",
      company: "Start Walking Foundation (Remote)",
      period: "Jun 2025 - Present",
      description:
        "Lead development of digital tools for education and outreach; mentor volunteers; manage website and systems; ensure ethical and privacy standards.",
      type: "work",
    },
    {
      title: "Developer Relations Advocate Intern",
      company: "Vambo AI (Remote)",
      period: "Mar 2025 – Sep 2025",
      description:
        "Grew developer community, created tutorials and sample projects, gathered feedback for product improvements, represented the brand at events, and reported key metrics.",
      type: "work",
    },
    {
      title: "Web Developer",
      company: "Glorious-Dawn Montessori School",
      period: "Sep 2024 – Nov 2024",
      description:
        "Enhanced UI/UX, improved backend performance, integrated new features, and strengthened security and maintenance.",
      type: "work",
    },
    {
      title: "Software Engineering",
      company: "Moringa School",
      period: "Completed 08/2024",
      description:
        "Projects with Python, JavaScript, React, Node, Flask; state management with Redux/Context; databases SQL/Postgres/MySQL; Git and AI tools.",
      type: "education",
    },
    {
      title: "Telecommunication & IT (Ongoing)",
      company: "Kenyatta University",
      period: "Expected 2026",
      description:
        "BSc. Telecommunication and Information Technology: networking, programming, data, telecom, cybersecurity, systems design & integration.",
      type: "education",
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <div className="flex items-center justify-center mb-12">
          <div className="bg-primary/10 p-3 rounded-full">
            <Award className="text-primary w-6 h-6" />
          </div>
          <h2 className="section-title ml-3">Experience & Education</h2>
        </div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={`${exp.company}-${index}`} 
                className="relative flex flex-col md:flex-row animate-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-last'}`}>
                  <div className="glass-card p-6">
                    <div className={`inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold ${
                      exp.type === 'work' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                    }`}>
                      {exp.type === 'work' ? 'Work Experience' : 'Education'}
                    </div>
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">{exp.company}</h4>
                    <div className="text-sm text-muted-foreground mb-4">{exp.period}</div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 h-6 w-6 rounded-full bg-primary border-4 border-background my-3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
