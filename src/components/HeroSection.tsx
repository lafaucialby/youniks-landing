import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-connection.jpg";

const HeroSection = () => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-5" />
      
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-4">
                Youniks
              </h1>
              <div className="h-1 w-24 accent-gradient rounded-full" />
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Stanco/a dei match superficiali?
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Dove l'AI incontra la Psicologia per farti trovare{" "}
              <span className="text-primary font-semibold">legami che contano</span>
            </p>

            {/* Email signup form */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
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
                ISCRIVITI GRATIS - Accesso Anticipato
              </Button>
            </form>

            <p className="text-sm text-muted-foreground">
              Unisciti alla lista d'attesa e ricevi contenuti esclusivi
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative soft-shadow rounded-3xl overflow-hidden">
              <img
                src={heroImage}
                alt="Connessioni autentiche tra persone attraverso AI e psicologia"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -z-10 top-10 right-10 w-72 h-72 hero-gradient rounded-full blur-3xl opacity-20" />
            <div className="absolute -z-10 bottom-10 left-10 w-60 h-60 accent-gradient rounded-full blur-3xl opacity-15" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;