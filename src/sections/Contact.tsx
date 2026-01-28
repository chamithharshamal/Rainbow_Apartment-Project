"use client";

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="bg-cream py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">
            Contact Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy mt-4 mb-6">
            Begin Your Journey Home
          </h2>
          <p className="text-charcoal/70 leading-relaxed">
            Schedule a visit to experience Rainbow Apartments in person. Our
            team is ready to assist you in finding your perfect home.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:items-stretch">
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-navy/5"
          >
            <h3 className="font-serif text-2xl font-bold text-navy mb-8">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-navy font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-cream/50 border-navy/10 text-navy placeholder:text-navy/40 focus:border-gold focus:ring-gold h-12 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-navy font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-cream/50 border-navy/10 text-navy placeholder:text-navy/40 focus:border-gold focus:ring-gold h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-navy font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+94 70 707 4470"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-cream/50 border-navy/10 text-navy placeholder:text-navy/40 focus:border-gold focus:ring-gold h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-navy font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="bg-cream/50 border-navy/10 text-navy placeholder:text-navy/40 focus:border-gold focus:ring-gold rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-navy text-white hover:bg-navy/90 font-medium py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Inquiry
              </Button>
            </form>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 bg-navy rounded-3xl p-8 md:p-12 shadow-2xl text-white flex flex-col justify-between relative overflow-hidden"
          >
            {/* Background Texture */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <div className="w-64 h-64 rounded-full border-[20px] border-white" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Contact Information
              </h3>
              <p className="text-white/60 mb-10">We'd love to hear from you.</p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <Phone className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white/90 font-medium mb-1">Phone</h4>
                    <a
                      href="tel:+94707074470"
                      className="text-white/60 hover:text-gold transition-colors block"
                    >
                      +94 70 707 4470
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <Mail className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white/90 font-medium mb-1">Email</h4>
                    <a
                      href="mailto:info@rainbowapartments.lk"
                      className="text-white/60 hover:text-gold transition-colors block"
                    >
                      info@rainbowapartments.lk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <MapPin className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="text-white/90 font-medium mb-1">Address</h4>
                    <p className="text-white/60 leading-relaxed">
                      Rathmalana, Sri Lanka
                      <br />
                      Near Bolgoda Lake
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h4 className="text-white font-medium mb-4">
                Quick Chat?
              </h4>
              <a
                href="https://wa.me/94707074470"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-green-600/90 text-white font-medium hover:bg-green-600 transition-colors w-full justify-center rounded-xl backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Open WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
