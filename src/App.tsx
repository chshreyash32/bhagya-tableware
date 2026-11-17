import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileNavigation } from './components/MobileNavigation';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Home } from './pages/Home';

// Lazy-load secondary pages for optimal mobile performance & code splitting
const Products = lazy(() => import('./pages/Products').then((m) => ({ default: m.Products })));
const ProductDetails = lazy(() =>
  import('./pages/ProductDetails').then((m) => ({ default: m.ProductDetails }))
);
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })));
const WomenEmpowerment = lazy(() =>
  import('./pages/WomenEmpowerment').then((m) => ({ default: m.WomenEmpowerment }))
);
const Craftsmanship = lazy(() =>
  import('./pages/Craftsmanship').then((m) => ({ default: m.Craftsmanship }))
);
const Gallery = lazy(() => import('./pages/Gallery').then((m) => ({ default: m.Gallery })));
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));

const PageLoader: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-12 space-y-6 animate-pulse">
    <div className="h-8 bg-forest/10 rounded-xl w-56" />
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((n) => (
        <div key={n} className="bg-white rounded-2xl border border-forest/10 p-3 space-y-3">
          <div className="aspect-square bg-stone-100 rounded-xl" />
          <div className="h-4 bg-stone-200 rounded w-3/4" />
          <div className="h-3 bg-stone-100 rounded w-1/2" />
          <div className="h-9 bg-stone-200 rounded-xl w-full" />
        </div>
      ))}
    </div>
  </div>
);

const RouteMetaManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const titles: Record<string, string> = {
      '/': 'BHAGYA Nature-Friendly Tableware | Traditional Indian Leaf Plates (Vistarakulu)',
      '/products': 'All Products | BHAGYA Nature-Friendly Tableware Catalogue',
      '/products/brown-board-plates': 'Brown Board Plates | BHAGYA Nature-Friendly Tableware',
      '/products/white-board-plates': 'White Board Plates | BHAGYA Nature-Friendly Tableware',
      '/products/sitting-plates': 'Sitting Plates (Pulla Kuttu & Machine Stitching) | BHAGYA',
      '/products/cups-and-bowls': 'Leaf Cups & Bowls (Dhonas) | BHAGYA Nature-Friendly Tableware',
      '/products/raw-leaf': 'Raw Leaf (Loose, Daggara Kuttu, Duram Kuttu) | BHAGYA',
      '/about': 'About Us | BHAGYA Nature-Friendly Tableware — Nizamabad, Telangana',
      '/women-empowerment': 'Empowering Women. Preserving Nature. | BHAGYA',
      '/craftsmanship': 'From Natural Leaves to Traditional Tableware | BHAGYA Craftsmanship',
      '/gallery': 'Business & Product Gallery | BHAGYA Nature-Friendly Tableware',
      '/contact': 'Contact Us | BHAGYA Nature-Friendly Tableware — Nizamabad',
    };

    document.title =
      titles[pathname] || 'BHAGYA Nature-Friendly Tableware | Biodegradable Leaf Plates';
  }, [pathname]);

  return null;
};

export function App() {
  return (
    <BrowserRouter>
      <RouteMetaManager />
      <div className="min-h-screen flex flex-col bg-cream pb-16 lg:pb-0">
        <Header />

        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/products/brown-board-plates"
                element={<Products categorySlug="brown-board-plates" />}
              />
              <Route
                path="/products/white-board-plates"
                element={<Products categorySlug="white-board-plates" />}
              />
              <Route
                path="/products/sitting-plates"
                element={<Products categorySlug="sitting-plates" />}
              />
              <Route
                path="/products/cups-and-bowls"
                element={<Products categorySlug="cups-and-bowls" />}
              />
              <Route
                path="/products/raw-leaf"
                element={<Products categorySlug="raw-leaf" />}
              />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="/about" element={<About />} />
              <Route path="/women-empowerment" element={<WomenEmpowerment />} />
              <Route path="/craftsmanship" element={<Craftsmanship />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <FloatingWhatsApp />
        <MobileNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
