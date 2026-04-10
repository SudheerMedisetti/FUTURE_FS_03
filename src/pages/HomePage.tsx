import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dumbbell, Users, Heart, Zap, Star, ChevronRight, TrendingUp, Globe, Palette } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const services = [
  { icon: Dumbbell, title: "Strength Training", desc: "Build muscle and power with our state-of-the-art equipment and expert guidance." },
  { icon: Heart, title: "Cardio Programs", desc: "High-intensity cardio sessions designed to boost endurance and burn fat fast." },
  { icon: Users, title: "Group Classes", desc: "Energizing group sessions including HIIT, yoga, spin, and kickboxing." },
  { icon: Zap, title: "Personal Training", desc: "One-on-one coaching tailored to your unique goals and fitness level." },
];

const testimonials = [
  { name: "Priya Sharma", text: "Forge Fitness completely transformed my life. I lost 20kg in 6 months with their personal training program!", rating: 5 },
  { name: "Rahul Verma", text: "The trainers here actually care. Best gym experience I've ever had. The group classes are incredible.", rating: 5 },
  { name: "Anita Desai", text: "Clean facility, amazing community, and results-driven approach. I recommend Forge to everyone!", rating: 5 },
];

const stats = [
  { value: "500+", label: "Active Members" },
  { value: "15+", label: "Expert Trainers" },
  { value: "50+", label: "Weekly Classes" },
  { value: "98%", label: "Happy Clients" },
];

const HomePage = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroImg} alt="Forge Fitness gym interior" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/75" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-foreground leading-none mb-4 animate-fade-in-up">
            FORGE YOUR <span className="text-gradient">STRONGEST</span> SELF
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 font-body" style={{ animationDelay: "0.2s" }}>
            Premium fitness training, world-class equipment, and a community that pushes you beyond your limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: "0.4s" }}>
            <Link to="/contact">
              <Button variant="hero" size="xl">Join Now</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="xl">View Plans</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-primary py-8">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-heading text-primary-foreground">{s.value}</div>
              <div className="text-sm text-primary-foreground/80 font-body uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-4">WHAT WE <span className="text-gradient">OFFER</span></h2>
          <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12 font-body">Everything you need to achieve your fitness goals under one roof.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 group">
                <s.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-heading text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                See All Services <ChevronRight className="ml-1" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-12">MEMBER <span className="text-gradient">STORIES</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground font-body mb-4 italic">"{t.text}"</p>
                <p className="text-sm text-primary font-body font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Value */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading text-center mb-4">WHY A WEBSITE <span className="text-gradient">MATTERS</span></h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 font-body">Understanding the business impact of a professional online presence.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading text-foreground mb-3">More Customers</h3>
              <p className="text-sm text-muted-foreground font-body">97% of consumers search online before visiting a local business. A website puts you where your customers are looking.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading text-foreground mb-3">Online Presence</h3>
              <p className="text-sm text-muted-foreground font-body">Your website works 24/7 as a digital storefront, building credibility and trust even while you sleep.</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-heading text-foreground mb-3">Better Conversions</h3>
              <p className="text-sm text-muted-foreground font-body">Professional design with clear CTAs can increase conversion rates by 200%. Great UX turns visitors into members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-primary text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-heading text-primary-foreground mb-4">READY TO START YOUR JOURNEY?</h2>
          <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 font-body">Book your free trial session today and experience the Forge difference.</p>
          <Link to="/contact">
            <Button variant="outline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
