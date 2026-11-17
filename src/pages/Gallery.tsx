import React, { useState, useMemo, useEffect } from 'react';
import {
  Image as ImageIcon,
  Maximize2,
  ClipboardCheck,
  CheckCircle2,
  FileText,
  Copy,
} from 'lucide-react';
import { IMAGE_MANIFEST, IMAGE_AUDIT_SUMMARY } from '../data/imageManifest';
import { ImageModal, LightboxItem } from '../components/ImageModal';

type GalleryTab =
  | 'All'
  | 'Products'
  | 'Traditional Craftsmanship'
  | 'Tribal Women'
  | 'Manufacturing'
  | 'Business Activities'
  | 'Natural Leaves'
  | 'Asset Inventory';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<GalleryTab>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Build gallery list from integrated unique images in IMAGE_MANIFEST
  const galleryItems = useMemo(() => {
    return IMAGE_MANIFEST.filter((entry) => entry.integrationStatus === 'Integrated').map(
      (entry) => {
        let galleryCategory: GalleryTab = 'Products';
        if (entry.category === 'Tribal Women') galleryCategory = 'Tribal Women';
        else if (entry.category === 'Craftsmanship') galleryCategory = 'Traditional Craftsmanship';
        else if (entry.category === 'Manufacturing') galleryCategory = 'Manufacturing';
        else if (
          entry.category === 'Branding & Signage' ||
          entry.category === 'Packaging' ||
          entry.category === 'Logo'
        ) {
          galleryCategory = 'Business Activities';
        } else if (entry.associatedCategory === 'Raw Leaf') {
          galleryCategory = 'Natural Leaves';
        } else {
          galleryCategory = 'Products';
        }

        const isNaturalLeafAlso =
          entry.id === 'women-wild-harvest-forest' ||
          entry.id === 'women-group-harvest' ||
          entry.id === 'women-round-cut-bundles' ||
          entry.id === 'women-hand-stitching-splints';

        const displaySrc = entry.optimizedWebpPath || entry.relativePath;
        const thumbSrc = entry.optimizedThumbPath || entry.optimizedWebpPath || entry.relativePath;

        return {
          ...entry,
          galleryCategory,
          isNaturalLeafAlso,
          displaySrc,
          thumbSrc,
        };
      }
    );
  }, []);

  const filteredItems = useMemo(() => {
    if (activeTab === 'All' || activeTab === 'Asset Inventory') return galleryItems;
    if (activeTab === 'Natural Leaves') {
      return galleryItems.filter(
        (item) => item.galleryCategory === 'Natural Leaves' || item.isNaturalLeafAlso
      );
    }
    return galleryItems.filter((item) => item.galleryCategory === activeTab);
  }, [activeTab, galleryItems]);

  const lightboxItems: LightboxItem[] = filteredItems.map((item) => ({
    src: item.displaySrc,
    alt: item.associatedProduct || item.originalFilename,
    caption: item.notes || item.associatedProduct || item.originalFilename,
    category: item.galleryCategory,
  }));

  const tabs: GalleryTab[] = [
    'All',
    'Products',
    'Traditional Craftsmanship',
    'Tribal Women',
    'Manufacturing',
    'Business Activities',
    'Natural Leaves',
    'Asset Inventory',
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header Banner */}
      <section className="bg-forest-dark text-cream py-10 sm:py-14 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf-light">
            <ImageIcon className="w-4 h-4" />
            Authentic Visual Collection
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            BHAGYA Business Gallery
          </h1>
          <p className="text-sm sm:text-base text-cream/85 max-w-2xl mx-auto">
            Explore our complete collection of real product photographs, tribal women artisans,
            traditional Pulla Kuttu & machine stitching craft, hydraulic molding, and brand heritage.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-16 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-forest/10 py-3 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all border ${
                activeTab === tab
                  ? 'bg-forest text-white border-forest shadow-xs'
                  : 'bg-cream text-forest-dark border-forest/15 hover:bg-leaf-tint'
              }`}
            >
              {tab === 'Asset Inventory' ? (
                <span className="inline-flex items-center gap-1.5">
                  <ClipboardCheck className="w-3.5 h-3.5" />
                  <span>Asset Inventory ({IMAGE_AUDIT_SUMMARY.totalFilesDiscovered})</span>
                </span>
              ) : (
                tab
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
        {activeTab === 'Asset Inventory' ? (
          /* Visual Asset Inventory & Audit Manifest Table */
          <div className="space-y-6">
            {/* Summary Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <div className="bg-white rounded-2xl p-4 border border-forest/10 text-center shadow-subtle">
                <p className="font-heading font-extrabold text-2xl text-forest-dark">
                  {IMAGE_AUDIT_SUMMARY.totalFilesDiscovered}
                </p>
                <p className="text-[11px] font-semibold text-stone-500 mt-0.5">Total Files Found</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-forest/10 text-center shadow-subtle">
                <p className="font-heading font-extrabold text-2xl text-forest">
                  {IMAGE_AUDIT_SUMMARY.uniquePhotographs}
                </p>
                <p className="text-[11px] font-semibold text-stone-500 mt-0.5">Unique Images</p>
              </div>
              <div className="bg-leaf-tint rounded-2xl p-4 border border-leaf/30 text-center shadow-subtle">
                <p className="font-heading font-extrabold text-2xl text-forest-dark">
                  {IMAGE_AUDIT_SUMMARY.integratedPhotographs}
                </p>
                <p className="text-[11px] font-semibold text-forest mt-0.5">Integrated (100%)</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-forest/10 text-center shadow-subtle">
                <p className="font-heading font-extrabold text-2xl text-amber-700">
                  {IMAGE_AUDIT_SUMMARY.exactDuplicateFiles}
                </p>
                <p className="text-[11px] font-semibold text-stone-500 mt-0.5">Exact Duplicates</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-forest/10 text-center shadow-subtle">
                <p className="font-heading font-extrabold text-2xl text-stone-700">
                  {IMAGE_AUDIT_SUMMARY.referenceDocuments}
                </p>
                <p className="text-[11px] font-semibold text-stone-500 mt-0.5">Reference Docs</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-forest/10 text-center shadow-subtle">
                <p className="font-heading font-extrabold text-2xl text-forest">
                  {IMAGE_AUDIT_SUMMARY.imagesAwaitingIdentification}
                </p>
                <p className="text-[11px] font-semibold text-stone-500 mt-0.5">Unclassified</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-forest/10 shadow-subtle overflow-hidden">
              <div className="p-4 sm:p-5 border-b border-stone-100">
                <h2 className="font-heading font-bold text-base sm:text-lg text-forest-dark">
                  Complete Local `leaf/` Asset Inventory
                </h2>
                <p className="text-xs text-stone-500 mt-0.5">{IMAGE_AUDIT_SUMMARY.notes}</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-cream text-forest-dark font-heading text-xs uppercase tracking-wider border-b border-forest/10">
                    <tr>
                      <th className="py-3 px-4">Preview</th>
                      <th className="py-3 px-4">Original Filename</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Mapped Product / Section</th>
                      <th className="py-3 px-4">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {IMAGE_MANIFEST.map((entry) => (
                      <tr key={entry.id} className="hover:bg-cream/40">
                        <td className="py-2.5 px-4">
                          {entry.integrationStatus === 'Integrated' ? (
                            <img
                              src={
                                entry.optimizedThumbPath ||
                                entry.optimizedWebpPath ||
                                entry.relativePath
                              }
                              alt={entry.originalFilename}
                              className="w-12 h-12 rounded-lg object-contain bg-white border border-stone-200 p-0.5"
                              loading="lazy"
                            />
                          ) : entry.integrationStatus === 'Duplicate Skipped' ? (
                            <div className="w-12 h-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                              <Copy className="w-4 h-4" />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-lg bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-500">
                              <FileText className="w-4 h-4" />
                            </div>
                          )}
                        </td>
                        <td className="py-2.5 px-4 font-mono text-xs text-stone-800 max-w-[220px] break-all">
                          {entry.originalFilename}
                        </td>
                        <td className="py-2.5 px-4 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-cream border border-forest/15 text-forest-dark">
                            {entry.category}
                          </span>
                        </td>
                        <td className="py-2.5 px-4 text-xs text-stone-600 max-w-xs">
                          {entry.associatedProduct && (
                            <p className="font-semibold text-forest-dark">
                              {entry.associatedProduct}
                            </p>
                          )}
                          <p className="text-[11px] text-stone-500">
                            {entry.websiteSections.join(', ') || entry.notes}
                          </p>
                        </td>
                        <td className="py-2.5 px-4 whitespace-nowrap">
                          {entry.integrationStatus === 'Integrated' ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-forest bg-leaf-tint px-2.5 py-1 rounded-full">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              Integrated
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-full">
                              {entry.integrationStatus}
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          /* Visual Photo Grid */
          <>
            <p className="text-xs sm:text-sm text-stone-600 mb-4">
              Showing <strong className="text-forest-dark">{filteredItems.length}</strong> authentic
              photographs • Tap any photograph for full-screen view
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredItems.map((item, idx) => {
                const isProductCutout =
                  item.category === 'Product' ||
                  item.category === 'Product Lineup' ||
                  item.category === 'Packaging' ||
                  item.category === 'Logo';

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className="group bg-white rounded-2xl border border-forest/10 overflow-hidden shadow-subtle hover:shadow-card transition-all text-left flex flex-col"
                  >
                    <div
                      className={`relative aspect-[4/3] w-full overflow-hidden ${
                        isProductCutout ? 'bg-white p-2.5' : 'bg-stone-100'
                      }`}
                    >
                      <img
                        src={item.thumbSrc}
                        alt={item.associatedProduct || item.originalFilename}
                        loading="lazy"
                        className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                          isProductCutout ? 'object-contain' : 'object-cover'
                        }`}
                      />
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-forest-dark/80 text-white p-1.5 rounded-full">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="p-2.5 sm:p-3 border-t border-stone-100 flex-1 flex flex-col justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-leaf">
                        {item.galleryCategory}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-forest-dark line-clamp-2 mt-0.5">
                        {item.associatedProduct || item.notes || item.originalFilename}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <ImageModal
          items={lightboxItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </div>
  );
};
