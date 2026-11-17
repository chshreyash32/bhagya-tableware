import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Leaf,
  Award,
  Layers,
  Scissors,
  PackageCheck,
  HeartHandshake,
  MapPin,
  Phone,
  MessageCircle,
  Info,
  Sparkles,
  Image as ImageIcon,
} from 'lucide-react';
import { SearchBar } from '../components/SearchBar';
import { CategoryNavigation } from '../components/CategoryNavigation';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../data/categories';
import {
  PRODUCTS,
  PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  buildWhatsAppLink,
} from '../data/products';

export const Home: React.FC = () => {
  // Helper to get 3 featured products per category (2 shown on mobile 2-col for perfect symmetry, 3 on tablet/desktop 3-col)
  const getFeaturedByCategory = (slug: string) => {
    const inCat = PRODUCTS.filter((p) => p.categorySlug === slug);
    const featured = inCat.filter((p) => p.featuredOnHome);
    return (featured.length >= 3 ? featured : inCat).slice(0, 3);
  };

  const whyChooseFeatures = [
    {
      icon: Leaf,
      title: 'Nature-Friendly Tableware',
      desc: 'Crafted from authentic broad forest leaves (Vistarakulu) — biodegradable and earth-friendly.',
    },
    {
      icon: HeartHandshake,
      title: 'Traditional Indian Craftsmanship',
      desc: 'Rooted in generations of Indian culinary heritage and skilled hand-stitching.',
    },
    {
      icon: Layers,
      title: 'Multiple Plate Sizes',
      desc: 'Complete range from 4 Inch cups and 8 Inch snack plates up to 18 Inch royal feast plates.',
    },
    {
      icon: Scissors,
      title: 'Different Stitching Options',
      desc: 'Choose between traditional bamboo-splint Pulla Kuttu and clean uniform Machine Stitching.',
    },
    {
      icon: Sparkles,
      title: 'Traditional Leaf Products',
      desc: 'Includes Brown Board Buff, White Board Buff, Sitting Plates, Cups & Bowls, and Raw Leaf.',
    },
    {
      icon: PackageCheck,
      title: 'Bulk Enquiry Support',
      desc: 'Direct WhatsApp enquiry support for weddings, caterers, temples, events, and wholesale orders.',
    },
  ];

  const craftsmanshipSteps = [
    {
      step: '01',
      title: 'Leaf Collection',
      desc: 'Broad natural leaves gathered carefully from forest vines.',
      image: '/leaf-opt/xhkqrkmsdfpoluteo9go-thumb.webp',
    },
    {
      step: '02',
      title: 'Sorting & Cleaning',
      desc: 'Leaves are graded for texture, size, and durability.',
      image: '/leaf-opt/aesa-blog-204-1pic-edited-990x611-thumb.webp',
    },
    {
      step: '03',
      title: 'Traditional Pulla Kuttu',
      desc: 'Artisans hand-stitch leaves using fine natural splints.',
      image: '/leaf-opt/siali-leaves-emerge-as-alternative-to-plastic-750x375-thumb.webp',
    },
    {
      step: '04',
      title: 'Machine Stitching & Pressing',
      desc: 'Uniform machine stitching and heated hydraulic molding into sturdy plates.',
      image: '/leaf-opt/hq720-thumb.webp',
    },
  ];

  const galleryPreview = [
    {
      src: '/leaf-opt/sri-2639-thumb.webp',
      alt: 'Complete BHAGYA Leaf Plate Size Range',
      label: 'Full Size Range',
    },
    {
      src: '/leaf-opt/sri-2647-thumb.webp',
      alt: 'Hygienically Packed BHAGYA Leaf Plates',
      label: 'Sealed Packaging',
    },
    {
      src: '/leaf-opt/1611116169-sal-leaf-utensils-3-thumb.webp',
      alt: 'Women Pressing Leaf Plates in Workshop',
      label: 'Molding Workshop',
    },
    {
      src: '/leaf-opt/story-photos-default-21-thumb.webp',
      alt: 'Artisan Women Holding Fresh Stitched Leaf Plates',
      label: 'Women Artisans',
    },
    {
      src: '/leaf-opt/sri-2641-thumb.webp',
      alt: 'Sturdy Plate Backings Quality View',
      label: 'Board Backing',
    },
    {
      src: '/leaf-opt/bill-board-thumb.webp',
      alt: 'BHAGYA Storefront Signboard',
      label: 'BHAGYA Identity',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* =======================================================
          1. BRAND SPOTLIGHT HERO — TRANSPARENT LOGO + BRAND STORY
         ======================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5F1E3] via-cream to-leaf-tint border-b border-forest/10">
        {/* Subtle organic botanical accent circles (no white box) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full bg-leaf/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-16 w-64 h-64 rounded-full bg-forest/5 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8 items-center">
            {/* Highlighted Transparent Logo Only — NO white background */}
            <div className="md:col-span-5 flex justify-center md:justify-center">
              <img
                src="/leaf-opt/bhagya-logo-hero.webp"
                alt="BHAGYA Nature-Friendly Tableware Official Logo"
                className="w-44 sm:w-56 md:w-64 lg:w-72 h-auto object-contain select-none drop-shadow-[0_12px_24px_rgba(24,61,43,0.12)]"
              />
            </div>

            {/* Brand Introduction & Story */}
            <div className="md:col-span-7 text-center md:text-left space-y-3 sm:space-y-4">
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-forest bg-leaf/15 px-3 py-1 rounded-full">
                <Leaf className="w-3.5 h-3.5 text-forest" />
                <span>Traditional Vistarakulu • Nizamabad, Telangana</span>
              </span>

              <h1 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-forest-dark leading-tight">
                Traditional Indian Craftsmanship.{' '}
                <span className="text-leaf-olive">Natural Tableware.</span>
              </h1>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Inspired by grandmother <strong>Bhagya&apos;s</strong> devotion to hand-crafting
                leaf plates with care, <strong>BHAGYA Nature-Friendly Tableware</strong> brings
                authentic, biodegradable Indian leaf plates (<em>Vistarakulu / Vistaraku</em>),
                cups, bowls, and raw forest leaves — celebrating rural women&apos;s craftsmanship
                and a cleaner, plastic-free way to serve.
              </p>

              {/* Subtle Brand Pillars */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-0.5 text-xs font-semibold text-forest-dark">
                <span className="inline-flex items-center gap-1 bg-forest/8 border border-forest/15 px-2.5 py-1 rounded-full">
                  <Leaf className="w-3.5 h-3.5 text-leaf" />
                  100% Natural Biodegradable Leaf
                </span>
                <span className="inline-flex items-center gap-1 bg-forest/8 border border-forest/15 px-2.5 py-1 rounded-full">
                  <HeartHandshake className="w-3.5 h-3.5 text-leaf" />
                  Pulla Kuttu &amp; Machine Stitched
                </span>
                <span className="inline-flex items-center gap-1 bg-forest/8 border border-forest/15 px-2.5 py-1 rounded-full">
                  <Award className="w-3.5 h-3.5 text-leaf" />
                  Women Artisan Craft
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 pt-1">
                <a
                  href="#explore-products"
                  className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white font-bold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-xl shadow-sm transition-colors"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-xs sm:text-sm px-5 py-2.5 sm:py-3 rounded-xl shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>WhatsApp Enquiry</span>
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-forest-dark hover:text-forest font-semibold text-xs sm:text-sm px-3.5 py-2.5 rounded-xl border border-forest/20 hover:bg-forest/5 transition-colors"
                >
                  <span>Our Story</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================
          2. SEARCH BAR — QUICK CATALOGUE DISCOVERY
         ======================================================= */}
      <section className="bg-white border-b border-forest/10 px-3 sm:px-6 py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div className="flex-1">
            <SearchBar placeholder="Search Vistarakulu, 12 Inch Buff, Pulla Kuttu, Raw Leaf..." />
          </div>
          <p className="hidden md:block text-xs font-medium text-forest/75 shrink-0">
            Traditional Biodegradable Tableware • Direct WhatsApp Enquiry
          </p>
        </div>
      </section>

      {/* =======================================================
          3. HORIZONTAL PRODUCT CATEGORIES CHIPS
         ======================================================= */}
      <CategoryNavigation />

      {/* =======================================================
          4. EXPLORE OUR PRODUCTS
         ======================================================= */}
      <section
        id="explore-products"
        className="max-w-7xl mx-auto px-3 sm:px-6 pt-5 sm:pt-7 pb-4 scroll-mt-20"
      >
        <div className="flex items-end justify-between gap-2 mb-4 sm:mb-6">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-leaf block">
              BHAGYA Catalogue • Vistarakulu
            </span>
            <h2 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-forest-dark leading-tight mt-0.5">
              Explore Our Products
            </h2>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-forest hover:text-forest-dark whitespace-nowrap shrink-0 bg-white px-3 py-1.5 rounded-full border border-forest/15 shadow-xs"
          >
            <span>All 25 Items</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* =======================================================
            5–9. FIVE PRODUCT CATEGORIES (2-3 ITEMS + VIEW ALL →)
           ======================================================= */}
        <div className="space-y-8 sm:space-y-10">
          {CATEGORIES.map((category) => {
            const items = getFeaturedByCategory(category.slug);
            const isRawLeaf = category.slug === 'raw-leaf';

            return (
              <div key={category.id} className="scroll-mt-24">
                {/* Category Header Bar */}
                <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4 pb-2 border-b border-forest/10">
                  <div className="min-w-0">
                    <h2 className="font-heading font-bold text-base sm:text-xl text-forest-dark truncate">
                      {category.name}
                    </h2>
                    <p className="text-xs text-stone-500 hidden sm:block mt-0.5">
                      {category.shortDescription}
                    </p>
                  </div>

                  <Link
                    to={`/products/${category.slug}`}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-forest hover:text-white bg-leaf-tint hover:bg-forest px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>VIEW ALL</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </div>

                {/* Special Raw Leaf Notice */}
                {isRawLeaf && (
                  <div className="mb-3.5 flex items-start gap-2 bg-amber-50 border border-amber-200/80 text-earth-dark rounded-xl px-3.5 py-2.5 text-xs sm:text-sm">
                    <Info className="w-4 h-4 text-earth shrink-0 mt-0.5" />
                    <p className="font-medium">
                      Availability and rates may vary. Please contact us for current details.
                    </p>
                  </div>
                )}

                {/* 2-Column Mobile / 3-Column Tablet & Desktop Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-4 md:gap-5">
                  {items.map((product, idx) => (
                    <div
                      key={product.id}
                      className={idx === 2 ? 'hidden md:block h-full' : 'h-full'}
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =======================================================
          10. SHORT ABOUT BHAGYA SECTION
         ======================================================= */}
      <section className="py-10 sm:py-14 px-3 sm:px-6 bg-white border-y border-forest/10 mt-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-leaf-tint/60 border border-forest/10 p-4 sm:p-6 flex flex-col items-center">
              <img
                src="/leaf-opt/bhagya-logo-hero.webp"
                alt="BHAGYA Nature-Friendly Tableware Heritage Logo"
                loading="lazy"
                className="w-40 sm:w-48 h-auto object-contain"
              />
              <div className="mt-4 w-full rounded-xl overflow-hidden border border-forest/10 bg-white">
                <img
                  src="/leaf-opt/sri-2639.webp"
                  alt="Full collection of BHAGYA traditional leaf plates"
                  loading="lazy"
                  className="w-full h-36 sm:h-44 object-contain p-2"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf">
              <Leaf className="w-3.5 h-3.5" />
              About BHAGYA
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-dark leading-tight">
              Rooted in Tradition. Inspired by Nature.
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              <strong>BHAGYA Nature-Friendly Tableware</strong> was inspired by a loving
              grandmother named Bhagya, who spent her days crafting traditional leaf plates
              (<em>Vistarakulu / Vistaraku / Vistrakulu</em>) with care and devotion. Her hands
              turned simple forest leaves into biodegradable plates carrying the warmth of
              tradition and the wisdom of nature.
            </p>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Based in Nizamabad, Telangana, we supply authentic brown board buff plates, white
              board buff plates, traditional sitting plates (Pulla Kuttu and Machine Stitching),
              cups, bowls, and raw forest leaves for weddings, temples, caterers, and families.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-cream hover:bg-beige text-forest-dark font-semibold text-sm px-5 py-2.5 rounded-xl border border-forest/15 transition-colors"
              >
                <span>Browse Full Catalogue</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================
          11. TRIBAL WOMEN EMPOWERMENT
         ======================================================= */}
      <section className="py-10 sm:py-14 px-3 sm:px-6 bg-forest-dark text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf-light">
                <Award className="w-4 h-4" />
                Artisan Livelihoods
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-tight">
                Empowering Women. Preserving Nature.
              </h2>
              <p className="text-sm sm:text-base text-cream/90 leading-relaxed">
                Behind every natural leaf plate is a story of traditional craftsmanship, dedication,
                and hard work. BHAGYA celebrates the skills and contributions of rural and tribal
                women while supporting nature-friendly livelihoods.
              </p>
              <p className="text-sm text-cream/75 leading-relaxed">
                From sustainably gathering broad leaves in forest canopies to carefully hand-stitching
                and molding sturdy tableware, women artisans preserve an eco-friendly tradition
                passed down through generations.
              </p>
              <div className="pt-2">
                <Link
                  to="/women-empowerment"
                  className="inline-flex items-center gap-2 bg-white hover:bg-cream text-forest-dark font-bold text-sm px-5 py-3 rounded-xl shadow-sm transition-colors"
                >
                  <span>Discover Their Craft & Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-lg aspect-[4/3]">
                <img
                  src="/leaf-opt/xhkqrkmsdfpoluteo9go.webp"
                  alt="Tribal woman sustainably harvesting broad forest leaves"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/15 shadow-lg aspect-[4/3]">
                <img
                  src="/leaf-opt/story-photos-default-21.webp"
                  alt="Women artisans proudly holding freshly stitched green leaf plates"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="col-span-2 rounded-2xl overflow-hidden border border-white/15 shadow-lg aspect-[16/9]">
                <img
                  src="/leaf-opt/aesa-blog-204-1pic-edited-990x611.webp"
                  alt="Group of women collecting natural Siali leaves in the forest"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================
          12. WHY CHOOSE BHAGYA
         ======================================================= */}
      <section className="py-10 sm:py-14 px-3 sm:px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-leaf">
              The BHAGYA Promise
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-dark mt-1">
              Why Choose BHAGYA
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Authentic traditional Indian leaf tableware crafted for modern gatherings, functions,
              and everyday nature-friendly dining.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {whyChooseFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="bg-white rounded-2xl p-5 border border-forest/10 shadow-subtle hover:shadow-card transition-shadow flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-leaf-tint text-forest flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-forest-dark">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =======================================================
          13. CRAFTSMANSHIP / MANUFACTURING
         ======================================================= */}
      <section className="py-10 sm:py-14 px-3 sm:px-6 bg-white border-y border-forest/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-leaf">
                Process & Heritage
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-dark mt-1">
                From Natural Leaves to Traditional Tableware
              </h2>
            </div>
            <Link
              to="/craftsmanship"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-forest hover:text-forest-dark shrink-0"
            >
              <span>See Full Process</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {craftsmanshipSteps.map((item) => (
              <div
                key={item.step}
                className="bg-cream rounded-2xl overflow-hidden border border-forest/10 flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-forest text-white text-xs font-heading font-bold px-2.5 py-1 rounded-lg shadow-xs">
                    Step {item.step}
                  </span>
                </div>
                <div className="p-4 flex-1">
                  <h3 className="font-heading font-bold text-sm sm:text-base text-forest-dark">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          14. BUSINESS GALLERY PREVIEW
         ======================================================= */}
      <section className="py-10 sm:py-14 px-3 sm:px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between gap-3 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf">
                <ImageIcon className="w-3.5 h-3.5" />
                Real Business Photographs
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-dark mt-1">
                BHAGYA Gallery
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-forest bg-white hover:bg-forest hover:text-white px-4 py-2 rounded-full border border-forest/15 transition-colors shrink-0"
            >
              <span>Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4">
            {galleryPreview.map((img) => (
              <Link
                key={img.label}
                to="/gallery"
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-forest/10 shadow-subtle"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3">
                  <span className="text-white text-xs sm:text-sm font-semibold">{img.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =======================================================
          15. CONTACT SECTION
         ======================================================= */}
      <section className="py-10 sm:py-14 px-3 sm:px-6 bg-white border-t border-forest/10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-forest to-forest-dark rounded-3xl p-6 sm:p-10 text-white shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-leaf-light">
                Direct Wholesale & Bulk Enquiries
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl leading-tight">
                Need Leaf Plates for Your Function or Business?
              </h2>
              <p className="text-sm text-cream/85 leading-relaxed">
                Contact BHAGYA Nature-Friendly Tableware in Nizamabad, Telangana directly via
                WhatsApp or phone for product availability, custom quantities, and quotations.
              </p>
              <div className="flex items-start gap-2 text-xs sm:text-sm text-cream/80 pt-1">
                <MapPin className="w-4 h-4 text-leaf-light shrink-0 mt-0.5" />
                <span>6-21-9/2, Dubba, Nizamabad, Telangana, 503001, India.</span>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-3">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-3.5 px-5 rounded-xl shadow-md transition-all text-sm sm:text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>WhatsApp {WHATSAPP_DISPLAY}</span>
              </a>

              <a
                href={`tel:${PHONE_DISPLAY}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-5 rounded-xl border border-white/20 transition-all text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>

              <Link
                to="/contact"
                className="text-center text-xs font-semibold text-cream/80 hover:text-white underline underline-offset-4 mt-1"
              >
                View Full Address & Location Details →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
