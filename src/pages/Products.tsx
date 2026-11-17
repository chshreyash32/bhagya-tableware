import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Info, Filter, MessageCircle } from 'lucide-react';
import { CategoryNavigation } from '../components/CategoryNavigation';
import { SearchBar } from '../components/SearchBar';
import { ProductGrid } from '../components/ProductGrid';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS, buildWhatsAppLink } from '../data/products';

interface ProductsPageProps {
  categorySlug?: string;
}

export const Products: React.FC<ProductsPageProps> = ({ categorySlug }) => {
  const [stitchFilter, setStitchFilter] = useState<string>('All');

  // Reset stitching filter when category changes
  useEffect(() => {
    setStitchFilter('All');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [categorySlug]);

  const activeCategory = useMemo(
    () => CATEGORIES.find((c) => c.slug === categorySlug),
    [categorySlug]
  );

  const categoryProducts = useMemo(() => {
    if (!categorySlug) return PRODUCTS;
    return PRODUCTS.filter((p) => p.categorySlug === categorySlug);
  }, [categorySlug]);

  const availableStitchTypes = useMemo(() => {
    const types = new Set<string>();
    categoryProducts.forEach((p) => {
      if (p.stitchingType) types.add(p.stitchingType);
    });
    return ['All', ...Array.from(types)];
  }, [categoryProducts]);

  const filteredProducts = useMemo(() => {
    if (stitchFilter === 'All') return categoryProducts;
    return categoryProducts.filter((p) => p.stitchingType === stitchFilter);
  }, [categoryProducts, stitchFilter]);

  return (
    <div className="min-h-screen bg-cream">
      {/* Search Bar */}
      <div className="bg-white border-b border-forest/10 px-3 sm:px-6 py-2.5">
        <div className="max-w-7xl mx-auto">
          <SearchBar placeholder="Search products, sizes, Pulla Kuttu, Machine Stitching..." />
        </div>
      </div>

      {/* Category Chips */}
      <CategoryNavigation activeSlug={categorySlug} />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-5 sm:py-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-stone-500 mb-3">
          <Link to="/" className="hover:text-forest">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          {activeCategory ? (
            <>
              <Link to="/products" className="hover:text-forest">
                Products
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="font-semibold text-forest-dark">{activeCategory.name}</span>
            </>
          ) : (
            <span className="font-semibold text-forest-dark">All Products</span>
          )}
        </nav>

        {/* Category / Catalogue Header Banner */}
        <div className="bg-white rounded-2xl border border-forest/10 p-4 sm:p-6 mb-5 shadow-subtle">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-8">
              <span className="text-[11px] font-bold uppercase tracking-widest text-leaf">
                BHAGYA Tableware Catalogue
              </span>
              <h1 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-forest-dark mt-0.5">
                {activeCategory ? activeCategory.name : 'Complete Product Catalogue'}
              </h1>
              <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed max-w-2xl">
                {activeCategory
                  ? activeCategory.description
                  : 'Explore all 25 traditional biodegradable Indian leaf plates (Vistarakulu), brown & white board buff plates, sitting plates, cups, bowls, and raw forest leaves. Select any product for direct WhatsApp enquiry.'}
              </p>
            </div>
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <img
                src={activeCategory ? activeCategory.image : '/leaf-opt/sri-2639.webp'}
                alt={activeCategory ? activeCategory.name : 'BHAGYA Leaf Plate Collection'}
                className="h-24 sm:h-32 w-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Mandatory Raw Leaf Notice */}
          {categorySlug === 'raw-leaf' && (
            <div className="mt-4 flex items-start gap-2.5 bg-amber-50 border border-amber-200 text-earth-dark rounded-xl px-4 py-3 text-xs sm:text-sm">
              <Info className="w-4 h-4 text-earth shrink-0 mt-0.5" />
              <p className="font-semibold">
                Availability and rates may vary. Please contact us for current details.
              </p>
            </div>
          )}
        </div>

        {/* Stitching / Type Filter Bar */}
        {availableStitchTypes.length > 2 && (
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-3">
            <div className="inline-flex items-center gap-1 text-xs font-semibold text-stone-500 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-forest" />
              <span>Filter:</span>
            </div>
            {availableStitchTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setStitchFilter(type)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shrink-0 transition-all border ${
                  stitchFilter === type
                    ? 'bg-forest text-white border-forest shadow-xs'
                    : 'bg-white text-forest-dark border-stone-200 hover:border-forest/30'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        {/* Result Count */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs sm:text-sm font-medium text-stone-600">
            Showing <strong className="text-forest-dark">{filteredProducts.length}</strong>{' '}
            {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        {/* Amazon-Style Product Grid */}
        <ProductGrid products={filteredProducts} />

        {/* Bottom Category WhatsApp CTA */}
        <div className="mt-10 bg-leaf-tint/70 border border-forest/15 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h2 className="font-heading font-bold text-base sm:text-lg text-forest-dark">
              Looking for Bulk Quantities or Custom Orders?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
              Send us a quick WhatsApp message for instant product availability and quotations.
            </p>
          </div>
          <a
            href={buildWhatsAppLink(activeCategory ? activeCategory.name : 'Bulk Leaf Plates')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-5 py-3 rounded-xl shadow-xs shrink-0 w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
