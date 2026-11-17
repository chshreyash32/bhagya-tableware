import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink, Send, Leaf } from 'lucide-react';
import {
  PRODUCTS,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  buildWhatsAppLink,
} from '../data/products';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const mapsQuery = encodeURIComponent(
    '6-21-9/2, Dubba, Nizamabad, Telangana, 503001, India'
  );
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      'Hello BHAGYA Nature-Friendly Tableware,',
      '',
      name.trim() ? `Name: ${name.trim()}` : null,
      phone.trim() ? `Phone: ${phone.trim()}` : null,
      selectedProduct ? `Product Interest: ${selectedProduct}` : null,
      message.trim() ? `Enquiry Details: ${message.trim()}` : 'Please share product details, availability and quotation.',
      '',
      'Thank you.',
    ].filter((l) => l !== null);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header Banner */}
      <section className="bg-forest-dark text-cream py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf-light">
            <Leaf className="w-4 h-4" />
            Get in Touch
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Contact BHAGYA
          </h1>
          <p className="text-sm sm:text-base text-cream/85 max-w-2xl mx-auto">
            Reach out directly via WhatsApp or phone for wholesale enquiries, event orders, product
            availability, and quotations.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
          {/* Left Column: Direct Business Info */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-3xl border border-forest/10 p-6 shadow-subtle space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-stone-100">
                <img
                  src="/leaf-opt/bhagya-logo-hero.webp"
                  alt="BHAGYA Nature-Friendly Tableware"
                  className="h-14 w-auto object-contain"
                />
                <div>
                  <h2 className="font-heading font-extrabold text-lg text-forest-dark leading-tight">
                    BHAGYA
                  </h2>
                  <p className="text-xs font-semibold text-leaf uppercase tracking-wider">
                    Nature-Friendly Tableware
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-leaf-tint text-forest flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-forest-dark">
                    Business Address
                  </h3>
                  <address className="not-italic text-sm text-stone-600 mt-1 leading-relaxed">
                    6-21-9/2, Dubba,<br />
                    Nizamabad,<br />
                    Telangana, 503001,<br />
                    India.
                  </address>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-forest hover:underline mt-2"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-leaf-tint text-forest flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-forest-dark">
                    Phone Number
                  </h3>
                  <a
                    href={`tel:${PHONE_DISPLAY}`}
                    className="block text-base font-bold text-forest hover:underline mt-0.5"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <p className="text-xs text-stone-500">Tap to call directly</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 text-[#1ca850] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm text-forest-dark">
                    WhatsApp Enquiries
                  </h3>
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base font-bold text-[#1ca850] hover:underline mt-0.5"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                  <p className="text-xs text-stone-500">Fastest way to request product details & quotations</p>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3 px-4 rounded-xl text-sm shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={`tel:${PHONE_DISPLAY}`}
                  className="inline-flex items-center justify-center gap-2 bg-cream hover:bg-beige text-forest-dark font-bold py-3 px-4 rounded-xl text-sm border border-forest/15 transition-colors"
                >
                  <Phone className="w-4 h-4 text-forest" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Quick WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-forest/10 p-6 sm:p-8 shadow-subtle">
              <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-forest-dark">
                Send a Quick WhatsApp Enquiry
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Fill in your details below to open a ready-to-send WhatsApp message to BHAGYA
                Nature-Friendly Tableware.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-cream/40 text-sm text-forest-dark focus:outline-none focus:ring-2 focus:ring-forest/25 focus:border-forest"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5"
                    >
                      Phone / WhatsApp Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-cream/40 text-sm text-forest-dark focus:outline-none focus:ring-2 focus:ring-forest/25 focus:border-forest"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-product"
                    className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5"
                  >
                    Select Product (Optional)
                  </label>
                  <select
                    id="contact-product"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-cream/40 text-sm text-forest-dark focus:outline-none focus:ring-2 focus:ring-forest/25 focus:border-forest"
                  >
                    <option value="">General Catalogue / Multiple Products</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name} ({p.categoryName})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold uppercase tracking-wider text-forest-dark mb-1.5"
                  >
                    Quantity & Requirement Details
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share approximate quantity, event date, or any specific requirement..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-cream/40 text-sm text-forest-dark focus:outline-none focus:ring-2 focus:ring-forest/25 focus:border-forest resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] active:scale-[0.99] text-white font-bold py-3.5 px-6 rounded-xl shadow-sm transition-all text-sm sm:text-base"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Embed Section */}
        <div className="mt-8 bg-white rounded-3xl border border-forest/10 overflow-hidden shadow-subtle">
          <div className="p-4 sm:p-5 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="font-heading font-bold text-base sm:text-lg text-forest-dark">
                Our Location — Dubba, Nizamabad
              </h2>
              <p className="text-xs text-stone-500">
                6-21-9/2, Dubba, Nizamabad, Telangana, 503001, India
              </p>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-forest hover:underline shrink-0"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="w-full h-72 sm:h-96 bg-stone-100">
            <iframe
              title="BHAGYA Nature-Friendly Tableware Location Map"
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
