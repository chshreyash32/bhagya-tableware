import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxItem {
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}

interface ImageModalProps {
  items: LightboxItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const current = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && items.length > 1) {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === 'ArrowRight' && items.length > 1) {
        onNavigate((currentIndex + 1) % items.length);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex flex-col items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="w-full max-w-5xl flex items-center justify-between text-white pb-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xs sm:text-sm font-medium text-white/80">
          {currentIndex + 1} / {items.length}
          {current.category && (
            <span className="ml-2 px-2 py-0.5 rounded-full bg-white/15 text-xs">
              {current.category}
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
          aria-label="Close preview"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Frame */}
      <div
        className="relative w-full max-w-5xl flex-1 flex items-center justify-center min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        {items.length > 1 && (
          <button
            type="button"
            onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
            className="absolute left-1 sm:left-2 z-10 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}

        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[75vh] max-w-full object-contain rounded-xl bg-white/5 shadow-2xl"
        />

        {items.length > 1 && (
          <button
            type="button"
            onClick={() => onNavigate((currentIndex + 1) % items.length)}
            className="absolute right-1 sm:right-2 z-10 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        )}
      </div>

      {/* Caption */}
      {current.caption && (
        <div
          className="w-full max-w-3xl text-center pt-3 px-4"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-white text-sm sm:text-base font-medium">{current.caption}</p>
        </div>
      )}
    </div>
  );
};
