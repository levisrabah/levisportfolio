
import { Code } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend Technologies",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "Flask", level: 85, icon: "🌶️" },
        { name: "Django", level: 80, icon: "🏆" },
        { name: "RESTful APIs", level: 85, icon: "📡" },
      ],
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "JavaScript", level: 80, icon: "📜" },
        { name: "React", level: 75, icon: "⚛️" },
        { name: "HTML", level: 85, icon: "🌐" },
        { name: "CSS", level: 80, icon: "🎨" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "SQL", level: 85, icon: "📊" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "Git", level: 90, icon: "🔄" },
        { name: "Docker", level: 70, icon: "🐳" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <div className="flex items-center justify-center mb-12">
          <div className="bg-primary/10 p-3 rounded-full">
            <Code className="text-primary w-6 h-6" />
          </div>
          <h2 className="section-title ml-3">Skills & Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              className="glass-card p-6 animate-fade-in" 
              style={{ animationDelay: `${idx * 0.1 + 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-primary rounded-full h-2"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
