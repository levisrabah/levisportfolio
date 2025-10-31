import { FlaskConical, Wrench } from "lucide-react";

type Challenge = {
  title: string;
  problem: string;
  approach: string;
  tools: string[];
  image?: string;
  lessons: string[];
  link?: string;
};

const LabChallengesSection = () => {
  const challenges: Challenge[] = [
    {
      title: "Rate Limiter Middleware",
      problem: "Protect an API from abuse with sliding-window rate limiting.",
      approach:
        "Implemented a token-bucket algorithm with Redis for atomic increments and TTLs; added exponential backoff headers.",
      tools: ["TypeScript", "Express", "Redis", "Jest"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      lessons: [
        "Atomic operations matter under concurrency",
        "Expose retry-after to improve client behavior",
      ],
      link: "#",
    },
    {
      title: "Image Optimization Pipeline",
      problem: "Reduce LCP by optimizing hero images across devices.",
      approach:
        "Built a sharp-based pipeline generating AVIF/WebP variants, added responsive <picture> with lazy loading and blur-up placeholders.",
      tools: ["Node.js", "sharp", "Vite", "Cloudflare R2"],
      image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc",
      lessons: [
        "AVIF often halves payload vs JPEG",
        "Blur-up improves perceived performance",
      ],
      link: "#",
    },
    {
      title: "SQL Query Tuning",
      problem: "A dashboard query timing out on larger datasets.",
      approach:
        "Added proper composite indexes, replaced nested selects with window functions, and batched joins.",
      tools: ["PostgreSQL", "EXPLAIN ANALYZE", "Prisma"],
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
      lessons: [
        "Use EXPLAIN to identify sequential scans",
        "Indexes need to match filter order",
      ],
      link: "#",
    },
  ];

  return (
    <section id="labs" className="py-20 bg-secondary/30">
      <div className="section-container">
        <div className="flex items-center justify-center mb-12">
          <div className="bg-primary/10 p-3 rounded-full">
            <FlaskConical className="text-primary w-6 h-6" />
          </div>
          <h2 className="section-title ml-3">Lab Challenges</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((c) => (
            <article key={c.title} className="glass-card overflow-hidden animate-fade-in">
              {c.image && (
                <img src={c.image} alt={c.title} className="w-full h-40 md:h-48 object-cover" />
              )}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{c.title}</h3>

                <div>
                  <h4 className="section-subtitle mb-2">Problem</h4>
                  <p className="text-muted-foreground text-sm">{c.problem}</p>
                </div>

                <div>
                  <h4 className="section-subtitle mb-2">Approach</h4>
                  <p className="text-muted-foreground text-sm">{c.approach}</p>
                </div>

                <div>
                  <h4 className="section-subtitle mb-2">Tools Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {c.tools.map((t) => (
                      <span key={t} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">{t}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="section-subtitle mb-2">Lessons Learned</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {c.lessons.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a href={c.link} className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <Wrench className="w-4 h-4" />
                    View Repo / Notes
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabChallengesSection;


