import React from 'react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, className = '' }) => {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-forest/10 p-8 text-center">
        <p className="font-heading font-semibold text-forest-dark">No products found</p>
        <p className="text-sm text-stone-500 mt-1">
          Try clearing your filters or searching for another size or category.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 md:gap-5 ${className}`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
