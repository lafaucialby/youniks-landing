import { UserCircle, Users, ArrowRight, Heart } from "lucide-react";

const steps = [
  {
    icon: UserCircle,
    title: "Crea il tuo profilo Younik",
    description: "Il tuo avatar sicuro e protetto, costruito con l'aiuto dell'intelligenza artificiale per riflettere la tua vera essenza.",
  },
  {
    icon: Users,
    title: "Trova chi ti somiglia",
    description: "Selezione basata su valori profondi, affinità psicologiche e caratteristiche che contano davvero.",
  },
  {
    icon: ArrowRight,
    title: "Porta la relazione offline",
    description: "Supporto guidato per fare il passaggio più importante: dalla connessione digitale alla vita reale.",
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
            Il Metodo Younik in 4 Fasi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un percorso pensato per trasformare le connessioni digitali in relazioni autentiche
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
                  <div className="absolute -top-4 -left-4 w-12 h-12 hero-gradient rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
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