import React, { useRef, useState } from 'react';
import { Lava10Emblem } from './Lava10Emblem';
import { MapPin, Clock, Camera, UploadCloud, Loader2 } from 'lucide-react';
import { useCustomPhotos } from '../context/CustomPhotosContext';

interface FilialFacadeProps {
  className?: string;
}

export const FilialFacade: React.FC<FilialFacadeProps> = ({
  className = 'w-full h-full',
}) => {
  const { filialPhoto, setFilialPhotoFromFile, resetFilialPhoto, isProcessing } = useCustomPhotos();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      await setFilialPhotoFromFile(file, true);
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await setFilialPhotoFromFile(file, true);
    }
  };

  if (filialPhoto) {
    return (
      <div className={`relative overflow-hidden group select-none ${className}`}>
        {/* Optimized for mobile and desktop framing */}
        <img
          src={filialPhoto}
          alt="Foto oficial da fachada da Lava10 Filial Zona Norte"
          className="w-full h-full object-cover object-top sm:object-cover sm:object-top transition-transform duration-500 group-hover:scale-[1.01]"
          loading="eager"
          decoding="sync"
          onError={() => {
            console.warn('Foto da Filial falhou ao carregar. Resetando.');
            resetFilialPhoto();
          }}
        />

        <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 text-xs border border-white/15">
          <MapPin className="w-3.5 h-3.5 text-[#F5C400]" />
          <span className="font-semibold">Filial Zona Norte &bull; Aberto 24 Horas</span>
        </div>

        {/* Action Controls: Badge + "Trocar foto" button on hover/click */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Trocar foto da Filial"
            className="bg-slate-900/80 hover:bg-[#123B8E] text-white px-2.5 py-1 rounded-md shadow-md text-[11px] font-bold flex items-center gap-1.5 border border-white/20 transition-colors cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-[#F5C400]" />
            <span className="hidden sm:inline">Trocar Foto</span>
          </button>
          <div className="bg-emerald-600/90 backdrop-blur-md text-white px-2.5 py-1 rounded-md shadow-md text-[11px] font-bold flex items-center gap-1.5 border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span>Foto Oficial</span>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (file) {
              await setFilialPhotoFromFile(file, true);
            }
          }}
        />
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden bg-slate-900 select-none flex flex-col justify-between ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {isDragOver && (
        <div className="absolute inset-0 bg-[#123B8E]/95 backdrop-blur-xs flex flex-col items-center justify-center text-white z-40 border-4 border-dashed border-emerald-400">
          <UploadCloud className="w-14 h-14 text-emerald-400 animate-bounce mb-3" />
          <p className="font-bold text-lg">Solte a foto da Filial Zona Norte aqui!</p>
          <p className="text-xs text-blue-200 mt-1">A imagem será aplicada instantaneamente</p>
        </div>
      )}

      {/* 1. TOP ROYAL BLUE BANNER */}
      <div className="relative z-10 w-full bg-gradient-to-r from-[#0E2A6D] via-[#123B8E] to-[#0A1E4A] px-4 py-2 sm:py-2.5 border-b-2 border-white/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white flex items-center justify-center shadow-md">
            <MapPin className="w-3.5 h-3.5 text-[#0E2A6D] fill-[#0E2A6D]" />
          </div>
          <div>
            <h3 className="text-xs sm:text-sm font-black text-white tracking-wider uppercase leading-none font-['Montserrat',sans-serif]">
              LOCALIZAÇÃO DA LAVANDERIA
            </h3>
            <p className="text-[10px] font-semibold text-blue-200 mt-0.5">
              Lava10 Filial &bull; Zona Norte &bull; 24 Horas
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1 opacity-80">
          <div className="w-3 h-3 rounded-full border-2 border-[#F5C400]" />
          <div className="w-2 h-2 rounded-full border-2 border-white" />
        </div>
      </div>

      {/* 2. SIGNBOARD */}
      <div className="relative z-10 w-full bg-white px-4 py-2 sm:py-2.5 text-center border-b border-slate-200 shadow-sm">
        <h2 className="text-lg sm:text-xl font-black text-[#123B8E] tracking-tight uppercase leading-none font-['Montserrat',sans-serif]">
          LAVANDERIA
        </h2>
        <p className="text-[10px] sm:text-xs font-extrabold text-[#123B8E] tracking-[0.25em] uppercase leading-tight mt-0.5">
          AUTO ATENDIMENTO
        </p>
      </div>

      {/* 3. STOREFRONT INTERIOR WITH AUTHENTIC DECALS */}
      <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1521656693074-0ef32e80a5d5?auto=format&fit=crop&w=1200&q=80"
          alt="Fachada e máquinas profissionais da Lava10 Filial Zona Norte"
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover filter brightness-95 contrast-105"
        />

        {/* Framing */}
        <div className="absolute inset-0 border-4 border-white/80 pointer-events-none" />

        {/* Commercial Decals from Real Photo */}
        <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex items-center justify-around gap-1 pointer-events-none">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-[#0284C7] shadow-xl flex flex-col items-center justify-center p-0.5 text-center transform -rotate-2">
            <span className="text-[7px] font-black text-slate-800 leading-none">Aqui!</span>
            <span className="text-xs font-black text-[#0284C7] leading-none my-0.5">OMO</span>
            <div className="bg-[#1E3A8A] text-white px-1 py-0.2 rounded-full text-[6px] font-bold italic leading-none">
              Comfort
            </div>
          </div>

          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#1D4ED8] to-[#1E3A8A] border-2 border-white shadow-xl flex flex-col items-center justify-center text-white p-0.5 text-center">
            <span className="text-[8px] font-black leading-none">LAVE</span>
            <span className="text-[6px] font-bold text-[#FDE047] leading-none my-0.5">ou SEQUE</span>
            <span className="text-[6px] font-extrabold text-blue-200 leading-none">EM 30 MIN</span>
          </div>

          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#FDE047] to-[#EAB308] border-2 border-[#1D4ED8] shadow-xl flex flex-col items-center justify-center text-[#0E2A6D] p-0.5 text-center">
            <span className="text-[6px] font-bold leading-none">EM MÉDIA</span>
            <span className="text-sm font-black leading-none my-0.5">20</span>
            <span className="text-[7px] font-black leading-none">PEÇAS</span>
          </div>

          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#FDE047] to-[#FACC15] border-2 border-[#1D4ED8] shadow-xl flex flex-col items-center justify-center text-[#0E2A6D] p-0.5 text-center transform rotate-2">
            <span className="text-[6px] font-bold leading-none">POR APENAS</span>
            <span className="text-[9px] font-black text-[#123B8E] leading-none my-0.5">R$ 15,90</span>
            <span className="text-[5px] font-bold text-slate-800 leading-none">por ciclo</span>
          </div>
        </div>

        {/* Direct Upload Button */}
        <div className="absolute top-2 right-2 z-20">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold px-2.5 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5 border border-white/80 transition-all cursor-pointer"
          >
            {isProcessing ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
            ) : (
              <Camera className="w-3.5 h-3.5 text-white" />
            )}
            <span>Carregar Foto</span>
          </button>
        </div>

        {/* 24H Highlight Badge */}
        <div className="absolute right-2 bottom-3 bg-emerald-600/95 text-white backdrop-blur-xs px-2 py-1 rounded shadow-md flex items-center gap-1 text-[10px] font-bold border border-emerald-400 pointer-events-none">
          <Clock className="w-3 h-3" />
          <span>24 Horas</span>
        </div>
      </div>

      {/* 4. GROUND BAR */}
      <div className="relative z-10 w-full bg-slate-800 border-t-2 border-slate-700 px-4 py-1.5 flex items-center justify-between text-white text-xs">
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#F5C400] flex-shrink-0" />
          <span className="font-bold text-white text-[11px]">
            Lava10 Filial: Zona Norte
          </span>
        </div>
        <span className="bg-emerald-600 text-white px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider">
          24 Horas
        </span>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileInput}
      />
    </div>
  );
};
