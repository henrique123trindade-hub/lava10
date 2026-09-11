import React, { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';

interface FilialFacadeProps {
  className?: string;
}

export const FilialFacade: React.FC<FilialFacadeProps> = ({
  className = 'w-full h-full',
}) => {
  const [imgSrc, setImgSrc] = useState('/images/fachada-zona-norte.jpg');

  const handleError = () => {
    if (imgSrc === '/images/fachada-zona-norte.jpg') {
      setImgSrc('/images/fachada-filial.jpg');
    } else if (imgSrc !== '/images/fachada-zona-norte.svg') {
      setImgSrc('/images/fachada-zona-norte.svg');
    }
  };

  return (
    <div className={`relative overflow-hidden group select-none bg-slate-900 ${className}`}>
      {/* Official Fixed Photo of Filial Zona Norte */}
      <img
        src={imgSrc}
        alt="Foto oficial da Lava 10 Filial Zona Norte - 24 Horas"
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={handleError}
      />

      {/* 24h Badge */}
      <div className="absolute top-3 right-3 bg-emerald-700/90 backdrop-blur-md text-white px-2.5 py-1 rounded-md shadow-md text-xs font-bold flex items-center gap-1.5 border border-white/20 pointer-events-none">
        <Clock className="w-3.5 h-3.5 text-emerald-300" />
        <span>Lava 10 Zona Norte • 24h</span>
      </div>

      {/* Location Badge */}
      <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 text-xs border border-white/15 pointer-events-none">
        <MapPin className="w-3.5 h-3.5 text-[#F5C400]" />
        <span className="font-semibold">Filial Zona Norte • Cachoeira do Sul</span>
      </div>
    </div>
  );
};
