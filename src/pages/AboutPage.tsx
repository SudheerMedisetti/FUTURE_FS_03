import { Award, Target, Clock } from "lucide-react";

const trainers = [
  { name: "Vikram Singh", role: "Head Coach & Founder", exp: "12+ years", specialty: "Strength & Conditioning" },
  { name: "Meera Patel", role: "Yoga & Wellness Coach", exp: "8+ years", specialty: "Yoga & Mindfulness" },
  { name: "Arjun Reddy", role: "HIIT & Cardio Specialist", exp: "6+ years", specialty: "High-Intensity Training" },
  { name: "Sneha Kapoor", role: "Nutrition Expert", exp: "10+ years", specialty: "Sports Nutrition" },
];

const values = [
  { icon: Award, title: "Excellence", desc: "We never settle for good enough. Every program is crafted for maximum results." },
  { icon: Target, title: "Results-Driven", desc: "Your goals are our mission. We measure success by your transformation." },
  { icon: Clock, title: "Consistency", desc: "We believe in sustainable habits that create lifelong fitness." },
];

const AboutPage = () => (
  <main className="pt-16">
    {/* Hero */}
    <section className="section-padding bg-gradient-dark text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-heading mb-4">OUR <span className="text-gradient">STORY</span></h1>
        <p className="text-muted-foreground max-w-2xl mx-auto font-body text-lg">
          Founded in 2018, Forge Fitness was born from a simple belief: everyone deserves access to world-class fitness training. What started as a small garage gym has grown into a premier fitness destination with over 500 active members.
        </p>
      </div>
    </section>

    {/* Mission */}
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-heading mb-4">OUR <span className="text-gradient">MISSION</span></h2>
          <p className="text-muted-foreground font-body mb-4">
            At Forge Fitness, we don't just build bodies — we build confidence, discipline, and resilience. Our holistic approach combines cutting-edge training techniques with personalized nutrition guidance.
          </p>
          <p className="text-muted-foreground font-body">
            We invested in top-tier equipment from Rogue and Hammer Strength, hired certified trainers with real-world experience, and created an environment where beginners and athletes alike feel at home.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4 bg-card border border-border rounded-lg p-5">
              <v.icon className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-heading text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Trainers */}
    <section className="section-padding bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-heading text-center mb-12">MEET THE <span className="text-gradient">TEAM</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-all duration-300">
              <div className="w-20 h-20 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-2xl font-heading text-primary-foreground">
                {t.name.split(" ").map(n => n[0]).join("")}
              </div>
              <h3 className="text-xl font-heading text-foreground">{t.name}</h3>
              <p className="text-primary text-sm font-body font-semibold">{t.role}</p>
              <p className="text-muted-foreground text-xs font-body mt-1">{t.specialty} • {t.exp}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default AboutPage;
