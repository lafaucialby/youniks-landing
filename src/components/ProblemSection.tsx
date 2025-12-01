const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            La tecnologia ci sta separando?
          </h2>
          
          <div className="h-1 w-32 accent-gradient rounded-full mx-auto" />
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            <span className="text-primary font-semibold">No.</span> Youniks è nato per creare{" "}
            <span className="text-primary font-semibold">connessioni vere</span>, 
            oltre gli swipe infiniti e le chat dimenticate.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Combiniamo l'intelligenza artificiale più avanzata con i principi della psicologia 
            per aiutarti a costruire relazioni autentiche, profonde e durature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;