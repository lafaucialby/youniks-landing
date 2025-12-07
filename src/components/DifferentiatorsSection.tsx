import { Shield, HeartPulse, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Sicurezza e Privacy",
    description: "I tuoi dati sono protetti riservati e non condivisi. Creiamo un ambiente sicuro dove puoi essere te stesso senza preoccupazioni.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: HeartPulse,
    title: "Benessere Emotivo al Primo Posto",
    description: "Ogni funzionalità è progettata per supportare il tuo benessere psicologico e aiutarti nel coltivare i tuoi rapporti.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Sparkles,
    title: "AI con un Cuore Scientifico",
    description: "Il nostro assistente AI si basa su principi psicologici validati scientificamente per guidarti verso connessioni autentiche.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const DifferentiatorsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Perché Scegliere Youniks
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I tre pilastri che ci rendono unici nel panorama delle connessioni digitali
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="bg-card rounded-2xl p-8 h-full soft-shadow hover:glow-shadow transition-smooth border border-border/50">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-2xl ${pillar.bgColor} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                      <Icon className={`w-10 h-10 ${pillar.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;