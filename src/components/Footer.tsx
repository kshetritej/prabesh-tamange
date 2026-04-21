import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border mt-24">
      <div className="container py-12 grid gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="font-display text-lg font-bold">
            Prabesh<span className="text-primary">.</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            SEO strategist, content writer, and IT specialist building search-first digital experiences.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold mb-3">Navigate</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-smooth">Home</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-smooth">About</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-smooth">Projects</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold mb-3">Connect</h3>
          <div className="flex items-center gap-3">
            <a href="mailto:hello@prabesh.dev" aria-label="Email" className="p-2 rounded-md border border-border hover:border-primary hover:text-primary transition-smooth">
              <Mail className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-md border border-border hover:border-primary hover:text-primary transition-smooth">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-md border border-border hover:border-primary hover:text-primary transition-smooth">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-md border border-border hover:border-primary hover:text-primary transition-smooth">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-6 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Prabesh Tamang. All rights reserved.</p>
          <p>Crafted with intention.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
