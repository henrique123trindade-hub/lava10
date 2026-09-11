import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Services } from './components/Services';
import { Locations } from './components/Locations';
import { MapSection } from './components/MapSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MobileBottomBar } from './components/MobileBottomBar';

// Lightweight lazy loading for secondary content
const Tips = lazy(() => import('./components/Tips').then((m) => ({ default: m.Tips })));
const FAQ = lazy(() => import('./components/FAQ').then((m) => ({ default: m.FAQ })));
const InstagramSection = lazy(() => import('./components/InstagramSection').then((m) => ({ default: m.InstagramSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then((m) => ({ default: m.ContactSection })));
const OwnerGuideModal = lazy(() => import('./components/OwnerGuideModal').then((m) => ({ default: m.OwnerGuideModal })));
const NotFoundView = lazy(() => import('./components/NotFoundView').then((m) => ({ default: m.NotFoundView })));

const SectionFallback = () => <div className="min-h-[120px] bg-transparent" />;

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
    <div className="min-h-screen bg-white text-[#111827] flex flex-col antialiased selection:bg-[#123B8E] selection:text-white pb-14 md:pb-0">
      {/* 1. Header / Navbar with mobile fast-access */}
      <Navbar onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero Section - Mobile optimized with Andrade Neves facade */}
        <Hero />

        {/* 3. Por que Lava10 - Immediate value proposition */}
        <Benefits />

        {/* 4. Como Funciona - Step sequence */}
        <HowItWorks />

        {/* 5. Serviços - Services overview */}
        <Services />

        {/* 6. Unidades - Matriz Centro & Filial Zona Norte */}
        <Locations />

        {/* 7. Google Maps - Instant loading without delay */}
        <MapSection />

        {/* Secondary informational components */}
        <Suspense fallback={<SectionFallback />}>
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

      {/* 12. Footer */}
      <Footer onOpenOwnerGuide={() => setIsOwnerGuideOpen(true)} />

      {/* 13. Mobile Bottom Sticky Navigation Bar */}
      <MobileBottomBar />

      {/* 14. Botão Flutuante de WhatsApp */}
      <WhatsAppButton />

      {/* Guia de Configuração (aberto sob demanda) */}
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
