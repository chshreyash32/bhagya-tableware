export interface Product {
  id: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  size: string;
  specification: string;
  stitchingType?: 'Pulla Kuttu' | 'Machine Stitching' | 'Pressed' | 'Hand-Stitched' | 'Natural Raw';
  description: string;
  features: string[];
  image: string;
  thumbnail: string;
  gallery: string[];
  isRawLeaf?: boolean;
  notice?: string;
  featuredOnHome?: boolean;
}

export const WHATSAPP_NUMBER = '919010801143';
export const PHONE_DISPLAY = '9010801143';
export const WHATSAPP_DISPLAY = '+91 9010801143';

export function buildWhatsAppLink(productName?: string): string {
  const text = productName
    ? `Hello BHAGYA Nature-Friendly Tableware,\n\nI am interested in the ${productName}.\n\nPlease share the product details, availability and quotation.\n\nThank you.`
    : `Hello BHAGYA Nature-Friendly Tableware,\n\nI would like to enquire about your traditional biodegradable leaf plates and tableware catalogue.\n\nThank you.`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const RAW_LEAF_NOTICE = 'Availability and rates may vary. Please contact us for current details.';

export const PRODUCTS: Product[] = [
  // ==========================================
  // CATEGORY 1: BROWN BOARD PLATES (7 items)
  // ==========================================
  {
    id: '8-inch-buff',
    name: '8 Inch Buff',
    categorySlug: 'brown-board-plates',
    categoryName: 'Brown Board Plates',
    size: '8 Inch',
    specification: 'Natural Leaf with Brown Board Backing',
    stitchingType: 'Pressed',
    description:
      'Compact 8 Inch natural leaf buff plate reinforced with sturdy brown board backing. Ideal for serving starters, tiffins, snacks, sweets, and temple prasad with natural grace.',
    features: [
      '100% biodegradable natural leaf surface',
      'Sturdy brown paper-board reinforcement for holding weight',
      'Clean pressed edges with natural finish',
      'Suitable for tiffins, snacks, desserts & events',
    ],
    image: '/leaf-opt/8-inch.webp',
    thumbnail: '/leaf-opt/8-inch-thumb.webp',
    gallery: [
      '/leaf-opt/8-inch.webp',
      '/leaf-opt/sri-2639.webp',
      '/leaf-opt/sri-2641.webp',
      '/leaf-opt/sri-2647.webp',
    ],
    featuredOnHome: true,
  },
  {
    id: '10-inch-buff',
    name: '10 Inch Buff',
    categorySlug: 'brown-board-plates',
    categoryName: 'Brown Board Plates',
    size: '10 Inch',
    specification: 'Natural Leaf with Brown Board Backing',
    stitchingType: 'Pressed',
    description:
      'Versatile 10 Inch brown board buff plate crafted from carefully sorted broad natural leaves. Built for light meals, breakfast catering, and casual gatherings.',
    features: [
      'Natural broad leaf laminated to durable brown board',
      'Leak-resistant and comfortable to hold while standing',
      'Eco-friendly replacement for plastic & thermocol plates',
      'Available in hygienic sealed bundles',
    ],
    image: '/leaf-opt/10-inch-buff.webp',
    thumbnail: '/leaf-opt/10-inch-buff-thumb.webp',
    gallery: [
      '/leaf-opt/10-inch-buff.webp',
      '/leaf-opt/sri-2626.webp',
      '/leaf-opt/sri-2639.webp',
      '/leaf-opt/sri-2641.webp',
    ],
    featuredOnHome: true,
  },
  {
    id: '11-inch-buff',
    name: '11 Inch Buff',
    categorySlug: 'brown-board-plates',
    categoryName: 'Brown Board Plates',
    size: '11 Inch',
    specification: 'Natural Leaf with Brown Board Backing',
    stitchingType: 'Pressed',
    description:
      'Medium-large 11 Inch buff plate engineered for balanced standing buffet meals. Combines traditional leaf aesthetics with rigid structural strength.',
    features: [
      'Generous 11 Inch serving area for everyday catering',
      'Strong brown board backing prevents bending',
      'Hygienically pressed and neatly stacked',
      'Compostable and gentle on the earth',
    ],
    image: '/leaf-opt/11-inch-buff.webp',
    thumbnail: '/leaf-opt/11-inch-buff-thumb.webp',
    gallery: [
      '/leaf-opt/11-inch-buff.webp',
      '/leaf-opt/sri-2639.webp',
      '/leaf-opt/sri-2647.webp',
    ],
    featuredOnHome: false,
  },
  {
    id: '12-inch-buff',
    name: '12 Inch Buff',
    categorySlug: 'brown-board-plates',
    categoryName: 'Brown Board Plates',
    size: '12 Inch',
    specification: 'Standard Buffet Size • Brown Board Backing',
    stitchingType: 'Pressed',
    description:
      'Our most popular standard buffet plate size. The 12 Inch Buff plate effortlessly holds full traditional South Indian meals, rice, curries, and accompaniments without sagging.',
    features: [
      'Most widely preferred size for weddings and functions',
      'Heavy-duty brown board backing for secure buffet dining',
      'Authentic natural leaf surface enhances dining aroma',
      'Zero chemicals or synthetic coatings',
    ],
    image: '/leaf-opt/12-inch-buff.webp',
    thumbnail: '/leaf-opt/12-inch-buff-thumb.webp',
    gallery: [
      '/leaf-opt/12-inch-buff.webp',
      '/leaf-opt/sri-2639.webp',
      '/leaf-opt/sri-2641.webp',
      '/leaf-opt/sri-2647.webp',
    ],
    featuredOnHome: true,
  },
  {
    id: '12-inch-buff-machine-stitching',
    name: '12 Inch Buff (Machine Stitching)',
    categorySlug: 'brown-board-plates',
    categoryName: 'Brown Board Plates',
    size: '12 Inch',
    specification: 'Brown Board • Precision Machine Stitched Leaf',
    stitchingType: 'Machine Stitching',
    description:
      '12 Inch brown board buff plate made with finely aligned, machine-stitched broad leaves. Offers uniform stitching lines, enhanced leak resistance, and a clean flat surface.',
    features: [
      'Uniform fine machine stitching eliminates gaps between leaves',
      'High load-bearing brown board backing',
      'Ideal for hot curries, gravies, and buffet dining',
      'Hygienic finish for upscale events and caterers',
    ],
    image: '/leaf-opt/12-inch-buff.webp',
    thumbnail: '/leaf-opt/12-inch-buff-thumb.webp',
    gallery: [
      '/leaf-opt/12-inch-buff.webp',
      '/leaf-opt/hq720.webp',
      '/leaf-opt/sri-2645.webp',
      '/leaf-opt/sri-2647.webp',
    ],
    featuredOnHome: false,
  },
  {
    id: '14-inch-buff',
    name: '14 Inch Buff',
    categorySlug: 'brown-board-plates',
    categoryName: 'Brown Board Plates',
    size: '14 Inch',
    specification: 'Large Feast Size • Brown Board Backing',
    stitchingType: 'Pressed',
    description:
      'Spacious 14 Inch brown board buff plate built for grand wedding feasts and festive dining. Easily accommodates multiple curries, rice, sweets, and sides with strength.',
    features: [
      'Large 14 Inch diameter for full multi-course meals',
      'Extra-firm brown board reinforcement',
      'Deep formed edges keep gravies safely contained',
      'Crafted from carefully graded natural forest leaves',
    ],
    image: '/leaf-opt/14-inch-buff.webp',
    thumbnail: '/leaf-opt/14-inch-buff-thumb.webp',
    gallery: [
      '/leaf-opt/14-inch-buff.webp',
      '/leaf-opt/16-inch-buff.webp',
      '/leaf-opt/sri-2639.webp',
      '/leaf-opt/sri-2647.webp',
    ],
    featuredOnHome: false,
  },
  {
    id: '14-inch-buff-machine-stitching',
    name: '14 Inch Buff (Machine Stitching)',
    categorySlug: 'brown-board-plates',
    categoryName: 'Brown Board Plates',
    size: '14 Inch',
    specification: 'Large Feast Size • Machine Stitched • Brown Board',
    stitchingType: 'Machine Stitching',
    description:
      'Grand 14 Inch buff plate combining fine machine-stitched leaves with durable brown board support. Delivers superior consistency, zero pin-splinters, and leak-proof dining.',
    features: [
      'Tight, neat machine stitching across the entire leaf layer',
      'Sturdy brown board backing holds heavy banquet servings',
      'Smooth, uniform rim finish',
      'Bulk availability for caterers and event organizers',
    ],
    image: '/leaf-opt/14-inch-buff.webp',
    thumbnail: '/leaf-opt/14-inch-buff-thumb.webp',
    gallery: [
      '/leaf-opt/14-inch-buff.webp',
      '/leaf-opt/hq720.webp',
      '/leaf-opt/sri-2644.webp',
      '/leaf-opt/sri-2647.webp',
    ],
    featuredOnHome: false,
  },

  // ==========================================
  // CATEGORY 2: WHITE BOARD PLATES (4 items)
  // ==========================================
  {
    id: '13-inch-white-buff',
    name: '13 Inch White Buff',
    categorySlug: 'white-board-plates',
    categoryName: 'White Board Plates',
    size: '13 Inch',
    specification: 'Natural Leaf with Premium White Board Backing',
    stitchingType: 'Pressed',
    description:
      'Refined 13 Inch natural leaf buff plate finished with crisp white board backing. Combines traditional biodegradable leaf dining with a clean, polished presentation.',
    features: [
      'Crisp white paper-board backing for premium appearance',
      'Natural broad leaf top layer with earthy green tones',
      'Strong enough for standing buffets and celebrations',
      'Hygienically processed and sealed',
    ],
    image: '/leaf-opt/12-inch-white-buff.webp',
    thumbnail: '/leaf-opt/12-inch-white-buff-thumb.webp',
    gallery: [
      '/leaf-opt/12-inch-white-buff.webp',
      '/leaf-opt/sri-2641.webp',
      '/leaf-opt/sri-2647.webp',
    ],
    featuredOnHome: true,
  },
  {
    id: '14-inch-white-buff',
    name: '14 Inch White Buff',
    categorySlug: 'white-board-plates',
    categoryName: 'White Board Plates',
    size: '14 Inch',
    specification: 'Banquet Size • Premium White Board Backing',
    stitchingType: 'Pressed',
    description:
      'Elegant 14 Inch white board buff plate tailored for wedding receptions, corporate dining, and festive catering. Offers generous serving area with a spotless underside.',
    features: [
      'Spacious 14 Inch feast surface',
      'Smooth, clean white board backing',
      'Rigid pressed edge structure resists leaks and bending',
      '100% nature-friendly top leaf layer',
    ],
    image: '/leaf-opt/14-inch-white-buff.webp',
    thumbnail: '/leaf-opt/14-inch-white-buff-thumb.webp',
    gallery: [
      '/leaf-opt/14-inch-white-buff.webp',
      '/leaf-opt/sri-2639.webp',
      '/leaf-opt/sri-2641.webp',
    ],
    featuredOnHome: true,
  },
  {
    id: '16-inch-white-buff-machine-stitching',
    name: '16 Inch White Buff (Machine Stitching)',
    categorySlug: 'white-board-plates',
    categoryName: 'White Board Plates',
    size: '16 Inch',
    specification: 'Extra-Large • Machine Stitched • White Board',
    stitchingType: 'Machine Stitching',
    description:
      'Extra-large 16 Inch machine-stitched white board plate designed for grand ceremonial meals and luxury banquets. Precision stitched for seamless coverage and spotless finish.',
    features: [
      'Extra-wide 16 Inch format for lavish traditional spreads',
      'Uniform machine stitching keeps leaves tightly sealed',
      'Clean white board base for superior presentation',
      'Ideal for wedding feasts and VIP dining',
    ],
    image: '/leaf-opt/16-inch-white-buff.webp',
    thumbnail: '/leaf-opt/16-inch-white-buff-thumb.webp',
    gallery: [
      '/leaf-opt/16-inch-white-buff.webp',
      '/leaf-opt/sri-2641.webp',
      '/leaf-opt/sri-2647.webp',
    ],
    featuredOnHome: true,
  },
  {
    id: '18-inch-white-buff-machine-stitching',
    name: '18 Inch White Buff (Machine Stitching)',
    categorySlug: 'white-board-plates',
    categoryName: 'White Board Plates',
    size: '18 Inch',
    specification: 'Royal Feast Size • Machine Stitched • White Board',
    stitchingType: 'Machine Stitching',
    description:
      'Our largest 18 Inch white board buff plate crafted for royal South Indian feasts and multi-item traditional banquets. Machine-stitched precision paired with premium white backing.',
    features: [
      'Expansive 18 Inch dining canvas for complete traditional feasts',
      'Precision machine stitching for neat, leak-safe performance',
      'Heavy-gauge white board ensures unwavering stability',
      'Authentic traditional presentation with modern hygiene',
    ],
    image: '/leaf-opt/18-inch-white-buff.webp',
    thumbnail: '/leaf-opt/18-inch-white-buff-thumb.webp',
    gallery: [
      '/leaf-opt/18-inch-white-buff.webp',
      '/leaf-opt/sri-2639.webp',
      '/leaf-opt/sri-2647.webp',
    ],
    featuredOnHome: false,
  },

  // ==========================================
  // CATEGORY 3: SITTING PLATES (7 items)
  // ==========================================
  {
    id: '12-inch-sitting',
    name: '12 Inch Sitting',
    categorySlug: 'sitting-plates',
    categoryName: 'Sitting Plates',
    size: '12 Inch',
    specification: 'Traditional Sitting Dining Leaf Plate (Vistaraku)',
    stitchingType: 'Hand-Stitched',
    description:
      'Traditional 12 Inch sitting leaf plate designed for comfortable seated dining, temple annadanam, and family rituals. Authentic natural leaf texture with dependable durability.',
    features: [
      'Traditional Vistaraku design for seated dining',
      'Natural broad leaves retain authentic earthy warmth',
      'Completely biodegradable and eco-conscious',
      'Ideal for temple feasts, rituals, and family gatherings',
    ],
    image: '/leaf-opt/12-inch-buff.webp',
    thumbnail: '/leaf-opt/12-inch-buff-thumb.webp',
    gallery: [
      '/leaf-opt/12-inch-buff.webp',
      '/leaf-opt/sri-2645.webp',
      '/leaf-opt/sri-2649.webp',
    ],
    featuredOnHome: false,
  },
  {
    id: '14-inch-sitting-pulla-kuttu',
    name: '14 Inch Sitting (Pulla Kuttu)',
    categorySlug: 'sitting-plates',
    categoryName: 'Sitting Plates',
    size: '14 Inch',
    specification: 'Traditional Neem/Bamboo Splint Hand-Stitched',
    stitchingType: 'Pulla Kuttu',
    description:
      'Authentic 14 Inch sitting Vistaraku stitched by hand using traditional natural splints (Pulla Kuttu). Celebrates centuries-old Indian culinary heritage for Pankthi Bhojanam and auspicious ceremonies.',
    features: [
      'Hand-stitched using traditional natural Pulla Kuttu splints',
      '100% natural materials — leaves and wooden pins only',
      'Generous 14 Inch dining space for seated traditional feasts',
      'Handcrafted by skilled rural and tribal women artisans',
    ],
    image: '/leaf-opt/14-inch-sitting.webp',
    thumbnail: '/leaf-opt/14-inch-sitting-thumb.webp',
    gallery: [
      '/leaf-opt/14-inch-sitting.webp',
      '/leaf-opt/siali-leaves-emerge-as-alternative-to-plastic-750x375.webp',
      '/leaf-opt/sri-2645.webp',
    ],
    featuredOnHome: true,
  },
  {
    id: '14-inch-sitting-machine-stitching',
    name: '14 Inch Sitting (Machine Stitching)',
    categorySlug: 'sitting-plates',
    categoryName: 'Sitting Plates',
    size: '14 Inch',
    specification: 'Uniform Machine Stitched Sitting Plate',
    stitchingType: 'Machine Stitching',
    description:
      '14 Inch sitting leaf plate crafted with clean, uniform thread machine stitching. Provides a smooth dining surface without bamboo pins, ideal for modern traditional feasts.',
    features: [
      'Neat machine stitching offers smooth, comfortable dining',
      'Tight leaf overlap prevents liquid seepage',
      'Ideal for seated marriage meals and community dining',
      'Lightweight, stackable, and biodegradable',
    ],
    image: '/leaf-opt/14-inch-sitting.webp',
    thumbnail: '/leaf-opt/14-inch-sitting-thumb.webp',
    gallery: [
      '/leaf-opt/14-inch-sitting.webp',
      '/leaf-opt/hq720.webp',
      '/leaf-opt/sri-2645.webp',
    ],
    featuredOnHome: false,
  },
  {
    id: '15-inch-sitting-pulla-kuttu',
    name: '15 Inch Sitting (Pulla Kuttu)',
    categorySlug: 'sitting-plates',
    categoryName: 'Sitting Plates',
    size: '15 Inch',
    specification: 'Broad Sitting Plate • Traditional Pulla Kuttu',
    stitchingType: 'Pulla Kuttu',
    description:
      'Spacious 15 Inch traditional Pulla Kuttu sitting plate hand-stitched by experienced women artisans. Offers extra width for generous festival servings and auspicious occasions.',
    features: [
      'Extra-broad 15 Inch sitting dining format',
      'Traditional Pulla Kuttu natural splint stitching',
      'Authentic look and aroma for auspicious Indian meals',
      'Pure natural leaf with zero synthetic additives',
    ],
    image: '/leaf-opt/14-inch-sitting.webp',
    thumbnail: '/leaf-opt/14-inch-sitting-thumb.webp',
    gallery: [
      '/leaf-opt/14-inch-sitting.webp',
      '/leaf-opt/story-photos-default-21.webp',
      '/leaf-opt/sri-2645.webp',
    ],
    featuredOnHome: false,
  },
  {
    id: '16-inch-sitting-pulla-kuttu',
    name: '16 Inch Sitting (Pulla Kuttu)',
    categorySlug: 'sitting-plates',
    categoryName: 'Sitting Plates',
    size: '16 Inch',
    specification: 'Large Feast Sitting Plate • Traditional Pulla Kuttu',
    stitchingType: 'Pulla Kuttu',
    description:
      'Large 16 Inch Pulla Kuttu sitting Vistaraku made for grand South Indian wedding feasts and temple functions. Hand-assembled with precision to serve elaborate multi-course meals.',
    features: [
      'Large 16 Inch diameter fits full wedding feast courses',
      'Authentic hand-stitched Pulla Kuttu craftsmanship',
      'Broad, sturdy forest leaves carefully selected for quality',
      'Supports traditional rural livelihoods',
    ],
    image: '/leaf-opt/16-inch-sitting.webp',
    thumbnail: '/leaf-opt/16-inch-sitting-thumb.webp',
    gallery: [
      '/leaf-opt/16-inch-sitting.webp',
      '/leaf-opt/siali-leaves-emerge-as-alternative-to-plastic-750x375.webp',
      '/leaf-opt/sri-2645.webp',
    ],
    featuredOnHome: true,
  },
  {
    id: '16-inch-sitting-machine-stitching',
    name: '16 Inch Sitting (Machine Stitching)',
    categorySlug: 'sitting-plates',
    categoryName: 'Sitting Plates',
    size: '16 Inch',
    specification: 'Large Feast Sitting Plate • Machine Stitched',
    stitchingType: 'Machine Stitching',
    description:
      'Large 16 Inch machine-stitched sitting plate offering neat symmetry, deep rim containment, and effortless handling for large-scale catering and seated banquets.',
    features: [
      'Fine machine stitching delivers uniform strength across the plate',
      'Deep rim design holds sambar, rasam, and curries cleanly',
      'Consistent sizing for high-volume banquet serving',
      '100% biodegradable natural leaf material',
    ],
    image: '/leaf-opt/16-inch-drm.webp',
    thumbnail: '/leaf-opt/16-inch-drm-thumb.webp',
    gallery: [
      '/leaf-opt/16-inch-drm.webp',
      '/leaf-opt/16-inch-buff.webp',
      '/leaf-opt/hq720.webp',
    ],
    featuredOnHome: true,
  },
  {
    id: '18-inch-sitting-machine-stitching',
    name: '18 Inch Sitting (Machine Stitching)',
    categorySlug: 'sitting-plates',
    categoryName: 'Sitting Plates',
    size: '18 Inch',
    specification: 'Grand Royal Feast • Machine Stitched Sitting Plate',
    stitchingType: 'Machine Stitching',
    description:
      'Grand 18 Inch machine-stitched sitting plate crafted for elaborate ceremonial feasts and festive Pankthi Bhojanam. Generous space with refined edge finishing and reliable strength.',
    features: [
      'Maximum 18 Inch dining expanse for grand feasts',
      'Precision machine stitching for leak-safe dining',
      'Elevated deep rim prevents spillage',
      'Natural eco-friendly alternative for large gatherings',
    ],
    image: '/leaf-opt/18-inch-buff-drm.webp',
    thumbnail: '/leaf-opt/18-inch-buff-drm-thumb.webp',
    gallery: [
      '/leaf-opt/18-inch-buff-drm.webp',
      '/leaf-opt/sri-2639.webp',
      '/leaf-opt/sri-2647.webp',
    ],
    featuredOnHome: false,
  },

  // ==========================================
  // CATEGORY 4: CUPS AND BOWLS (3 items)
  // ==========================================
  {
    id: '4-inch-small-cups',
    name: '4 Inch Small Cups',
    categorySlug: 'cups-and-bowls',
    categoryName: 'Cups & Bowls',
    size: '4 Inch',
    specification: 'Pressed Natural Leaf Cup (Small Dhona)',
    stitchingType: 'Pressed',
    description:
      'Compact 4 Inch natural pressed leaf cups (Dhonas). Perfect for serving chutneys, dal, payasam, sweets, temple prasad, and street-food snacks with eco-friendly elegance.',
    features: [
      'Leak-resistant die-pressed natural leaf construction',
      'Ideal size for prasad, chutneys, curries, and sweets',
      'Holds hot and liquid dishes cleanly',
      '100% compostable and plastic-free',
    ],
    image: '/leaf-opt/sri-2651.webp',
    thumbnail: '/leaf-opt/sri-2651-thumb.webp',
    gallery: [
      '/leaf-opt/sri-2651.webp',
      '/leaf-opt/sri-2650.webp',
      '/leaf-opt/sri-2644.webp',
    ],
    featuredOnHome: true,
  },
  {
    id: '6-inch-big-cups',
    name: '6 Inch Big Cups',
    categorySlug: 'cups-and-bowls',
    categoryName: 'Cups & Bowls',
    size: '6 Inch',
    specification: 'Pressed Natural Leaf Big Cup (Large Dhona)',
    stitchingType: 'Pressed',
    description:
      'Generous 6 Inch pressed natural leaf cups designed for serving chaat, pani puri, curries, pongal, pulihora, and generous prasad portions without leaking or softening.',
    features: [
      'Wide 6 Inch cup format for snacks and hearty portions',
      'Sturdy multi-layer pressed construction',
      'Natural leaf aroma enhances hot dishes',
      'Available in bulk packs for caterers and temples',
    ],
    image: '/leaf-opt/sri-2651.webp',
    thumbnail: '/leaf-opt/sri-2651-thumb.webp',
    gallery: [
      '/leaf-opt/sri-2651.webp',
      '/leaf-opt/sri-2650.webp',
    ],
    featuredOnHome: true,
  },
  {
    id: '6-inch-big-bowl',
    name: '6 Inch Big Bowl',
    categorySlug: 'cups-and-bowls',
    categoryName: 'Cups & Bowls',
    size: '6 Inch',
    specification: 'Deep Pressed Natural Leaf Serving Bowl',
    stitchingType: 'Pressed',
    description:
      'Deep 6 Inch natural leaf bowl pressed for superior depth and liquid capacity. Ideal for sambar, rasam, biryani, curd rice, kheer, and festive servings.',
    features: [
      'Deep bowl contour engineered for liquid & semi-liquid foods',
      'Reinforced base prevents tipping or seepage',
      'Clean molded edges for comfortable holding',
      'Completely biodegradable after use',
    ],
    image: '/leaf-opt/sri-2650.webp',
    thumbnail: '/leaf-opt/sri-2650-thumb.webp',
    gallery: [
      '/leaf-opt/sri-2650.webp',
      '/leaf-opt/sri-2651.webp',
      '/leaf-opt/sri-2644.webp',
    ],
    featuredOnHome: true,
  },

  // ==========================================
  // CATEGORY 5: RAW LEAF (4 items)
  // ==========================================
  {
    id: 'loose-leaf-per-kg',
    name: 'Loose Leaf (Per KG)',
    categorySlug: 'raw-leaf',
    categoryName: 'Raw Leaf',
    size: 'Per KG',
    specification: 'Sorted Natural Wild Forest Leaves (Raw)',
    stitchingType: 'Natural Raw',
    description:
      'Freshly harvested and dried loose natural broad leaves supplied by weight (Per KG). Carefully sorted and stored to maintain pliability for leaf plate manufacturers and traditional uses.',
    features: [
      'Supplied by weight (Per KG) for flexible bulk sourcing',
      'Carefully sorted forest-harvested broad leaves',
      'Cleaned and stored to stay free from moisture damage',
      'Suitable for plate-making units and traditional use',
    ],
    image: '/leaf-opt/xhkqrkmsdfpoluteo9go.webp',
    thumbnail: '/leaf-opt/xhkqrkmsdfpoluteo9go-thumb.webp',
    gallery: [
      '/leaf-opt/xhkqrkmsdfpoluteo9go.webp',
      '/leaf-opt/aesa-blog-204-1pic-edited-990x611.webp',
    ],
    isRawLeaf: true,
    notice: RAW_LEAF_NOTICE,
    featuredOnHome: true,
  },
  {
    id: 'daggara-kuttu-round-cut-leaf',
    name: 'Daggara Kuttu Round Cut Leaf',
    categorySlug: 'raw-leaf',
    categoryName: 'Raw Leaf',
    size: 'Round Cut',
    specification: 'Close-Stitched Round Cut Raw Leaf Bundles',
    stitchingType: 'Hand-Stitched',
    description:
      'Closely stitched (Daggara Kuttu) raw natural leaves pre-trimmed into uniform round shapes. Ready for direct hydraulic die pressing or traditional dining use.',
    features: [
      'Dense close-stitching (Daggara Kuttu) for minimal gaps',
      'Precision round-cut edges ready for plate pressing machines',
      'Bundled cleanly for safe storage and transport',
      'Handcrafted by skilled women leaf-stitchers',
    ],
    image: '/leaf-opt/siali-leaf-plates.webp',
    thumbnail: '/leaf-opt/siali-leaf-plates-thumb.webp',
    gallery: [
      '/leaf-opt/siali-leaf-plates.webp',
      '/leaf-opt/story-photos-default-21.webp',
    ],
    isRawLeaf: true,
    notice: RAW_LEAF_NOTICE,
    featuredOnHome: true,
  },
  {
    id: 'daggara-kuttu',
    name: 'Daggara Kuttu',
    categorySlug: 'raw-leaf',
    categoryName: 'Raw Leaf',
    size: 'Standard Bundle',
    specification: 'Fine Close-Stitched Raw Leaf Sheets',
    stitchingType: 'Hand-Stitched',
    description:
      'Traditional Daggara Kuttu stitched raw leaf sheets crafted with tight, closely placed natural bamboo/neem splint stitches for higher strength and superior quality.',
    features: [
      'Fine close-stitched leaves with strong structural hold',
      'Minimal leakage compared to loose-stitched alternatives',
      'Ideal raw material for buff plates and premium sitting plates',
      'Sourced responsibly through traditional artisan networks',
    ],
    image: '/leaf-opt/siali-leaves-emerge-as-alternative-to-plastic-750x375.webp',
    thumbnail: '/leaf-opt/siali-leaves-emerge-as-alternative-to-plastic-750x375-thumb.webp',
    gallery: [
      '/leaf-opt/siali-leaves-emerge-as-alternative-to-plastic-750x375.webp',
      '/leaf-opt/siali-leaf-plates.webp',
    ],
    isRawLeaf: true,
    notice: RAW_LEAF_NOTICE,
    featuredOnHome: true,
  },
  {
    id: 'duram-kuttu-leaf',
    name: 'Duram Kuttu Leaf',
    categorySlug: 'raw-leaf',
    categoryName: 'Raw Leaf',
    size: 'Standard Bundle',
    specification: 'Wide-Stitched Raw Leaf Sheets',
    stitchingType: 'Hand-Stitched',
    description:
      'Traditional wide-stitched (Duram Kuttu) natural leaf sheets prepared in bulk bundles. Economical raw leaf base suited for secondary machine stitching, backing lamination, or traditional uses.',
    features: [
      'Wide-spaced traditional hand stitching (Duram Kuttu)',
      'Suitable for further machine stitching or board backing',
      'Neatly stacked and tied in protective bundles',
      'Seasonal forest harvest availability',
    ],
    image: '/leaf-opt/story-photos-default-21.webp',
    thumbnail: '/leaf-opt/story-photos-default-21-thumb.webp',
    gallery: [
      '/leaf-opt/story-photos-default-21.webp',
      '/leaf-opt/siali-leaf-plates.webp',
    ],
    isRawLeaf: true,
    notice: RAW_LEAF_NOTICE,
    featuredOnHome: false,
  },
];
