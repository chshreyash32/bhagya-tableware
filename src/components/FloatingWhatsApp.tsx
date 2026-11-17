import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../data/products';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BHAGYA on WhatsApp"
      className="fixed bottom-20 right-3.5 lg:bottom-6 lg:right-6 z-40 group flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full p-3 lg:px-5 lg:py-3.5 shadow-float active:scale-95 transition-all"
    >
      <MessageCircle className="w-6 h-6 fill-white text-[#25D366]" />
      <span className="hidden lg:inline font-heading font-semibold text-sm tracking-wide">
        WhatsApp Enquiry
      </span>
    </a>
  );
};
