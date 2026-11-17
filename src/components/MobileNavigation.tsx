import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, Info, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../data/products';

export const MobileNavigation: React.FC = () => {
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isProducts = location.pathname.startsWith('/products');
  const isAbout = location.pathname === '/about' || location.pathname === '/women-empowerment' || location.pathname === '/craftsmanship';

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-forest/15 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="grid grid-cols-4 h-16 max-w-md mx-auto">
        <Link
          to="/"
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            isHome ? 'text-forest font-semibold' : 'text-stone-500 hover:text-forest'
          }`}
        >
          <Home className={`w-5 h-5 ${isHome ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          <span className="text-[11px] leading-none">Home</span>
        </Link>

        <Link
          to="/products"
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            isProducts ? 'text-forest font-semibold' : 'text-stone-500 hover:text-forest'
          }`}
        >
          <LayoutGrid className={`w-5 h-5 ${isProducts ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          <span className="text-[11px] leading-none">Products</span>
        </Link>

        <Link
          to="/about"
          className={`flex flex-col items-center justify-center gap-1 transition-colors ${
            isAbout ? 'text-forest font-semibold' : 'text-stone-500 hover:text-forest'
          }`}
        >
          <Info className={`w-5 h-5 ${isAbout ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
          <span className="text-[11px] leading-none">About</span>
        </Link>

        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[#1ca850] font-semibold"
        >
          <div className="bg-[#25D366]/15 p-1 rounded-full">
            <MessageCircle className="w-5 h-5 fill-[#25D366] text-[#25D366]" />
          </div>
          <span className="text-[11px] leading-none">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
};
