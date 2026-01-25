"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY, FOOTER } from "@/constants";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 min-w-0">
          {/* Company Info */}
          <div className="lg:col-span-1 min-w-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-sunny flex items-center justify-center shrink-0">
                <span className="text-primary-foreground font-bold text-xl font-display">S</span>
              </div>
              <span className="font-display font-bold text-xl">{COMPANY.name}</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-6 break-words">
              {FOOTER.description}
            </p>
            <div className="flex flex-col gap-3 min-w-0">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors break-words"
              >
                <Phone size={16} className="shrink-0" />
                {COMPANY.phone}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 text-sm text-background/70 hover:text-background transition-colors break-words"
              >
                <Mail size={16} className="shrink-0" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-background/70 min-w-0">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span className="break-words">{COMPANY.address.full}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="min-w-0">
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              {FOOTER.quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="min-w-0">
            <h4 className="font-display font-semibold text-lg mb-4">Products</h4>
            <ul className="flex flex-col gap-2">
              {FOOTER.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="flex flex-col gap-2">
              {FOOTER.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">{FOOTER.copyright}</p>
            <p className="text-sm text-background/50">
              Made with ❤️ in Ahmedabad, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
