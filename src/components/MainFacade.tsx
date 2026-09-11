import React, { useState } from 'react';
import { MapPin, Sparkles } from 'lucide-react';

interface MainFacadeProps {
  className?: string;
}

export const MainFacade: React.FC<MainFacadeProps> = ({
  className = 'w-full h-full',
}) => {
  const [imgSrc, setImgSrc] = useState('/images/fachada-andrade-neves.jpg');

  const handleError = () => {
    if (imgSrc === '/images/fachada-andrade-neves.jpg') {
      setImgSrc('/images/fachada-principal.jpg');
    } else if (imgSrc !== '/images/fachada-andrade-neves.svg') {
      setImgSrc('/images/fachada-andrade-neves.svg');
    }
  };

  return (
    <div className={`relative overflow-hidden group select-none bg-slate-900 ${className}`}>
      {/* Official Fixed Photo of Main Facade */}
      <img
        src={imgSrc}
        alt="Foto oficial da Fachada Principal da Lava10 Lavanderia Autoatendimento"
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
        loading="eager"
        decoding="sync"
        referrerPolicy="no-referrer"
        onError={handleError}
      />

      {/* Badge Fachada Principal */}
      <div className="absolute top-3 right-3 bg-[#123B8E]/95 backdrop-blur-md text-white px-3 py-1 rounded-md shadow-md text-xs font-bold flex items-center gap-1.5 border border-white/20 pointer-events-none">
        <Sparkles className="w-3.5 h-3.5 text-[#F5C400]" />
        <span>Fachada Principal</span>
      </div>

      {/* Location Badge */}
      <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 text-xs border border-white/15 pointer-events-none">
        <MapPin className="w-3.5 h-3.5 text-[#F5C400]" />
        <span className="font-semibold">Lava10 Lavanderia • Cachoeira do Sul - RS</span>
      </div>
    </div>
  );
};
