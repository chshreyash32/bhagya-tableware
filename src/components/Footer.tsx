import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, MessageCircle, Leaf, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { PHONE_DISPLAY, WHATSAPP_DISPLAY, buildWhatsAppLink } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-forest/15">
      {/* Upper Natural Cream Brand Section — allows transparent BHAGYA logo to shine naturally without any box */}
      <div className="bg-beige/40 py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <img
                src="/leaf-opt/bhagya-logo-hero.webp"
                alt="BHAGYA Nature-Friendly Tableware Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />
              <div>
                <h2 className="font-heading font-extrabold text-xl text-forest-dark leading-tight">
                  BHAGYA
                </h2>
                <p className="text-xs font-semibold text-leaf-dark uppercase tracking-widest">
                  Nature-Friendly Tableware
                </p>
              </div>
            </Link>

            <p className="text-sm text-stone-700 leading-relaxed max-w-sm">
              Traditional biodegradable Indian leaf plates (Vistarakulu / Vistaraku / Vistrakulu),
              cups, bowls, and raw forest leaves — handcrafted with heritage and care.
            </p>

            <p className="font-heading text-xs font-semibold text-forest italic flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-leaf shrink-0" />
              "Traditional Indian Craftsmanship. Natural Tableware. A Better Way to Serve."
            </p>
          </div>

          {/* Product Categories */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-forest-dark">
              Product Catalogue
            </h3>
            <ul className="space-y-2 text-sm text-stone-700">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products/${cat.slug}`}
                    className="hover:text-forest inline-flex items-center gap-1.5 transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-leaf" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="font-semibold text-forest hover:underline inline-flex items-center gap-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-forest" />
                  <span>View All 25 Products</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Explore Our Story */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-forest-dark">
              Our Story
            </h3>
            <ul className="space-y-2 text-sm text-stone-700">
              <li>
                <Link to="/about" className="hover:text-forest transition-colors">
                  About BHAGYA
                </Link>
              </li>
              <li>
                <Link to="/women-empowerment" className="hover:text-forest transition-colors">
                  Women Empowerment
                </Link>
              </li>
              <li>
                <Link to="/craftsmanship" className="hover:text-forest transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-forest transition-colors">
                  Business Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-forest transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="md:col-span-3 space-y-3.5">
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-forest-dark">
              Contact & Enquiries
            </h3>

            <div className="space-y-2.5 text-sm text-stone-700">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-forest shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">
                  6-21-9/2, Dubba,<br />
                  Nizamabad, Telangana, 503001,<br />
                  India.
                </address>
              </div>

              <a
                href={`tel:${PHONE_DISPLAY}`}
                className="flex items-center gap-2.5 hover:text-forest transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-forest shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </a>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs transition-all w-full sm:w-auto mt-1"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>WhatsApp {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Forest Green Bar */}
      <div className="bg-forest-dark text-cream/80 py-4 px-4 sm:px-6 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">BHAGYA NATURE-FRIENDLY TABLEWARE</strong>. All rights reserved.
          </p>
          <p className="text-cream/60">
            Biodegradable Leaf Plates (Vistarakulu) • Nizamabad, Telangana
          </p>
        </div>
      </div>
    </footer>
  );
};
