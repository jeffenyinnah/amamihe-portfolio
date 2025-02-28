import { Mail, Linkedin, Github, ChartAreaIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="text-xl font-bold tracking-tight mb-3">
              <span className="mr-1">AMAMIHE</span>
              <span className="text-primary/70 text-sm font-normal">.dev</span>
            </Link>
            <p className="text-muted-foreground text-sm text-left">
              Data Analytics Consultant & Web Developer creating impactful
              digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h3 className="font-medium mb-3">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/portfolio"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h3 className="font-medium mb-3">Connect</h3>
            <div className="flex gap-4">
              <a
                href="mailto:jeffenyinnah@gmail.com"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://linkedin.comhttps://www.linkedin.com/in/amamihe-kaiser/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/jeffenyinnah"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://public.tableau.com/app/profile/amamihe.kaiser/vizzes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                aria-label="Tableau"
              >
                <ChartAreaIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} AMAMIHE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
