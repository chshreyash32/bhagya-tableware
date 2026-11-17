import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Heart, ShieldCheck, ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { buildWhatsAppLink } from '../data/products';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <section className="bg-forest-dark text-cream py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf-light">
            <Leaf className="w-4 h-4" />
            About BHAGYA Nature-Friendly Tableware
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Rooted in Tradition. Inspired by Nature.
          </h1>
          <p className="text-sm sm:text-base text-cream/85 max-w-2xl mx-auto leading-relaxed">
            Traditional Indian Craftsmanship. Natural Tableware. A Better Way to Serve.
          </p>
        </div>
      </section>

      {/* The Origin Story — Grandmother Bhagya */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="bg-white rounded-3xl border border-forest/10 shadow-subtle overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-leaf-tint/50 rounded-2xl p-6 border border-forest/10">
              <img
                src="/leaf-opt/bhagya-logo-hero.webp"
                alt="BHAGYA Nature-Friendly Tableware Official Logo"
                className="w-52 sm:w-60 h-auto object-contain"
              />
              <p className="text-xs font-medium text-forest/80 text-center mt-4">
                Honoring a timeless legacy of hand-stitched Indian leaf plates
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf">
                <Heart className="w-3.5 h-3.5" />
                Our Heritage Story
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-dark leading-tight">
                The Inspiration Behind BHAGYA
              </h2>
              <blockquote className="border-l-4 border-leaf pl-4 py-1 text-stone-700 italic text-sm sm:text-base leading-relaxed bg-cream/60 rounded-r-xl pr-4">
                "Bhagya Aaku was inspired by a loving grandmother named Bhagya, who spent her days
                crafting leaf plates with care and devotion. Her hands turned simple leaves into
                beautiful, eco-friendly plates that carried the warmth of tradition and the wisdom
                of nature. This logo honors her legacy — a symbol of rural craftsmanship,
                sustainability, and the love passed down through generations. Every plate is a piece
                of her story, handmade with heart."
              </blockquote>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                In Indian households and festive gatherings, serving food on natural broad leaves —
                known affectionately as <strong>Vistarakulu</strong>, <strong>Vistaraku</strong>, or{' '}
                <strong>Vistrakulu</strong> — has always represented purity, hospitality, and deep
                respect for nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer & Eco Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl p-6 border border-forest/10 shadow-subtle space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-leaf-tint text-forest flex items-center justify-center">
              <Leaf className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-forest-dark">
              Nature-Friendly Identity
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Our biodegradable tableware provides an authentic, eco-conscious alternative to
              single-use plastic and foam plates for weddings, temples, community feasts, and daily
              use.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-forest/10 shadow-subtle space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-leaf-tint text-forest flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-forest-dark">
              Complete Product Range
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              From Brown Board Buff Plates and White Board Buff Plates to Traditional Sitting Plates
              (Pulla Kuttu & Machine Stitching), Cups & Bowls, and Raw Forest Leaves.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-forest/10 shadow-subtle space-y-2.5">
            <div className="w-11 h-11 rounded-xl bg-leaf-tint text-forest flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-forest-dark">
              Serving from Nizamabad, Telangana
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Located at 6-21-9/2, Dubba, Nizamabad, Telangana, we assist families, caterers,
              function halls, and wholesale buyers through direct WhatsApp support.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Identity & Storefront Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-forest/10 shadow-subtle">
            <img
              src="/leaf-opt/bill-board.webp"
              alt="BHAGYA Nature-Friendly Tableware Signboard"
              loading="lazy"
              className="w-full h-64 sm:h-72 object-cover"
            />
            <div className="p-5">
              <h3 className="font-heading font-bold text-base sm:text-lg text-forest-dark">
                BHAGYA Brand Identity
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                A recognizable mark of traditional authenticity, clean packaging, and natural leaf
                craftsmanship.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-forest/10 shadow-subtle">
            <img
              src="/leaf-opt/sri-2647.webp"
              alt="Hygienically Packed BHAGYA Leaf Plate Bundles"
              loading="lazy"
              className="w-full h-64 sm:h-72 object-contain bg-white p-4"
            />
            <div className="p-5 border-t border-stone-100">
              <h3 className="font-heading font-bold text-base sm:text-lg text-forest-dark">
                Clean & Hygienic Packaging
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1">
                Every bundle is carefully packed and labeled with the BHAGYA seal so plates reach
                your celebration fresh and ready to serve.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 bg-forest rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-heading font-bold text-xl sm:text-2xl">
              Explore Our Catalogue or Enquire Directly
            </h2>
            <p className="text-sm text-cream/80 max-w-xl">
              Discover our traditional Vistarakulu range or reach out on WhatsApp for availability
              and bulk quotations.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-forest-dark font-bold text-sm px-5 py-3 rounded-xl hover:bg-cream transition-colors"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
