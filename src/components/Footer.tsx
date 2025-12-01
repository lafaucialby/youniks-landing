const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Youniks</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Dove l'AI incontra la Psicologia per creare connessioni autentiche
          </p>
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Youniks. Tutti i diritti riservati.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;