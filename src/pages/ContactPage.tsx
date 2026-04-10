import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [trialForm, setTrialForm] = useState({ name: "", email: "", phone: "" });

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  const handleTrial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialForm.name.trim() || !trialForm.email.trim() || !trialForm.phone.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Free trial booked! We'll call you to confirm your session.");
    setTrialForm({ name: "", email: "", phone: "" });
  };

  return (
    <main className="pt-16">
      <section className="section-padding bg-gradient-dark text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-heading mb-4">GET IN <span className="text-gradient">TOUCH</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-lg">Ready to start? Drop us a message or book your free trial below.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-heading mb-6">SEND A <span className="text-gradient">MESSAGE</span></h2>
              <form onSubmit={handleContact} className="space-y-4">
                <Input placeholder="Your Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="bg-card border-border font-body" />
                <Input type="email" placeholder="Your Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="bg-card border-border font-body" />
                <Textarea placeholder="Your Message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="bg-card border-border font-body" />
                <Button type="submit" variant="default" size="lg" className="w-full">Send Message</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading mb-6">VISIT <span className="text-gradient">US</span></h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, text: "123 Iron Street, Fitness District, Mumbai 400001" },
                  { icon: Phone, text: "+1 (555) 123-4567" },
                  { icon: Mail, text: "contact@forgefitness.com" },
                  { icon: Clock, text: "Mon-Fri: 5AM–10PM | Sat-Sun: 7AM–8PM" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <p className="text-muted-foreground font-body text-sm">{text}</p>
                  </div>
                ))}
              </div>
              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden border border-border">
                <iframe
                  title="Forge Fitness Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Free Trial */}
      <section className="section-padding bg-gradient-primary">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="text-4xl font-heading text-primary-foreground mb-2">BOOK YOUR FREE TRIAL</h2>
          <p className="text-primary-foreground/80 font-body mb-8">Experience Forge Fitness with a complimentary session. No commitment required.</p>
          <form onSubmit={handleTrial} className="space-y-4">
            <Input placeholder="Full Name" value={trialForm.name} onChange={(e) => setTrialForm({ ...trialForm, name: e.target.value })} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body" />
            <Input type="email" placeholder="Email Address" value={trialForm.email} onChange={(e) => setTrialForm({ ...trialForm, email: e.target.value })} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body" />
            <Input type="tel" placeholder="Phone Number" value={trialForm.phone} onChange={(e) => setTrialForm({ ...trialForm, phone: e.target.value })} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 font-body" />
            <Button type="submit" variant="outline" size="lg" className="w-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Book Now — It's Free
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
