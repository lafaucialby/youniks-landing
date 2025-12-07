import { siInstagram, siFacebook } from "simple-icons";

const siLinkedin = {
  title: 'LinkedIn',
  slug: 'linkedin',
  path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'
};

interface SocialIconProps {
  icon: typeof siInstagram | typeof siLinkedin | typeof siFacebook;
  className?: string;
  size?: number;
}

const SocialIcon = ({ icon, className, size = 24 }: SocialIconProps) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>{icon.title}</title>
    <path d={icon.path} />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">Youniks</h3>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/youniks_official/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <SocialIcon icon={siInstagram} size={24} />
            </a>
            <a href="#" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <SocialIcon icon={siFacebook} size={24} />
            </a>
            <a href="https://www.linkedin.com/company/youniks/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
              <SocialIcon icon={siLinkedin} size={24} />
            </a>
          </div>
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