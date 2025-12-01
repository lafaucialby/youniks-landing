import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Accesso anticipato esclusivo al lancio",
  "Contenuti premium per migliorare le tue relazioni",
  "Priorità nella lista d'attesa",
];

const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email) {
      toast({
        title: "Benvenuto in Youniks!",
        description: "Ti contatteremo presto per l'accesso anticipato.",
      });
      setName("");
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 hero-gradient rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 accent-gradient rounded-full blur-3xl opacity-10" />
      
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Pronto a Costruire Legami Veri?
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Unisciti a migliaia di persone che stanno già trasformando 
            il modo di connettersi con gli altri
          </p>

          {/* Benefits list */}
          <div className="space-y-4 py-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* Signup form */}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto pt-4">
            <Input
              type="text"
              placeholder="Il tuo nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-14 text-lg border-2 focus:border-primary"
              required
            />
            <Input
              type="email"
              placeholder="La tua email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 text-lg border-2 focus:border-primary"
              required
            />
            <Button 
              type="submit" 
              size="lg" 
              className="w-full h-14 text-lg accent-gradient hover:opacity-90 transition-smooth font-semibold glow-shadow"
            >
              Registrati Ora e Inizia a Costruire Legami Veri
            </Button>
          </form>

          <p className="text-sm text-muted-foreground pt-4">
            Nessun costo nascosto. Nessun impegno. Solo connessioni autentiche.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;