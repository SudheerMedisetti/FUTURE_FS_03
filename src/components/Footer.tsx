import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="text-2xl font-heading text-gradient tracking-widest">FORGE</span>
          <span className="text-2xl font-heading text-foreground tracking-widest ml-1">FITNESS</span>
          <p className="text-muted-foreground text-sm mt-3 font-body">Transform your body. Forge your future. Premium fitness training for all levels.</p>
        </div>
        <div>
          <h4 className="text-lg font-heading text-foreground mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["/", "/about", "/services", "/contact"].map((p) => (
              <Link key={p} to={p} className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                {p === "/" ? "Home" : p.slice(1).charAt(0).toUpperCase() + p.slice(2)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-heading text-foreground mb-3">Hours</h4>
          <p className="text-sm text-muted-foreground font-body">Mon-Fri: 5:00 AM – 10:00 PM</p>
          <p className="text-sm text-muted-foreground font-body">Sat-Sun: 7:00 AM – 8:00 PM</p>
        </div>
        <div>
          <h4 className="text-lg font-heading text-foreground mb-3">Contact</h4>
          <p className="text-sm text-muted-foreground font-body">123 Iron Street, Fitness District</p>
          <p className="text-sm text-muted-foreground font-body">contact@forgefitness.com</p>
          <p className="text-sm text-muted-foreground font-body">+1 (555) 123-4567</p>
        </div>
      </div>
      <div className="border-t border-border mt-8 pt-6 text-center text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} Forge Fitness. All rights reserved. | Developed by Sudheer
      </div>
    </div>
  </footer>
);

export default Footer;
