import React, { useRef, useState } from 'react';
import { Lava10Emblem } from './Lava10Emblem';
import { MapPin, Camera, UploadCloud, Loader2 } from 'lucide-react';
import { useCustomPhotos } from '../context/CustomPhotosContext';

interface MatrizFacadeProps {
  className?: string;
}

export const MatrizFacade: React.FC<MatrizFacadeProps> = ({
  className = 'w-full h-full',
}) => {
  const { 
    matrizPhoto, 
    setMatrizPhotoFromFile, 
    resetMatrizPhoto,
    isProcessing,
  } = useCustomPhotos();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!matrizPhoto) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (matrizPhoto) return; // Locked: cannot be replaced
    const file = e.dataTransfer.files?.[0];
    if (file) {
      await setMatrizPhotoFromFile(file);
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (matrizPhoto) return; // Locked: cannot be replaced
    const file = e.target.files?.[0];
    if (file) {
      await setMatrizPhotoFromFile(file);
    }
  };

  // If the user's actual photo is active
  if (matrizPhoto) {
    return (
      <div className={`relative overflow-hidden group select-none bg-slate-900 ${className}`}>
        {/* Optimized for mobile and desktop */}
        <img
          src={matrizPhoto}
          alt="Foto oficial da fachada da Lava10 Matriz na Rua Andrade Neves, 1620, Centro"
          className="w-full h-full object-cover object-top sm:object-cover sm:object-top transition-transform duration-300 group-hover:scale-[1.01]"
          loading="eager"
          decoding="sync"
          onError={() => {
            console.warn('Foto da Matriz falhou ao carregar. Resetando para restaurar visual.');
            resetMatrizPhoto();
          }}
        />

        {/* Location badge */}
        <div className="absolute bottom-3 left-3 bg-slate-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2 text-xs border border-white/15">
          <MapPin className="w-3.5 h-3.5 text-[#F5C400]" />
          <span className="font-semibold">Matriz Centro &bull; Rua Andrade Neves, 1620</span>
        </div>

        {/* Official verified badge + Change photo button */}
        <div className="absolute top-3 right-3 flex items-center gap-2 z-20">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            title="Trocar foto da Matriz"
            className="bg-slate-900/80 hover:bg-[#123B8E] text-white px-2.5 py-1 rounded-md shadow-md text-[11px] font-bold flex items-center gap-1.5 border border-white/20 transition-colors cursor-pointer"
          >
            <Camera className="w-3.5 h-3.5 text-[#F5C400]" />
            <span className="hidden sm:inline">Trocar Foto</span>
          </button>
          <div className="bg-[#123B8E]/90 backdrop-blur-md text-white px-2.5 py-1 rounded-md shadow-md text-[11px] font-bold flex items-center gap-1.5 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
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
              await setMatrizPhotoFromFile(file, true);
            }
          }}
        />
      </div>
    );
  }

  // Visual layout when photo has not been selected yet
  return (
    <div 
      className={`relative overflow-hidden bg-slate-900 select-none flex flex-col justify-between ${className}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Drag over indicator */}
      {isDragOver && (
        <div className="absolute inset-0 bg-[#123B8E]/95 backdrop-blur-xs flex flex-col items-center justify-center text-white z-40 border-4 border-dashed border-[#F5C400]">
          <UploadCloud className="w-16 h-16 text-[#F5C400] animate-bounce mb-3" />
          <p className="font-black text-xl">Solte a foto da Andrade Neves aqui!</p>
          <p className="text-sm text-blue-200 mt-1">A imagem será aplicada imediatamente</p>
        </div>
      )}

      {/* 1. UPPER BUILDING WALL & MAIN FASCIA */}
      <div className="relative z-10 w-full bg-[#f8fafc] shadow-md border-b border-slate-200">
        <div className="bg-[#ECE8E1] border-b border-slate-300 px-4 py-1 flex items-center justify-between">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#123B8E] border-2 border-white shadow-sm flex items-center justify-center p-0.5">
            <Lava10Emblem size="100%" />
          </div>
          <div className="h-2.5 sm:h-3.5 w-40 sm:w-64 bg-[#123B8E] rounded-xs" />
        </div>

        <div className="px-4 py-3 sm:py-4 relative flex items-center justify-center">
          <div className="text-center pr-12 sm:pr-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-[#123B8E] tracking-tight uppercase leading-none font-['Montserrat',sans-serif]">
              LAVANDERIA
            </h2>
            <p className="text-[11px] sm:text-xs md:text-sm font-extrabold text-[#123B8E] tracking-[0.25em] uppercase leading-tight mt-1">
              AUTO ATENDIMENTO
            </p>
          </div>

          <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex items-center drop-shadow-xl">
            <div className="flex flex-col gap-2.5 mr-1">
              <div className="w-2 h-1 bg-slate-800" />
              <div className="w-2 h-1 bg-slate-800" />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#123B8E] border-2 sm:border-3 border-white shadow-xl flex flex-col items-center justify-center text-white p-1 text-center transform rotate-[-4deg]">
              <span className="text-[6px] sm:text-[7px] font-black tracking-wider leading-none">LAVANDERIA</span>
              <div className="my-0.5 w-5 sm:w-7 h-3.5 sm:h-5 flex items-center justify-center">
                <Lava10Emblem size="100%" />
              </div>
              <span className="text-[5px] sm:text-[6px] font-bold text-blue-100 leading-none">AUTO</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. STOREFRONT GLASS & PROMINENT UPLOAD HERO CALLOUT */}
      <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center p-4">
        <img
          src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=1200&q=80"
          alt="Interior com lavadoras industriais da Lava10 Matriz"
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover filter brightness-90 contrast-105"
        />

        {/* Central Dedicated Photo Selection Box */}
        <div className="relative z-20 max-w-sm w-full bg-slate-950/85 backdrop-blur-md rounded-2xl p-4 sm:p-5 border-2 border-white/30 text-center shadow-2xl text-white">
          <div className="w-12 h-12 rounded-full bg-[#123B8E] text-[#F5C400] flex items-center justify-center mx-auto mb-3 shadow-lg border border-white/20">
            <Camera className="w-6 h-6" />
          </div>

          <h3 className="font-extrabold text-base sm:text-lg mb-1">
            Usar Sua Foto da Fachada
          </h3>
          <p className="text-xs text-slate-300 mb-4 leading-relaxed">
            Selecione o arquivo da foto no seu computador ou celular, ou arraste e solte o arquivo diretamente nesta área:
          </p>

          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isProcessing}
            className="w-full bg-[#F5C400] hover:bg-[#E5B400] text-slate-900 font-extrabold py-3 px-4 rounded-xl shadow-xl flex items-center justify-center gap-2 transition-transform transform active:scale-95 cursor-pointer text-sm"
          >
            {isProcessing ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <UploadCloud className="w-5 h-5" />
            )}
            <span>Selecionar Foto do Meu Arquivo</span>
          </button>

          <p className="text-[11px] text-slate-400 mt-2.5">
            Dica: você também pode colar a foto com <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono text-white">Ctrl + V</kbd>
          </p>
        </div>

        {/* Sliding Door Frame */}
        <div className="absolute inset-0 border-4 border-white/70 pointer-events-none" />
      </div>

      {/* 3. GROUND SIDEWALK & LOCATION BADGE */}
      <div className="relative z-10 w-full bg-slate-800 border-t-2 border-slate-600 px-4 py-2 flex items-center justify-between text-white text-xs">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-[#F5C400] flex-shrink-0" />
          <span className="font-bold text-white text-[11px] sm:text-xs">
            Matriz Centro: Rua Andrade Neves, 1620
          </span>
        </div>
        <span className="bg-[#123B8E] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
          Unidade Principal
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
