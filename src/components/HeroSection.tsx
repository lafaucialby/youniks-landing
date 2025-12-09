import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import videoBackground from "@/assets/abbraccio.mp4";
import logo from "@/assets/logo_bl_original.svg";

import { supabase } from "@/lib/supabase";
import { Loader2, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import provincesData from "@/data/province.json";

import { Checkbox } from "@/components/ui/checkbox";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      toast({
        title: "Accetta la privacy",
        description: "Devi accettare l'informativa sulla privacy per iscriverti.",
        variant: "destructive",
      });
      return;
    }

    if (name && email && province) {
      setLoading(true);
      try {
        const { error } = await supabase
          .from('early_users')
          .insert([
            { name, email, city: province }
          ]);

        if (error) {
          if (error.code === '23505') {
            toast({
              title: "Email già registrata",
              description: "Questa email è già presente nella nostra lista d'attesa.",
              variant: "destructive",
            });
          } else {
            throw error;
          }
        } else {
          toast({
            title: "Benvenuto in Youniks!",
            description: "Ti contatteremo presto per l'accesso anticipato.",
          });
          setName("");
          setEmail("");
          setProvince("");
          setPrivacyAccepted(false);
        }
      } catch (error) {
        console.error("Error saving to supabase:", error);
        toast({
          title: "Errore",
          description: "Si è verificato un errore durante l'iscrizione. Riprova.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
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
                className="h-16 md:h-16 lg:h-20 mb-4"
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
                disabled={loading}
              />
              <Input
                type="email"
                placeholder="La tua email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-lg border-2 focus:border-primary"
                required
                disabled={loading}
              />

              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    disabled={loading}
                    className="w-full h-14 justify-between text-lg md:text-sm border-2 bg-white hover:bg-white text-zinc-500 hover:text-zinc-600 focus:border-primary hover:border-zinc-400 font-normal"
                  >
                    {province
                      ? provincesData.find((p) => p.denominazione_provincia === province)?.denominazione_provincia
                      : "Seleziona la tua provincia..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 max-h-[300px]">
                  <Command>
                    <CommandInput placeholder="Cerca provincia..." />
                    <CommandList>
                      <CommandEmpty>Nessuna provincia trovata.</CommandEmpty>
                      <CommandGroup>
                        {provincesData.map((p) => (
                          <CommandItem
                            key={p.sigla_provincia}
                            value={p.denominazione_provincia}
                            onSelect={() => {
                              setProvince(p.denominazione_provincia);
                              setOpen(false);
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                province === p.denominazione_provincia ? "opacity-100" : "opacity-0"
                              )}
                            />
                            {p.denominazione_provincia}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full h-14 text-lg accent-gradient hover:opacity-90 transition-smooth font-semibold glow-shadow disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ISCRIZIONE IN CORSO...
                  </>
                ) : (
                  "ISCRIVITI GRATIS"
                )}
              </Button>

              <div className="flex items-center space-x-2 pt-1">
                <Checkbox
                  id="privacy"
                  checked={privacyAccepted}
                  onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                  className="border-white data-[state=checked]:bg-white data-[state=checked]:text-primary"
                />
                <label
                  htmlFor="privacy"
                  className="text-sm font-light peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-200"
                >
                  Dichiaro di aver letto e compreso l'<a href="https://www.iubenda.com/privacy-policy/61142671" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white">informativa privacy</a>
                </label>
              </div>
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