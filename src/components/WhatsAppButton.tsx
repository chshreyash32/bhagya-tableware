import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../data/products';

interface WhatsAppButtonProps {
  productName?: string;
  label?: string;
  variant?: 'primary' | 'compact' | 'outline' | 'icon';
  className?: string;
  fullWidth?: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  productName,
  label = 'Enquire on WhatsApp',
  variant = 'primary',
  className = '',
  fullWidth = false,
}) => {
  const href = buildWhatsAppLink(productName);

  if (variant === 'icon') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={productName ? `WhatsApp enquiry for ${productName}` : 'WhatsApp Enquiry'}
        className={`inline-flex items-center justify-center rounded-full bg-[#25D366] text-white p-2 shadow-sm hover:bg-[#1ebe5d] active:scale-95 transition-all ${className}`}
      >
        <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
      </a>
    );
  }

  const baseStyles =
    'inline-flex items-center justify-center gap-1.5 font-medium rounded-xl transition-all active:scale-[0.98] cursor-pointer select-none';

  const variantStyles = {
    primary:
      'bg-[#25D366] hover:bg-[#1fb85a] text-white shadow-sm px-4 py-3 text-sm font-semibold',
    compact:
      'bg-[#244C36] hover:bg-[#183D2B] text-white px-2.5 py-2 text-xs font-semibold shadow-xs',
    outline:
      'border border-[#244C36] text-[#244C36] hover:bg-[#244C36] hover:text-white px-3.5 py-2.5 text-sm font-semibold',
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <MessageCircle
        className={variant === 'compact' ? 'w-3.5 h-3.5 shrink-0' : 'w-4 h-4 shrink-0'}
        strokeWidth={2.3}
      />
      <span className="truncate">{label}</span>
    </a>
  );
};
