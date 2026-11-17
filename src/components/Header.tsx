import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Phone, ChevronRight, MessageCircle } from 'lucide-react';
import { SearchBar } from './SearchBar';
import { CATEGORIES } from '../data/categories';
import { WHATSAPP_DISPLAY, PHONE_DISPLAY, buildWhatsAppLink } from '../data/products';

export const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'All Products', path: '/products' },
    { label: 'Women Empowerment', path: '/women-empowerment' },
    { label: 'Craftsmanship', path: '/craftsmanship' },
    { label: 'About Us', path: '/about' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-forest/10 shadow-xs">
        {/* Top utility bar on desktop */}
        <div className="hidden md:block bg-forest-dark text-cream text-xs py-1.5 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="font-medium tracking-wide">
              Traditional Indian Leaf Tableware (Vistarakulu) • Nizamabad, Telangana
            </span>
            <div className="flex items-center gap-6">
              <a
                href={`tel:${PHONE_DISPLAY}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-leaf-light" />
                <span>+91 {PHONE_DISPLAY}</span>
              </a>
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Header Container */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-3">
            {/* Left: BHAGYA Original Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 sm:gap-3 py-1 group shrink-0"
              aria-label="BHAGYA Nature-Friendly Tableware Home"
            >
              <img
                src="/leaf-opt/bhagya-logo-hero.webp"
                alt="BHAGYA Nature-Friendly Tableware"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                style={{ aspectRatio: 'auto' }}
              />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base sm:text-xl tracking-tight text-forest-dark group-hover:text-forest leading-none">
                  BHAGYA
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-leaf-dark uppercase tracking-widest leading-tight mt-0.5">
                  Nature-Friendly Tableware
                </span>
              </div>
            </Link>

            {/* Desktop Center Navigation */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-forest-dark">
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`transition-colors py-1 relative ${
                      isActive
                        ? 'text-forest font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-forest'
                        : 'hover:text-forest'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Icons: Search, WhatsApp, Menu */}
            <div className="flex items-center gap-1.5 sm:gap-2.5">
              {/* Search Toggle Button */}
              <button
                type="button"
                onClick={() => setIsSearchOpen((prev) => !prev)}
                className={`p-2 sm:p-2.5 rounded-full text-forest-dark hover:bg-cream active:scale-95 transition-all ${
                  isSearchOpen ? 'bg-cream text-forest' : ''
                }`}
                aria-label="Toggle search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Direct WhatsApp Action Button */}
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Enquire on WhatsApp"
                className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba57] text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-xs active:scale-95 transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Mobile / Tablet Menu Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 sm:p-2.5 rounded-full text-forest-dark hover:bg-cream active:scale-95 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Collapsible Search Drawer / Bar */}
          {isSearchOpen && (
            <div className="pb-3 pt-1 animate-fadeIn">
              <SearchBar autoFocus onSelect={() => setIsSearchOpen(false)} />
            </div>
          )}
        </div>
      </header>

      {/* Mobile Sidebar / Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={closeMenu}
          />

          {/* Drawer Content */}
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto z-10">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <img
                    src="/leaf-opt/bhagya-logo-hero.webp"
                    alt="BHAGYA"
                    className="h-10 w-auto object-contain"
                  />
                  <div className="flex flex-col">
                    <span className="font-heading font-bold text-forest-dark text-sm">BHAGYA</span>
                    <span className="text-[9px] text-leaf uppercase tracking-wider">
                      Nature-Friendly
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="p-2 rounded-full text-stone-500 hover:bg-stone-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Search inside menu */}
              <div className="p-4 border-b border-stone-100">
                <SearchBar onSelect={closeMenu} placeholder="Search catalogue..." />
              </div>

              {/* Product Categories Section */}
              <div className="p-4 border-b border-stone-100 bg-cream/40">
                <div className="text-[11px] font-bold uppercase tracking-wider text-forest/70 mb-2">
                  Product Categories
                </div>
                <div className="space-y-1">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/products/${cat.slug}`}
                      onClick={closeMenu}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-forest-dark hover:bg-white hover:text-forest transition-colors"
                    >
                      <span className="truncate">{cat.name}</span>
                      <span className="text-xs text-stone-400 bg-stone-100 px-2 py-0.5 rounded-full font-sans">
                        {cat.itemCount}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              <div className="p-4 space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-forest/70 mb-2">
                  Navigation
                </div>
                {navLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-stone-800 hover:bg-cream hover:text-forest transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-stone-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-stone-100 bg-stone-50 space-y-2">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 px-4 rounded-xl text-sm font-semibold shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
              <a
                href={`tel:${PHONE_DISPLAY}`}
                className="w-full flex items-center justify-center gap-2 bg-white border border-forest/20 text-forest-dark py-2.5 px-4 rounded-xl text-sm font-semibold"
              >
                <Phone className="w-4 h-4 text-forest" />
                <span>Call {PHONE_DISPLAY}</span>
              </a>
              <p className="text-[10px] text-center text-stone-400 mt-2">
                Nizamabad, Telangana, India
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
