import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '#about' },
  { name: 'Apartments', href: '#apartments' },
  { name: 'Amenities', href: '#amenities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <span className="font-serif text-2xl font-bold text-white">
                Rainbow<span className="text-gold">.</span>
              </span>
            </a>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md">
              Experience elevated living with panoramic views of the sea,
              lagoon, and Bolgoda Lake. Modern architecture meets tranquil
              surroundings in this exclusive residential sanctuary.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold hover:text-navy transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-medium mb-6">Contact</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <a
                  href="tel:+94707074470"
                  className="hover:text-gold transition-colors"
                >
                  +94 70 707 4470
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rainbowapartments.lk"
                  className="hover:text-gold transition-colors"
                >
                  info@rainbowapartments.lk
                </a>
              </li>
              <li>Rathmalana, Sri Lanka</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2025 Rainbow Apartments. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
