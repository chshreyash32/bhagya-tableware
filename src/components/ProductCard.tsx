import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, MessageCircle, Info } from 'lucide-react';
import { Product, buildWhatsAppLink } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappUrl = buildWhatsAppLink(product.name);

  return (
    <article className="group bg-white rounded-2xl border border-forest/10 shadow-subtle hover:shadow-card hover:border-forest/25 transition-all duration-200 flex flex-col overflow-hidden h-full">
      {/* Product Image Area — Amazon-style clean white frame, object-fit: contain */}
      <Link
        to={`/products/${product.id}`}
        className="relative block bg-white aspect-[4/3] sm:aspect-square p-2.5 sm:p-4 overflow-hidden border-b border-stone-100"
      >
        <img
          src={product.thumbnail}
          alt={`${product.name} - BHAGYA Nature-Friendly Tableware`}
          loading="lazy"
          className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-300"
        />

        {/* Size Pill Badge */}
        <span className="absolute top-2 left-2 bg-forest/90 backdrop-blur-xs text-white text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full shadow-xs">
          {product.size}
        </span>

        {/* Stitching Badge (if applicable) */}
        {product.stitchingType && (
          <span
            className={`absolute bottom-2 right-2 text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full shadow-xs border ${
              product.stitchingType === 'Pulla Kuttu'
                ? 'bg-amber-50 text-earth-dark border-amber-200'
                : product.stitchingType === 'Machine Stitching'
                ? 'bg-leaf-tint text-forest-dark border-leaf/30'
                : 'bg-cream text-forest border-forest/15'
            }`}
          >
            {product.stitchingType}
          </span>
        )}
      </Link>

      {/* Product Information Body */}
      <div className="p-2.5 sm:p-3.5 flex flex-col flex-1 justify-between gap-2.5">
        <div>
          {/* Category Label */}
          <p className="text-[10px] sm:text-[11px] font-semibold text-leaf uppercase tracking-wider truncate">
            {product.categoryName}
          </p>

          {/* Product Name */}
          <Link to={`/products/${product.id}`}>
            <h3 className="font-heading font-bold text-xs sm:text-sm md:text-base text-forest-dark group-hover:text-forest leading-snug mt-0.5 line-clamp-2 min-h-[2.25rem] sm:min-h-[2.6rem]">
              {product.name}
            </h3>
          </Link>

          {/* Specification */}
          <p className="text-[11px] sm:text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
            {product.specification}
          </p>

          {/* Raw Leaf Notice (only for raw leaf category) */}
          {product.isRawLeaf && (
            <div className="mt-1.5 flex items-start gap-1 text-[10px] text-earth-dark bg-amber-50/80 border border-amber-200/70 rounded-lg px-2 py-1 leading-tight">
              <Info className="w-3 h-3 shrink-0 mt-0.5 text-earth" />
              <span>Availability varies. Contact for current details.</span>
            </div>
          )}
        </div>

        {/* Action Buttons: View Details + WhatsApp Enquiry */}
        <div className="flex flex-col gap-1.5 pt-1">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5d] active:scale-[0.98] text-white font-semibold text-[11px] sm:text-xs py-2 sm:py-2.5 px-2.5 rounded-xl shadow-xs transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 fill-white text-[#25D366]" />
            <span className="truncate">WhatsApp Enquiry</span>
          </a>

          <Link
            to={`/products/${product.id}`}
            className="w-full inline-flex items-center justify-center gap-1 bg-cream hover:bg-beige/70 active:scale-[0.98] text-forest-dark font-semibold text-[11px] sm:text-xs py-1.5 sm:py-2 px-2.5 rounded-xl border border-forest/15 transition-colors"
          >
            <Eye className="w-3.5 h-3.5 shrink-0 text-forest" />
            <span>View Details</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
