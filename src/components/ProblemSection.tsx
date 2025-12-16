const ProblemSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Non ne puoi più delle app di dating e richieste di follow?
          </h2>
          
          <div className="h-1 w-32 accent-gradient rounded-full mx-auto" />
          
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            <span className="text-primary font-semibold">Non sei l'unicɘ.</span> Youniks nasce per riportare il {" "}
            <span className="text-primary font-semibold">benessere nelle relazioni</span>: 
            autenticità contro apparenze, valori profondi contro like vuoti.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Come? Psicologia e Intelligenza Artificiale lavorano insieme: un algoritmo etico che conosce la scienza dell'amicizia.
            Un ecosistema che facilita la creazione di relazioni che iniziano online, ma si nutrono nel mondo reale;
            uno spazio personale dove ogni utente trova la sua rete sociale di riferimento.
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
