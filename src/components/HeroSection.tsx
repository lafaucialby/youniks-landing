import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import videoBackground from "@/assets/abbraccio.mp4";
import logo from "@/assets/logo_bl_original.svg";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

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
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 hero-gradient opacity-80 z-10" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoBackground} type="video/mp4" />
        </video>
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <img
                src={logo}
                alt="Youniks Logo"
                className="h-12 md:h-16 lg:h-20 mb-4"
              />
              <div className="h-1 w-24 accent-gradient rounded-full" />
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Non serve un nuovo modo per connettersi, ma ricordarsi come si fa
            </h2>

            <p className="text-xl md:text-2xl text-zinc-200 leading-relaxed">
              Youniks è l'app phygital delle relazioni umane. Dove Psicologia e IA ti aiutano a scoprire persone che riconoscono la tua unicità per
              <span className="text-white font-bold"> costruire legami reali</span>
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
                ISCRIVITI GRATIS
              </Button>
            </form>

            <p className="text-sm text-zinc-300">
              Unisciti alla lista d'attesa e ricevi contenuti esclusivi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;