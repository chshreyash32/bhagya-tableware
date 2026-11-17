import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CATEGORIES } from '../data/categories';

interface CategoryNavigationProps {
  activeSlug?: string;
  className?: string;
}

export const CategoryNavigation: React.FC<CategoryNavigationProps> = ({
  activeSlug,
  className = '',
}) => {
  const location = useLocation();

  return (
    <div className={`w-full bg-white/80 backdrop-blur-xs border-b border-forest/10 py-2.5 sm:py-3.5 ${className}`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar scroll-smooth py-0.5">
          {/* "All" chip option */}
          <Link
            to="/products"
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all border select-none ${
              location.pathname === '/products' && !activeSlug
                ? 'bg-forest text-white border-forest shadow-xs'
                : 'bg-cream/90 hover:bg-beige/60 text-forest-dark border-forest/15'
            }`}
          >
            <span>All Products</span>
            <span className="text-[10px] px-1.5 py-0.2 bg-black/10 rounded-full">25</span>
          </Link>

          {/* 5 Distinct Product Categories */}
          {CATEGORIES.map((category) => {
            const isCategoryActive =
              activeSlug === category.slug ||
              location.pathname === `/products/${category.slug}`;

            return (
              <Link
                key={category.id}
                to={`/products/${category.slug}`}
                className={`inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all border select-none ${
                  isCategoryActive
                    ? 'bg-forest text-white border-forest shadow-xs'
                    : 'bg-white hover:bg-cream text-forest-dark border-stone-200 hover:border-forest/30'
                }`}
              >
                {/* Category Thumbnail */}
                <img
                  src={category.thumbnail}
                  alt={category.name}
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-full object-contain bg-cream border border-forest/15 shrink-0"
                  loading="lazy"
                />
                <span className="truncate">{category.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                    isCategoryActive
                      ? 'bg-white/20 text-white'
                      : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {category.itemCount}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
