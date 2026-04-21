import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, Linkedin } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      toast({
        title: "Message sent ✓",
        description: "Thanks for reaching out — I'll reply within 24 hours.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });
      setLoading(false);
    }, 700);
  };

  return (
    <Layout>
      <section className="container py-20 md:py-28">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth ranking."
          description="Whether you need an SEO audit, editorial content, or a full-stack helping hand — I'm just a message away."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 md:p-10 shadow-card space-y-5"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required value={form.subject} onChange={handleChange} placeholder="What's this about?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required value={form.message} onChange={handleChange} placeholder="Tell me about your project..." rows={6} />
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full sm:w-auto">
              {loading ? "Sending..." : <>Send Message <Send className="ml-1 h-4 w-4" /></>}
            </Button>
          </form>

          {/* Info */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-subtle border border-border rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-5">Direct contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-muted-foreground">Email</p>
                    <a href="mailto:hello@prabesh.dev" className="font-medium hover:text-primary transition-smooth">hello@prabesh.dev</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Linkedin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-muted-foreground">LinkedIn</p>
                    <a href="#" className="font-medium hover:text-primary transition-smooth">/in/prabeshtamang</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-muted-foreground">Based in</p>
                    <p className="font-medium">Kathmandu, Nepal — open to remote</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-2xl p-6 md:p-8">
              <h3 className="font-display text-xl font-semibold mb-2">Response time</h3>
              <p className="text-sm text-muted-foreground">I typically respond within 24 hours, Monday to Friday.</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
