import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PhotoManagerWidget } from './components/PhotoManagerWidget';

// Dynamic lazy loading for below-the-fold and heavy components (improves initial mobile TTI and FCP under 2s on 3G/4G)
const Locations = lazy(() => import('./components/Locations').then((m) => ({ default: m.Locations })));
const MapSection = lazy(() => import('./components/MapSection').then((m) => ({ default: m.MapSection })));
const Tips = lazy(() => import('./components/Tips').then((m) => ({ default: m.Tips })));
const FAQ = lazy(() => import('./components/FAQ').then((m) => ({ default: m.FAQ })));
const InstagramSection = lazy(() => import('./components/InstagramSection').then((m) => ({ default: m.InstagramSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then((m) => ({ default: m.ContactSection })));
const OwnerGuideModal = lazy(() => import('./components/OwnerGuideModal').then((m) => ({ default: m.OwnerGuideModal })));
const NotFoundView = lazy(() => import('./components/NotFoundView').then((m) => ({ default: m.NotFoundView })));

// Non-blocking minimal skeleton fallback
const SectionFallback = () => <div className="min-h-[140px] bg-transparent" />;

export default function App() {
  const [isOwnerGuideOpen, setIsOwnerGuideOpen] = useState(false);
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#404') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (is404) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <NotFoundView
          onBackToHome={() => {
            window.location.hash = '#hero';
            setIs404(false);
          }}
        />
      </Suspense>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#111827] flex flex-col antialiased selection:bg-[#123B8E] selection:text-white">
      {/* 1. Header / Navbar */}
      <Navbar onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero Section - Immediately available with high-priority image */}
        <Hero />

        {/* 3. Por que Lava10 - Immediate above-the-fold experience */}
        <Benefits />

        {/* 4. Como Funciona - Step sequence */}
        <HowItWorks />

        {/* 5. Serviços - Services overview */}
        <Services />

        {/* Below-the-fold heavy components with Native Lazy Loading & Suspense */}
        <Suspense fallback={<SectionFallback />}>
          {/* 6. Unidades - Storefronts with lazy-loaded async images */}
          <Locations />

          {/* 7. Mapa Discreto do Google Maps - Lazy IntersectionObserver */}
          <MapSection />

          {/* 8. Dicas para uma Lavagem Perfeita */}
          <Tips />

          {/* 9. FAQ Minimalista */}
          <FAQ />

          {/* 10. Siga a Lava10 no Instagram */}
          <InstagramSection />

          {/* 11. Contato Direto & WhatsApp */}
          <ContactSection />
        </Suspense>
      </main>

      {/* 12. Footer Minimalista */}
      <Footer onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      {/* 13. Gerenciador e Seletor Fácil de Fotos das Fachadas */}
      <PhotoManagerWidget />

      {/* 14. Botão Flutuante de WhatsApp (escondido se não houver número) */}
      <WhatsAppButton />

      {/* Guia de Configuração (carregado sob demanda quando aberto) */}
      {isOwnerGuideOpen && (
        <Suspense fallback={null}>
          <OwnerGuideModal
            isOpen={isOwnerGuideOpen}
            onClose={() => setIsOwnerGuideOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
