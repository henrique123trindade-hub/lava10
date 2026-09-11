import React, { useState } from 'react';
import { business } from '../config/business';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // If WHATSAPP_NUMBER is empty, automatically hide to avoid broken/invalid links
  const cleanPhone = business.whatsapp.replace(/\D/g, '');
  if (!cleanPhone || cleanPhone.length < 8) {
    return null;
  }

  const whatsappUrl = `https://wa.me/55${cleanPhone}?text=${encodeURIComponent(
    business.whatsappDefaultMessage
  )}`;

  return (
    <aside
      aria-label="Atendimento via WhatsApp"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div
        className={`hidden sm:block px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-medium shadow-md transition-opacity duration-200 pointer-events-none ${
          showTooltip ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Fale conosco
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="btn-whatsapp-flutuante"
        aria-label="Falar conosco pelo WhatsApp"
        className="w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg transition-transform active:scale-95"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </aside>
  );
};
