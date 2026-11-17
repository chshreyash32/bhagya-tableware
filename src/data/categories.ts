export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  thumbnail: string;
  itemCount: number;
}

export const CATEGORIES: Category[] = [
  {
    id: 'brown-board-plates',
    name: 'Brown Board Plates',
    slug: 'brown-board-plates',
    shortDescription: 'Sturdy natural buff plates with durable brown kraft/paper backing.',
    description:
      'Traditional broad leaf plates reinforced with food-grade brown board backing. Designed for wedding feasts, outdoor banquets, catering, and community meals requiring premium strength and natural appeal.',
    image: '/leaf-opt/12-inch-buff.webp',
    thumbnail: '/leaf-opt/12-inch-buff-thumb.webp',
    itemCount: 7,
  },
  {
    id: 'white-board-plates',
    name: 'White Board Plates',
    slug: 'white-board-plates',
    shortDescription: 'Clean, elegant buffet plates with premium white board backing.',
    description:
      'Pure natural leaf tableware backed by pristine white virgin board. Offers an upscale, hygienic presentation that elevates corporate dining, luxury receptions, and festival banquets.',
    image: '/leaf-opt/14-inch-white-buff.webp',
    thumbnail: '/leaf-opt/14-inch-white-buff-thumb.webp',
    itemCount: 4,
  },
  {
    id: 'sitting-plates',
    name: 'Sitting Plates',
    slug: 'sitting-plates',
    shortDescription: 'Traditional broad dining vistarakulu for floor and table seating.',
    description:
      'Classic Telugu & South Indian sitting dining plates (Pankthi Bhojanam). Crafted by traditional artisans using neem/bamboo splints (Pulla Kuttu) or reinforced with uniform machine stitching.',
    image: '/leaf-opt/14-inch-sitting.webp',
    thumbnail: '/leaf-opt/14-inch-sitting-thumb.webp',
    itemCount: 7,
  },
  {
    id: 'cups-and-bowls',
    name: 'Cups & Bowls',
    slug: 'cups-and-bowls',
    shortDescription: 'Natural leaf cups (dhonas) and bowls for prasad, curries & desserts.',
    description:
      'Traditional pressed leaf cups and bowls (Dhonas). 100% natural, leak-resistant, and ideal for temple prasad, liquid gravies, snacks, rasam, and wedding delicacies.',
    image: '/leaf-opt/sri-2651.webp',
    thumbnail: '/leaf-opt/sri-2651-thumb.webp',
    itemCount: 3,
  },
  {
    id: 'raw-leaf',
    name: 'Raw Leaf',
    slug: 'raw-leaf',
    shortDescription: 'Sustainably harvested raw Siali & Sal leaves in bundles and rolls.',
    description:
      'Authentic wild forest leaves gathered responsibly by tribal communities. Available loose per kilogram or stitched in traditional Daggara Kuttu and Duram Kuttu patterns for processing and custom needs.',
    image: '/leaf-opt/siali-leaf-plates.webp',
    thumbnail: '/leaf-opt/siali-leaf-plates-thumb.webp',
    itemCount: 4,
  },
];
