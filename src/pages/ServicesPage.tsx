import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "STARTER",
    price: "₹1,499",
    period: "/month",
    features: ["Gym floor access", "Locker room & showers", "Basic fitness assessment", "2 group classes/week"],
    popular: false,
  },
  {
    name: "PRO",
    price: "₹2,999",
    period: "/month",
    features: ["Everything in Starter", "Unlimited group classes", "1 PT session/month", "Nutrition consultation", "InBody analysis"],
    popular: true,
  },
  {
    name: "ELITE",
    price: "₹4,999",
    period: "/month",
    features: ["Everything in Pro", "4 PT sessions/month", "Custom meal plan", "Recovery zone access", "Priority booking", "Guest passes (2/month)"],
    popular: false,
  },
];

const allServices = [
  { title: "Weight Training", desc: "Full range of free weights, machines, and cable systems." },
  { title: "Cardio Zone", desc: "Treadmills, bikes, rowers, and stair climbers with entertainment." },
  { title: "Group Fitness", desc: "HIIT, spin, yoga, Zumba, kickboxing, and functional training." },
  { title: "Personal Training", desc: "1-on-1 coaching with certified trainers for personalized results." },
  { title: "Nutrition Coaching", desc: "Custom meal plans and supplement guidance by certified experts." },
  { title: "Recovery Zone", desc: "Foam rolling, stretching area, sauna, and cold plunge facilities." },
];

const ServicesPage = () => (
  <main className="pt-16">
    {/* Hero */}
    <section className="section-padding bg-gradient-dark text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-heading mb-4">MEMBERSHIP <span className="text-gradient">PLANS</span></h1>
        <p className="text-muted-foreground max-w-xl mx-auto font-body text-lg">Choose the plan that fits your goals. No hidden fees. Cancel anytime.</p>
      </div>
    </section>

    {/* Pricing */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div key={p.name} className={`bg-card border rounded-lg p-8 relative flex flex-col ${p.popular ? "border-primary shadow-lg shadow-primary/10 scale-105" : "border-border"}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-body font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-heading text-foreground text-center">{p.name}</h3>
              <div className="text-center my-6">
                <span className="text-4xl font-heading text-gradient">{p.price}</span>
                <span className="text-muted-foreground font-body text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground font-body">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-6">
                <Button variant={p.popular ? "hero" : "outline"} className="w-full" size="lg">
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* All Services */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading text-center mb-12">ALL <span className="text-gradient">SERVICES</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allServices.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-heading text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default ServicesPage;
