import { UserCircle, Users, ArrowRight, Heart } from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    title: "Crea il tuo profilo",
    description: "Permettici di conoscerti in modo da fornirti supporto nel migliore dei modi. Solo qualcosa su di te, su come ti senti e su come sei!",
  },
  {
    icon: Users,
    title: "Allarga la tua rete",
    description: "Selezione basata su valori profondi, affinità psicologiche e caratteristiche che contano davvero. Gruppi e community ti aspettano.",
  },
  {
    icon: ArrowRight,
    title: "Porta la relazione offline",
    description: "Supporto guidato e costante per fare il passaggio più importante: dalla connessione digitale alla vita reale.",
  },
  {
    icon: Heart,
    title: "Coltiva il legame",
    description: "Spunti personalizzati e supporto continuo dell'AI per nutrire e far crescere la tua relazione nel tempo.",
  },
];

const MethodSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Il Metodo
            <span className="text-primary font-semibold"> Youniks </span>
            in 4 Fasi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un percorso pensato per creare nuovi legami e trasformare le connessioni digitali in relazioni autentiche
          </p>
        </div>

        <div className="grid px-4 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card rounded-2xl p-8 h-full soft-shadow hover:glow-shadow transition-smooth border border-border/50">
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 ocean-gradient rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
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

export default MethodSection;