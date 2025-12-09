import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        // Check if consent is stored in localStorage
        const consent = localStorage.getItem("youniks-cookie-consent");
        if (!consent) {
            // Small delay for better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("youniks-cookie-consent", "true");
        closeBanner();
    };

    const closeBanner = () => {
        setIsClosing(true);
        setTimeout(() => setIsVisible(false), 300); // Wait for animation
    };

    if (!isVisible) return null;

    return (
        <div
            className={cn(
                "fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-center pointer-events-none",
                isClosing ? "animate-out fade-out slide-out-to-bottom duration-300" : "animate-in fade-in slide-in-from-bottom duration-500"
            )}
        >
            <div className="bg-background/80 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl p-4 md:p-5 max-w-lg w-full pointer-events-auto flex flex-col sm:flex-row items-center gap-4 dark:bg-zinc-900/80">
                <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-sm font-semibold mb-1">Cookie & Privacy</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        Utilizziamo i cookie per migliorare la tua esperienza su Youniks.
                        Navigando sul sito accetti l'uso dei cookie.
                    </p>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                    <Button
                        onClick={handleAccept}
                        size="sm"
                        className="flex-1 sm:flex-none whitespace-nowrap bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6"
                    >
                        Accetta
                    </Button>
                    <button
                        onClick={closeBanner}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors text-muted-foreground hover:text-foreground"
                        aria-label="Chiudi"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};
