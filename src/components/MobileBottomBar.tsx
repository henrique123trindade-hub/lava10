import React from 'react';
import { MapPin, MessageCircle, Clock, Navigation } from 'lucide-react';
import { business } from '../config/business';

export const MobileBottomBar: React.FC = () => {
  const cleanPhone = business.whatsapp.replace(/\D/g, '');
  const hasWhatsApp = cleanPhone.length >= 8;
  const whatsappUrl = hasWhatsApp
    ? `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(business.whatsappDefaultMessage)}`
    : '#contato';

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg safe-bottom">
      <div className="flex items-center justify-around gap-2 max-w-md mx-auto">
        {/* Button 1: Como Chegar */}
        <a
          href="#mapa"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-gray-700 hover:text-[#123B8E] active:bg-slate-100 transition-colors"
        >
          <Navigation className="w-5 h-5 text-[#123B8E] mb-0.5" />
          <span className="text-[11px] font-bold">Ver Mapa</span>
        </a>

        {/* Button 2: WhatsApp (Primary Accent) */}
        <a
          href={whatsappUrl}
          target={hasWhatsApp ? '_blank' : undefined}
          rel="noopener noreferrer"
          className="flex-1.2 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white active:scale-98 transition-all shadow-sm"
        >
          <MessageCircle className="w-4 h-4 fill-white shrink-0" />
          <span className="text-xs font-bold whitespace-nowrap">WhatsApp</span>
        </a>

        {/* Button 3: Unidades & 24h */}
        <a
          href="#unidades"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-gray-700 hover:text-[#123B8E] active:bg-slate-100 transition-colors"
        >
          <Clock className="w-5 h-5 text-emerald-600 mb-0.5" />
          <span className="text-[11px] font-bold">Unidades</span>
        </a>
      </div>
    </div>
  );
};
