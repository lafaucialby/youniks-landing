import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Finalmente un'app che prende sul serio il benessere emotivo. Non è solo swipe, è un percorso di crescita personale.",
    author: "Maria, 32 anni",
    role: "Beta Tester",
  },
  {
    quote: "L'approccio psicologico fa la differenza. Mi sono sentito compreso e supportato dal primo momento.",
    author: "Alessandro, 28 anni",
    role: "Early Access User",
  },
  {
    quote: "La sicurezza e la privacy sono gestite in modo impeccabile. Finalmente posso essere me stesso senza paure.",
    author: "Sofia, 35 anni",
    role: "Community Member",
  },
];

const team = [
  {
    role: "Co-Founder & Chief Psychologist",
    description: "Psicoterapeuta con 15+ anni di esperienza nelle relazioni umane",
  },
  {
    role: "Co-Founder & CTO",
    description: "Ex-Google, esperto in AI e machine learning applicato al benessere",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        {/* Testimonials */}
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Cosa Dicono di Noi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Le voci di chi ha già provato l'esperienza Youniks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card rounded-2xl p-8 h-full soft-shadow border border-border/50">
                <Quote className="w-12 h-12 text-primary/30 mb-4" />
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team credibility */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 animate-fade-in">
            Un Team di Esperti al Tuo Fianco
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20 animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <h4 className="text-xl font-bold text-primary mb-3">
                  {member.role}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;