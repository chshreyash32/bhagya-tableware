import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../data/products';

export const WomenEmpowerment: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const stories = [
    {
      title: 'Stewards of the Forest Canopy',
      subtitle: 'Sustainable Wild Leaf Gathering',
      description:
        'Women travel into natural forest landscapes to carefully gather broad, mature leaves without harming the trees or vines. Their deep ecological knowledge ensures only healthy, sturdy leaves are selected while preserving natural regeneration.',
      image: '/leaf-opt/xhkqrkmsdfpoluteo9go.webp',
      alt: 'Woman gathering fresh broad natural leaves in the forest',
    },
    {
      title: 'Collective Strength & Tradition',
      subtitle: 'Working Together in Harmony with Nature',
      description:
        'Gathering, sorting, and preparing natural leaves is a shared cultural tradition passed across generations. Together, women transform humble forest foliage into durable, biodegradable tableware valued across Indian homes and celebrations.',
      image: '/leaf-opt/aesa-blog-204-1pic-edited-990x611.webp',
      alt: 'Group of women holding freshly harvested Siali broad leaves in forest',
    },
    {
      title: 'Mastery of Traditional Hand-Stitching',
      subtitle: 'The Art of Pulla Kuttu',
      description:
        'With patient skill and practiced hands, artisans stitch broad leaves together using fine natural splints (Pulla Kuttu). Every overlap is placed with precision to form balanced, leak-resistant traditional Vistarakulu.',
      image: '/leaf-opt/siali-leaves-emerge-as-alternative-to-plastic-750x375.webp',
      alt: 'Artisan woman hand-stitching broad leaves with natural splints',
    },
    {
      title: 'Skilled Machine Stitching & Shaping',
      subtitle: 'Bridging Heritage Craft with Modern Precision',
      description:
        'Alongside traditional hand-stitching, women artisans skillfully operate sewing machines and heated hydraulic plate presses — crafting uniform buff plates, sitting plates, and pressed leaf bowls ready for modern events and banquets.',
      image: '/leaf-opt/hq720.webp',
      alt: 'Woman artisan machine-stitching natural broad leaf plate',
    },
    {
      title: 'Careful Bundling & Preparation',
      subtitle: 'Quality at Every Stage',
      description:
        'Stitched round-cut leaves are carefully stacked, bound, and inspected so that every bundle remains clean, pliable, and ready for further pressing or traditional dining.',
      image: '/leaf-opt/siali-leaf-plates.webp',
      alt: 'Artisan tying and preparing bundles of stitched round leaf plates',
    },
    {
      title: 'Pride in Nature-Friendly Craft',
      subtitle: 'Dignified, Sustainable Livelihoods',
      description:
        'Every plate served at a wedding, temple gathering, or family meal carries the pride and dedication of the women whose hands shaped it — keeping traditional Indian craftsmanship alive while reducing single-use plastic waste.',
      image: '/leaf-opt/story-photos-default-21.webp',
      alt: 'Three smiling women artisans holding freshly stitched green round leaf plates',
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Banner */}
      <section className="relative bg-forest-dark text-cream py-12 sm:py-16 px-4 sm:px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-4 relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf-light">
            <Heart className="w-4 h-4" />
            Hands Behind Every Leaf Plate
          </span>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            Empowering Women. Preserving Nature.
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-cream/90 max-w-2xl mx-auto leading-relaxed">
            Behind every natural leaf plate is a story of traditional craftsmanship, dedication, and
            hard work. BHAGYA celebrates the skills and contributions of women while supporting
            nature-friendly livelihoods.
          </p>
        </div>
      </section>

      {/* Featured Visual Storytelling Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10 sm:space-y-14">
        {stories.map((story, idx) => {
          const isReversed = idx % 2 === 1;
          return (
            <div
              key={story.title}
              className="bg-white rounded-3xl border border-forest/10 shadow-subtle overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div
                  className={`lg:col-span-6 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  } h-full`}
                >
                  <div className="aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden bg-stone-100">
                    <img
                      src={story.image}
                      alt={story.alt}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 p-6 sm:p-8 md:p-10 space-y-3 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-leaf">
                    <Sparkles className="w-3.5 h-3.5" />
                    {story.subtitle}
                  </span>
                  <h2 className="font-heading font-extrabold text-xl sm:text-2xl md:text-3xl text-forest-dark leading-snug">
                    {story.title}
                  </h2>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    {story.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Workshop & Modern Machinery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <div className="bg-leaf-tint/70 rounded-3xl border border-forest/15 p-6 sm:p-10">
          <div className="max-w-2xl mb-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-forest">
              <Leaf className="w-3.5 h-3.5" />
              Tradition Meets Modern Skill
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-dark mt-1">
              From Forest Gathering to Workshop Craft
            </h2>
            <p className="text-sm sm:text-base text-stone-700 mt-2 leading-relaxed">
              Women artisans operate precision hydraulic pressing machines and inspect every plate
              for finish, rim depth, and structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-2xl overflow-hidden bg-white border border-forest/10 shadow-subtle">
              <img
                src="/leaf-opt/1611116169-sal-leaf-utensils-3.webp"
                alt="Women artisans working at leaf plate molding press workshop"
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-forest-dark">
                  Collaborative Pressing & Shaping Workshop
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-white border border-forest/10 shadow-subtle">
              <img
                src="/leaf/edexlive_import_2020_6_10_original_IMG_20200607_114249.avif"
                alt="Woman artisan inspecting freshly pressed natural leaf plate at hydraulic press"
                loading="lazy"
                className="w-full h-64 sm:h-72 object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold text-forest-dark">
                  Precision Molding & Quality Inspection
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/craftsmanship"
              className="inline-flex items-center gap-2 bg-forest hover:bg-forest-dark text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
            >
              <span>See How Plates Are Made</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
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
