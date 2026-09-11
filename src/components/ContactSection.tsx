import React, { useState } from 'react';
import { business } from '../config/business';
import { MessageCircle, Instagram, MapPin, ExternalLink, AlertCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [showConfigNotice, setShowConfigNotice] = useState(false);

  const cleanPhone = business.whatsapp.replace(/\D/g, '');
  const hasWhatsApp = cleanPhone.length >= 8;
  const whatsappUrl = hasWhatsApp
    ? `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`
    : '#';

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!hasWhatsApp) {
      e.preventDefault();
      setShowConfigNotice(true);
    }
  };

  return (
    <section id="contato" className="py-20 md:py-24 bg-[#F8FAFC] border-t-2 border-[#123B8E]/15 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200/70 text-[#123B8E] text-xs font-bold uppercase tracking-wider mb-3">
          <span>Atendimento & Contato</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
          Precisa de ajuda?
        </h2>

        <p className="text-lg text-gray-600 max-w-lg mx-auto mb-10 leading-relaxed">
          Fale diretamente com a equipe da Lava10. Estamos à disposição para tirar dúvidas sobre o funcionamento ou unidades.
        </p>

        {/* Priority Action: WhatsApp & Channels */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={whatsappUrl}
            target={hasWhatsApp ? '_blank' : undefined}
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            id="btn-contato-whatsapp"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base transition-colors shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar pelo WhatsApp</span>
          </a>

          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-slate-200/80 text-gray-800 font-semibold text-base hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <Instagram className="w-5 h-5 text-[#123B8E]" />
            <span>Instagram</span>
          </a>

          <a
            href="#unidades"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white border border-slate-200/80 text-gray-800 font-semibold text-base hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <MapPin className="w-5 h-5 text-[#123B8E]" />
            <span>Ver Unidades</span>
          </a>
        </div>

        {/* Notice if WhatsApp is not set in config yet */}
        {showConfigNotice && !hasWhatsApp && (
          <div className="max-w-md mx-auto p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs text-left mb-8 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Número de WhatsApp em configuração</p>
              <p className="mt-1 text-gray-600">
                O número pode ser preenchido em <code className="font-mono bg-amber-100 px-1 py-0.5 rounded">src/config/business.ts</code>. Enquanto isso, fale conosco pelo Instagram!
              </p>
              <button
                onClick={() => setShowConfigNotice(false)}
                className="mt-2 font-bold text-amber-800 underline"
              >
                Entendi
              </button>
            </div>
          </div>
        )}

        <p className="text-xs text-gray-500">
          Atendimento aos clientes em {business.city} - {business.state}
        </p>

      </div>
    </section>
  );
};
