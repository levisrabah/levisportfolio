import { FileText, GraduationCap, Award, BadgeCheck, Users } from "lucide-react";

const ResumeSection = () => {
  const education = [
    {
      school: "Kenyatta University (Ongoing – Part-Time)",
      program: "BSc. Telecommunication and Information Technology",
      period: "Expected 2027",
      details:
        "Networking & Communication Systems, Programming, Data Management, Telecommunication Technologies, Cybersecurity, System Design & Integration.",
    },
    {
      school: "Moringa School",
      program: "Software Engineering",
      period: "Completed 08/2024",
      details:
        "Python, JavaScript, React.js, Node.js, Flask, HTML, CSS, Redux, Context API, SQL, Postgres, MySQL, Git, AI tools for rapid development.",
    },
  ];

  const experience = [
    { role: "Tech Lead Volunteer", company: "Start Walking Foundation (Remote)", period: "Jun 2025 - Present" },
    { role: "Developer Relations Advocate Intern", company: "Vambo AI (Remote)", period: "Mar 2025 – Sep 2025" },
    { role: "Web Developer", company: "Glorious-Dawn Montessori School", period: "Sep 2024 – Nov 2024" },
  ];

  const certifications = [
    { name: "ICP Hub Kenya – Blockchain/Web3 Innovation (Participation)", issuer: "ICP Hub Kenya", year: "2025" },
    { name: "Scrum Master (Agile-driven group projects)", issuer: "Moringa School", year: "2024" },
  ];

  const skills = [
    "Python", "Flask", "JavaScript", "React.js", "Node.js", "Angular", "Express.js", "HTML", "CSS",
    "Redux", "Context API",
    "SQL", "MySQL", "Postgres",
    "REST", "JSON", "XML",
    "Git", "GitHub", "CI/CD", "Docker", "AI tools",
    "Postman", "Computational Linguistics"
  ];

  const softSkills = [
    "Technical Communication", "Public Speaking", "Community Engagement", "Metrics Analysis",
    "Teamwork", "Self Motivation", "Problem Solving", "Project Management", "Leadership",
    "Time Management", "Analytic Skills", "Networking"
  ];

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Levis%20Otieno%20Rabah%20CV.pdf";
    link.download = "Levis Otieno Rabah CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20">
      <div className="section-container text-base md:text-lg leading-relaxed">
        <div className="flex items-center justify-center mb-12">
          <div className="bg-primary/10 p-3 rounded-full">
            <FileText className="text-primary w-6 h-6" />
          </div>
          <h2 className="section-title ml-3">Resume</h2>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={downloadResume}
            className="bg-primary text-primary-foreground px-5 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
          >
            Download PDF
          </button>
          <a
            href="/Levis%20Otieno%20Rabah%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-md font-medium border border-input hover:bg-secondary transition-colors"
          >
            Preview CV
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="text-primary w-5 h-5" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((ed) => (
                  <div key={ed.school}>
                    <div className="font-semibold">{ed.school}</div>
                    <div className="text-sm text-primary">{ed.program}</div>
                    <div className="text-xs text-muted-foreground mb-2">{ed.period}</div>
                    <p className="text-muted-foreground">{ed.details}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <BadgeCheck className="text-primary w-5 h-5" />
                <h3 className="text-xl font-semibold">Certifications & Participation</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-start gap-3">
                    <Award className="w-4 h-4 mt-0.5 text-primary" />
                    <div>
                      <div className="font-medium">{c.name}</div>
                      <div className="text-xs text-muted-foreground">{c.issuer} • {c.year}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-primary w-5 h-5" />
                <h3 className="text-xl font-semibold">Work Experience</h3>
              </div>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.company} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{exp.role}</div>
                      <div className="text-sm text-primary">{exp.company}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{exp.period}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm">
                For detailed timeline see <a href="#experience" className="text-primary hover:underline">Experience</a> below.
              </div>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="text-primary w-5 h-5" />
                <h3 className="text-xl font-semibold">Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{s}</span>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((s) => (
                    <span key={s} className="bg-secondary text-foreground px-3 py-1 rounded-full text-sm font-medium">{s}</span>
                  ))}
                </div>
              </div>
              <div className="mt-4 text-sm">
                Explore interactive breakdown in <a href="#skills" className="text-primary hover:underline">Skills</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;


