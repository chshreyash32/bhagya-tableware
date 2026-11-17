import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Search, X, ChevronRight, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { PRODUCTS, Product } from '../data/products';

interface SearchBarProps {
  autoFocus?: boolean;
  placeholder?: string;
  onSelect?: () => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  autoFocus = false,
  placeholder = 'Search plates, sizes (12", 14"), Pulla Kuttu...',
  onSelect,
  className = '',
}) => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    // Clean numeric query e.g. "12", "14"
    const numericMatch = q.replace(/[^0-9]/g, '');

    return PRODUCTS.filter((product) => {
      const name = product.name.toLowerCase();
      const cat = product.categoryName.toLowerCase();
      const spec = product.specification.toLowerCase();
      const desc = product.description.toLowerCase();
      const stitch = (product.stitchingType || '').toLowerCase();
      const size = product.size.toLowerCase();

      // Check standard keywords
      if (
        name.includes(q) ||
        cat.includes(q) ||
        spec.includes(q) ||
        desc.includes(q) ||
        stitch.includes(q) ||
        size.includes(q)
      ) {
        return true;
      }

      // Check numeric size search e.g. "12", "14", "16"
      if (numericMatch && (size.includes(numericMatch) || name.includes(numericMatch))) {
        return true;
      }

      // Traditional synonyms: "vistaraku", "vistarakulu", "buff", "sitting"
      if (
        (q.includes('vist') || q.includes('leaf') || q.includes('plate')) &&
        (product.categorySlug === 'sitting-plates' || product.categorySlug === 'brown-board-plates')
      ) {
        return true;
      }

      return false;
    });
  }, [query]);

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
    inputRef.current?.focus();
  };

  const handleSelectProduct = (product: Product) => {
    setIsOpen(false);
    setQuery('');
    if (onSelect) onSelect();
    navigate(`/products/${product.id}`);
  };

  const popularSearches = [
    '12 Inch Buff',
    '14 Inch Sitting',
    'Pulla Kuttu',
    'Machine Stitching',
    'White Buff',
    'Cups & Bowls',
    'Raw Leaf',
  ];

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Search Input Box */}
      <div className="relative flex items-center w-full">
        <div className="absolute left-3.5 pointer-events-none text-forest/60">
          <Search className="w-4 h-4" />
        </div>
        <input
          ref={inputRef}
          type="search"
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-9 py-2.5 sm:py-3 text-sm sm:text-base bg-white rounded-full border border-forest/15 shadow-subtle text-forest-dark placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-forest/25 focus:border-forest transition-all"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 p-1 rounded-full text-stone-400 hover:text-forest hover:bg-stone-100 transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-float border border-forest/10 overflow-hidden z-50 max-h-[80vh] overflow-y-auto">
          {query.trim() === '' ? (
            <div className="p-4">
              <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-forest/70 mb-2.5">
                <Sparkles className="w-3.5 h-3.5 text-leaf" />
                Popular Searches
              </div>
              <div className="flex flex-wrap gap-1.5">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => {
                      setQuery(term);
                      setIsOpen(true);
                    }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-cream text-forest-dark hover:bg-leaf/15 hover:text-forest transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className="py-2 divide-y divide-stone-100">
              <div className="px-4 py-2 text-xs font-medium text-stone-500 bg-stone-50/70">
                Found {results.length} matching {results.length === 1 ? 'product' : 'products'}
              </div>
              {results.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => handleSelectProduct(product)}
                  className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-cream/60 transition-colors group"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.name}
                    className="w-12 h-12 rounded-lg object-contain bg-white border border-stone-100 p-0.5 shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-sm font-semibold text-forest-dark group-hover:text-forest truncate">
                        {product.name}
                      </span>
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-forest/10 text-forest font-medium">
                        {product.size}
                      </span>
                      {product.stitchingType && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-leaf/15 text-leaf-dark font-medium">
                          {product.stitchingType}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-500 truncate mt-0.5">
                      {product.categoryName} • {product.specification}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-forest shrink-0 transition-transform group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-2">
                <Search className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-forest-dark">No products found for "{query}"</p>
              <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                Try searching for sizes like <span className="font-medium text-forest">12 Inch</span>, <span className="font-medium text-forest">Pulla Kuttu</span>, or browse our categories.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-1.5">
                {popularSearches.slice(0, 4).map((term) => (
                  <button
                    key={term}
                    type="button"
                    onClick={() => setQuery(term)}
                    className="px-2.5 py-1 rounded-full text-xs font-medium bg-cream text-forest hover:bg-leaf/15"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
