import React from 'react';
import { Logo } from './Logo';
import { business } from '../config/business';
import { Instagram, MapPin, Clock, MessageCircle, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenOwnerGuide?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenOwnerGuide }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanPhone = business.whatsapp.replace(/\D/g, '');
  const hasWhatsApp = cleanPhone.length >= 8;
  const whatsappUrl = hasWhatsApp
    ? `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`
    : '#contato';

  const formatPhoneNumber = (phone: string) => {
    const digits = phone.replace(/\D/g, '');
    if (digits.length === 11) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    }
    if (digits.length === 10) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
    return phone;
  };

  return (
    <footer
      id="rodape"
      itemScope
      itemType="https://schema.org/Organization"
      className="bg-[#0E2A6D] text-white py-16 border-t border-blue-900"
    >
      <meta itemProp="name" content="Lava10 Lavanderia Automática" />
      <meta itemProp="url" content="https://www.instagram.com/lava10lavanderia/" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Brand, Units, Contact, Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <Logo size="md" isLight />
            <p className="text-xs text-blue-200/90 mt-3 leading-relaxed max-w-sm">
              Lavanderia automática de autoatendimento em {business.city} - {business.state}.
              Praticidade e rapidez com dosagem automática de sabão e amaciante profissional.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-blue-300">
              <MapPin className="w-3.5 h-3.5 text-[#F5C400]" />
              <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressLocality">{business.city}</span> - <span itemProp="addressRegion">{business.state}</span>, <span itemProp="addressCountry">{business.country}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Unidades Locais (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-4">
              Nossas Unidades
            </h4>
            <div className="space-y-4 text-xs text-blue-100">
              {business.units.map((unit) => (
                <div key={unit.id} className="border-l-2 border-[#F5C400] pl-3 py-0.5">
                  <p className="font-semibold text-white">{unit.name}</p>
                  {unit.address ? (
                    <p className="text-blue-200/80 mt-0.5">
                      {unit.address}, {unit.neighborhood || 'Centro'} &bull; {unit.city}
                    </p>
                  ) : (
                    <p className="text-blue-200/70 italic mt-0.5">
                      Zona Norte &bull; {business.city} - {business.state}
                    </p>
                  )}
                  <p className="text-blue-300/80 flex items-center gap-1.5 mt-1 font-medium">
                    <Clock className="w-3 h-3 text-[#F5C400]" />
                    <span>{unit.hours}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Contato & Atendimento (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-4">
              Atendimento
            </h4>
            <ul className="space-y-3 text-xs text-blue-100">
              <li>
                <a
                  href={whatsappUrl}
                  target={hasWhatsApp ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>
                    {hasWhatsApp ? formatPhoneNumber(business.whatsapp) : 'Fale pelo WhatsApp'}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#F5C400]" />
                  <span>{business.instagramHandle}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Links Rápidos (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200 mb-4">
              Navegação
            </h4>
            <nav className="flex flex-col space-y-2 text-xs text-blue-100">
              <a href="#hero" className="hover:text-white transition-colors">
                Início
              </a>
              <a href="#como-funciona" className="hover:text-white transition-colors">
                Como funciona
              </a>
              <a href="#servicos" className="hover:text-white transition-colors">
                Serviços
              </a>
              <a href="#unidades" className="hover:text-white transition-colors">
                Unidades & Mapa
              </a>
              <a href="#duvidas" className="hover:text-white transition-colors">
                Dúvidas comuns
              </a>
              <a href="#contato" className="hover:text-white transition-colors">
                Contato
              </a>
            </nav>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Config Guide Trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60">
          <p>
            &copy; 2026 Lava10 Lavanderia Automática &bull; Cachoeira do Sul - RS. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            {onOpenOwnerGuide && (
              <button
                type="button"
                onClick={onOpenOwnerGuide}
                className="hover:text-blue-100 transition-colors cursor-pointer text-xs"
              >
                Configurar dados
              </button>
            )}

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
              aria-label="Voltar ao início da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
