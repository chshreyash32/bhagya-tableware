import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layers, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink } from '../data/products';

export const Craftsmanship: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const stages = [
    {
      number: '01',
      title: 'Forest Leaf Collection',
      caption: 'Sustainable Harvesting of Broad Natural Leaves',
      description:
        'Mature, sturdy broad leaves (such as Siali / Bauhinia vahlii leaves) are responsibly gathered from forest vines by experienced harvesters without damaging the plant.',
      image: '/leaf-opt/xhkqrkmsdfpoluteo9go.webp',
      alt: 'Woman collecting natural broad leaves from forest canopy',
      note: 'Used across all raw leaf and tableware products.',
    },
    {
      number: '02',
      title: 'Cleaning, Sorting & Preparation',
      caption: 'Careful Selection by Size and Texture',
      description:
        'Collected leaves are cleaned, sun-dried to preserve natural strength and flexibility, and sorted by quality so only sound leaves move forward into plate crafting.',
      image: '/leaf-opt/aesa-blog-204-1pic-edited-990x611.webp',
      alt: 'Sorted bundles of fresh broad forest leaves held by women',
      note: 'Leaves are graded to minimize tearing and ensure clean surfaces.',
    },
    {
      number: '03',
      title: 'Traditional Hand-Stitching (Pulla Kuttu)',
      caption: 'Time-Honored Natural Splint Stitching',
      description:
        'For traditional Sitting Plates (Pulla Kuttu) and hand-stitched raw leaf sheets (Daggara Kuttu & Duram Kuttu), artisans carefully overlap leaves and join them with fine natural bamboo/neem splints.',
      image: '/leaf-opt/siali-leaves-emerge-as-alternative-to-plastic-750x375.webp',
      alt: 'Artisan hand-stitching leaves using natural bamboo splints',
      note: '100% natural construction — ideal for traditional seated meals.',
    },
    {
      number: '04',
      title: 'Uniform Machine Stitching',
      caption: 'Clean Thread-Stitched Leaf Sheets',
      description:
        'For Machine Stitched Buff Plates and Sitting Plates, leaves are guided through sewing machines to form tight, uniform circular sheets with smooth surfaces and enhanced leak resistance.',
      image: '/leaf-opt/hq720.webp',
      alt: 'Woman operating sewing machine to stitch broad natural leaves',
      note: 'Eliminates loose splints and delivers consistent finish.',
    },
    {
      number: '05',
      title: 'Round Cutting & Bundling',
      caption: 'Trimming to Exact Plate Diameters',
      description:
        'Stitched leaf sheets are stacked cleanly, trimmed into circular formats (such as Daggara Kuttu Round Cut Leaf), and tied into neat bundles ready for pressing or direct supply.',
      image: '/leaf-opt/siali-leaf-plates.webp',
      alt: 'Artisan bundling round-cut stitched leaf sheets',
      note: 'Prepared according to target diameter from 4 inch up to 18 inch.',
    },
    {
      number: '06',
      title: 'Heated Die Pressing & Board Backing',
      caption: 'Shaping Sturdy Buff Plates, Cups & Bowls',
      description:
        'For Brown Board Plates, White Board Plates, and Cups & Bowls, layered leaves and food-grade board backing are heat-pressed in sized hydraulic dies to form rigid rims and deep contours.',
      image: '/leaf/edexlive_import_2020_6_10_original_IMG_20200607_114249.avif',
      alt: 'Woman artisan operating modern hydraulic plate molding press',
      secondaryImage: '/leaf-opt/1611116169-sal-leaf-utensils-3.webp',
      note: 'Different products follow distinct processes — sitting plates and raw leaves remain unbacked or lightly pressed, while buff plates include brown or white board reinforcement.',
    },
    {
      number: '07',
      title: 'Quality Check & Hygienic Packaging',
      caption: 'Finished Products Ready to Serve',
      description:
        'Finished plates, cups, and bowls are inspected for finish and backing strength, stacked by size, and hygienically sealed in protective packs carrying the BHAGYA emblem.',
      image: '/leaf-opt/sri-2647.webp',
      alt: 'Hygienically shrink-wrapped BHAGYA plate bundles with official stickers',
      secondaryImage: '/leaf-opt/sri-2639.webp',
      note: 'Ready for catering, weddings, temple functions, and retail.',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <section className="bg-forest-dark text-cream py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf-light">
            <Layers className="w-4 h-4" />
            Craftsmanship & Production
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            From Natural Leaves to Traditional Tableware
          </h1>
          <p className="text-sm sm:text-base text-cream/85 max-w-2xl mx-auto leading-relaxed">
            Every BHAGYA product blends traditional Indian leaf-stitching wisdom with clean modern
            molding and hygienic packaging. Note that each product type — raw leaves, traditional
            Pulla Kuttu sitting plates, machine-stitched plates, and board-backed buff plates —
            follows the specific stages suited to its craft.
          </p>
        </div>
      </section>

      {/* Visual Step-by-Step Timeline */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">
        {stages.map((stage) => (
          <div
            key={stage.number}
            className="bg-white rounded-3xl border border-forest/10 shadow-subtle overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 bg-stone-50 flex flex-col justify-center">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.alt}
                    loading="lazy"
                    className={`w-full h-full ${
                      stage.number === '07' ? 'object-contain bg-white p-3' : 'object-cover'
                    }`}
                  />
                </div>
                {stage.secondaryImage && (
                  <div className="border-t border-stone-200 aspect-[16/9] w-full overflow-hidden bg-white">
                    <img
                      src={stage.secondaryImage}
                      alt={`${stage.title} detail`}
                      loading="lazy"
                      className={`w-full h-full ${
                        stage.number === '07' ? 'object-contain p-3' : 'object-cover'
                      }`}
                    />
                  </div>
                )}
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-center space-y-3">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-forest text-white font-heading font-bold text-sm shadow-xs">
                    {stage.number}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-leaf">
                    {stage.caption}
                  </span>
                </div>

                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-forest-dark">
                  {stage.title}
                </h2>

                <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                  {stage.description}
                </p>

                <div className="pt-2 flex items-start gap-2 text-xs sm:text-sm text-forest bg-leaf-tint/60 border border-leaf/20 rounded-xl px-3.5 py-2.5">
                  <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>{stage.note}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Backing & Finish Comparison Showcase */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="bg-white rounded-3xl border border-forest/10 p-6 sm:p-8 shadow-subtle">
          <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-forest-dark text-center">
            Craft Details & Structural Finishes
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 text-center mt-1 max-w-2xl mx-auto">
            Actual studio views of BHAGYA leaf textures, board backing strength, and full size range
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            <div className="rounded-2xl border border-stone-200 overflow-hidden bg-white">
              <img
                src="/leaf-opt/sri-2645.webp"
                alt="Comparison of leaf textures and stitching finishes"
                loading="lazy"
                className="w-full h-52 sm:h-60 object-contain p-3"
              />
              <div className="p-3.5 bg-cream/60 border-t border-stone-100">
                <p className="text-sm font-bold text-forest-dark">Natural Leaf Shades & Stitching</p>
                <p className="text-xs text-stone-600 mt-0.5">
                  Side-by-side look at natural leaf variations and tight stitching seams.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-stone-200 overflow-hidden bg-white">
              <img
                src="/leaf-opt/sri-2641.webp"
                alt="Uniform sturdy board backing across all plate diameters"
                loading="lazy"
                className="w-full h-52 sm:h-60 object-contain p-3"
              />
              <div className="p-3.5 bg-cream/60 border-t border-stone-100">
                <p className="text-sm font-bold text-forest-dark">Reinforced Board Backing</p>
                <p className="text-xs text-stone-600 mt-0.5">
                  Clean, rigid backing engineered across every diameter for effortless buffet dining.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              <span>Browse All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
