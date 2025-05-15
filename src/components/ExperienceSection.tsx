
import { Book, Award } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Vambo AI",
      period: "2023 - Present",
      description:
        "Working on AI-powered language learning solutions. Developing backend infrastructure and APIs, collaborating with data scientists to implement machine learning models.",
      type: "work",
    },
    {
      title: "Full Stack Developer",
      company: "Freelance Projects",
      period: "2022 - Present",
      description:
        "Developing custom web applications for various clients. Building responsive frontends with React and robust backends with Python/Flask.",
      type: "work",
    },
    {
      title: "Software Engineering",
      company: "Moringa School",
      period: "2021 - 2022",
      description:
        "Completed an intensive program focused on full stack development. Built several projects using Python, JavaScript, React, and SQL databases.",
      type: "education",
    },
    {
      title: "IT Volunteer",
      company: "Local Community Center",
      period: "2020 - 2021",
      description:
        "Provided technical support and taught basic computer skills to community members. Helped set up and maintain the center's network infrastructure.",
      type: "work",
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
