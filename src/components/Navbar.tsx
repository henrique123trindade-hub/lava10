import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, MessageCircle, MapPin } from 'lucide-react';
import { business } from '../config/business';

interface NavbarProps {
  onOpenOwnerGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOwnerGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cleanPhone = business.whatsapp.replace(/\D/g, '');
  const hasWhatsApp = cleanPhone.length >= 8;
  const whatsappUrl = hasWhatsApp
    ? `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`
    : '#contato';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer if screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#hero' },
    { label: 'Unidades', href: '#unidades' },
    { label: 'Mapa', href: '#mapa' },
    { label: 'Como funciona', href: '#como-funciona' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Dúvidas', href: '#duvidas' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs'
          : 'bg-white border-b border-gray-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo Lava10 */}
          <a
            href="#hero"
            className="flex items-center focus:outline-hidden"
            aria-label="Lava10 Lavanderia Automática - Ir para o início"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-[#123B8E] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#unidades"
              id="nav-btn-unidades"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-[#123B8E] text-white text-sm font-semibold hover:bg-[#0E2A6D] transition-colors shadow-xs"
            >
              Encontrar Unidade
            </a>
          </div>

          {/* Mobile Right Controls: Fast Map & Menu Button */}
          <div className="flex items-center gap-1.5 md:hidden">
            <a
              href="#mapa"
              className="p-2.5 rounded-lg text-gray-700 hover:text-[#123B8E] active:bg-slate-100 transition-colors flex items-center gap-1 text-xs font-bold"
              aria-label="Ver mapa"
            >
              <MapPin className="w-4 h-4 text-[#123B8E]" />
              <span className="hidden xs:inline">Mapa</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-gray-800 hover:text-[#123B8E] active:bg-slate-100 focus:outline-hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 top-16 bg-black/40 backdrop-blur-xs z-40 animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          <nav className="relative z-50 bg-white border-b border-gray-200 px-5 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col divide-y divide-gray-100">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-800 hover:text-[#123B8E] py-3 transition-colors active:text-[#123B8E]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 flex flex-col gap-2">
              <a
                href="#unidades"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center py-3.5 px-4 rounded-xl bg-[#123B8E] text-white font-bold text-sm shadow-xs"
              >
                Ver Unidades & Horários
              </a>

              {hasWhatsApp && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white font-semibold text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar no WhatsApp</span>
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
