import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ChevronRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Leaf,
  Maximize2,
  Info,
  ArrowLeft,
} from 'lucide-react';
import { PRODUCTS, PHONE_DISPLAY, buildWhatsAppLink } from '../data/products';
import { ProductGrid } from '../components/ProductGrid';
import { ImageModal } from '../components/ImageModal';

export const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();

  const product = useMemo(
    () => PRODUCTS.find((p) => p.id === productId),
    [productId]
  );

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    setActiveImageIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId]);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-heading font-bold text-2xl text-forest-dark">Product Not Found</h1>
        <p className="text-sm text-stone-600 mt-2 max-w-md">
          The product you are looking for could not be found. Browse our complete catalogue of
          traditional biodegradable leaf tableware.
        </p>
        <Link
          to="/products"
          className="mt-5 inline-flex items-center gap-2 bg-forest text-white font-semibold px-5 py-2.5 rounded-xl text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Products</span>
        </Link>
      </div>
    );
  }

  const galleryImages = product.gallery.length > 0 ? product.gallery : [product.image];
  const currentImage = galleryImages[activeImageIndex] || product.image;

  const relatedProducts = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.id !== product.id
  ).slice(0, 4);

  const lightboxItems = galleryImages.map((src, idx) => ({
    src,
    alt: `${product.name} - View ${idx + 1}`,
    caption: `${product.name} (${product.size}) — ${product.specification}`,
    category: product.categoryName,
  }));

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs text-stone-500 mb-4 overflow-x-auto no-scrollbar whitespace-nowrap"
        >
          <Link to="/" className="hover:text-forest">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link to="/products" className="hover:text-forest">
            Products
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <Link to={`/products/${product.categorySlug}`} className="hover:text-forest">
            {product.categoryName}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 shrink-0" />
          <span className="font-semibold text-forest-dark truncate">{product.name}</span>
        </nav>

        {/* Main Product Panel */}
        <div className="bg-white rounded-3xl border border-forest/10 shadow-subtle overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 p-4 sm:p-6 md:p-8">
            {/* Left Column: Image Gallery */}
            <div className="lg:col-span-6 space-y-3">
              {/* Primary Image Box */}
              <div className="relative bg-white rounded-2xl border border-stone-200/80 aspect-[4/3] sm:aspect-square flex items-center justify-center p-4 overflow-hidden group">
                <img
                  src={currentImage}
                  alt={`${product.name} - BHAGYA Nature-Friendly Tableware`}
                  className="w-full h-full object-contain cursor-zoom-in transition-transform duration-300 group-hover:scale-[1.02]"
                  onClick={() => setLightboxOpen(true)}
                />

                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-forest-dark/80 hover:bg-forest-dark text-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-xs transition-colors"
                  aria-label="View full screen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Zoom</span>
                </button>

                <span className="absolute top-3 left-3 bg-forest text-white text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  {product.size}
                </span>
              </div>

              {/* Thumbnail Strip */}
              {galleryImages.length > 1 && (
                <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1">
                  {galleryImages.map((imgSrc, index) => (
                    <button
                      key={`${imgSrc}-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 p-1 bg-white shrink-0 overflow-hidden transition-all ${
                        activeImageIndex === index
                          ? 'border-forest shadow-xs scale-[1.02]'
                          : 'border-stone-200 hover:border-forest/40 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Specifications & Enquiry */}
            <div className="lg:col-span-6 flex flex-col justify-between pt-5 lg:pt-2 space-y-5">
              <div className="space-y-4">
                <div>
                  <Link
                    to={`/products/${product.categorySlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf hover:underline"
                  >
                    <Leaf className="w-3.5 h-3.5" />
                    <span>{product.categoryName}</span>
                  </Link>

                  <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-dark mt-1 leading-tight">
                    {product.name}
                  </h1>

                  <p className="text-sm sm:text-base font-medium text-earth-dark mt-1">
                    {product.specification}
                  </p>
                </div>

                {/* Spec Badges */}
                <div className="flex flex-wrap gap-2">
                  <div className="bg-cream border border-forest/15 rounded-xl px-3.5 py-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                      Size / Unit
                    </span>
                    <span className="text-sm font-bold text-forest-dark">{product.size}</span>
                  </div>

                  {product.stitchingType && (
                    <div className="bg-leaf-tint border border-leaf/25 rounded-xl px-3.5 py-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-forest/70 block">
                        Craft / Stitching
                      </span>
                      <span className="text-sm font-bold text-forest-dark">
                        {product.stitchingType}
                      </span>
                    </div>
                  )}

                  <div className="bg-cream border border-forest/15 rounded-xl px-3.5 py-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                      Material
                    </span>
                    <span className="text-sm font-bold text-forest-dark">100% Natural Leaf</span>
                  </div>
                </div>

                {/* Mandatory Raw Leaf Availability Notice */}
                {product.isRawLeaf && (
                  <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 text-earth-dark rounded-xl p-3.5 text-xs sm:text-sm">
                    <Info className="w-4 h-4 text-earth shrink-0 mt-0.5" />
                    <p className="font-semibold">
                      Availability and rates may vary. Please contact us for current details.
                    </p>
                  </div>
                )}

                {/* Product Description */}
                <div className="pt-1">
                  <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-forest-dark mb-1.5">
                    Product Overview
                  </h2>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2 pt-1">
                  <h2 className="font-heading font-bold text-sm uppercase tracking-wider text-forest-dark">
                    Key Highlights
                  </h2>
                  <ul className="space-y-2">
                    {product.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-sm text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Enquiry Action Box — NO PRICES, WHATSAPP ONLY */}
              <div className="bg-cream rounded-2xl border border-forest/15 p-4 sm:p-5 space-y-3">
                <p className="text-xs font-medium text-stone-600">
                  Direct wholesale & retail enquiry from BHAGYA Nature-Friendly Tableware,
                  Nizamabad, Telangana:
                </p>

                <div className="flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={buildWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] active:scale-[0.99] text-white font-bold py-3.5 px-5 rounded-xl shadow-sm transition-all text-sm sm:text-base"
                  >
                    <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                    <span>Enquire on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${PHONE_DISPLAY}`}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-beige/40 text-forest-dark font-bold py-3.5 px-5 rounded-xl border border-forest/20 transition-colors text-sm"
                  >
                    <Phone className="w-4 h-4 text-forest" />
                    <span>Call {PHONE_DISPLAY}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-10 sm:mt-12">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading font-bold text-lg sm:text-2xl text-forest-dark">
                More in {product.categoryName}
              </h2>
              <Link
                to={`/products/${product.categorySlug}`}
                className="text-xs sm:text-sm font-bold text-forest hover:underline"
              >
                View All →
              </Link>
            </div>
            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>

      {/* Fullscreen Lightbox */}
      {lightboxOpen && (
        <ImageModal
          items={lightboxItems}
          currentIndex={activeImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setActiveImageIndex}
        />
      )}
    </div>
  );
};
