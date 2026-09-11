import React, { useRef, useState } from 'react';
import { Camera, Check, RefreshCw, Trash2, X, ChevronUp, Image as ImageIcon } from 'lucide-react';
import { useCustomPhotos } from '../context/CustomPhotosContext';

export const PhotoManagerWidget: React.FC = () => {
  const {
    matrizPhoto,
    filialPhoto,
    setMatrizPhotoFromFile,
    setFilialPhotoFromFile,
    resetMatrizPhoto,
    resetFilialPhoto,
    isProcessing,
  } = useCustomPhotos();

  const [isOpen, setIsOpen] = useState(false);
  const matrizInputRef = useRef<HTMLInputElement>(null);
  const filialInputRef = useRef<HTMLInputElement>(null);

  const handleMatrizFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await setMatrizPhotoFromFile(file, true);
    }
  };

  const handleFilialFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await setFilialPhotoFromFile(file, true);
    }
  };

  const hasBoth = Boolean(matrizPhoto && filialPhoto);

  return (
    <>
      {/* Floating Toggle Button in Bottom Left */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full shadow-2xl transition-all duration-200 border cursor-pointer text-xs font-bold ${
            hasBoth
              ? 'bg-[#123B8E] hover:bg-[#0E2A6D] text-white border-white/20'
              : 'bg-[#F5C400] hover:bg-[#E5B400] text-slate-950 border-amber-500 shadow-amber-500/20 animate-pulse'
          }`}
          title="Gerenciar fotos das fachadas da Matriz e Filial"
        >
          <Camera className="w-4 h-4" />
          <span>{hasBoth ? 'Fotos da Fachada' : 'Definir Fotos da Fachada'}</span>
          {isOpen ? <ChevronUp className="w-3.5 h-3.5 rotate-180 transition-transform" /> : <ChevronUp className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Floating Modal / Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 left-6 z-50 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden text-slate-800 animate-fade-in font-sans">
          {/* Header */}
          <div className="bg-[#123B8E] text-white px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-[#F5C400]" />
              <h3 className="font-black text-sm">Fotos das Fachadas Lava10</h3>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-md transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 space-y-4 max-h-[80vh] overflow-y-auto">
            <p className="text-xs text-slate-600 leading-relaxed">
              Carregue ou substitua as fotos reais de cada unidade para exibição imediata e permanente em todo o site.
            </p>

            {/* 1. Matriz Centro */}
            <div className="border border-slate-200 rounded-xl p-3 bg-slate-50/70">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-xs font-bold text-[#123B8E] block">1. Matriz (Centro)</span>
                  <span className="text-[11px] text-slate-500">Rua Andrade Neves, 1620</span>
                </div>
                {matrizPhoto ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <Check className="w-3 h-3" /> Ativa
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Pendente
                  </span>
                )}
              </div>

              {matrizPhoto ? (
                <div className="space-y-2">
                  <div className="w-full h-28 rounded-lg overflow-hidden border border-slate-200 bg-slate-900 relative">
                    <img
                      src={matrizPhoto}
                      alt="Miniatura Matriz"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => matrizInputRef.current?.click()}
                      disabled={isProcessing}
                      className="flex-1 py-1.5 px-3 bg-[#123B8E] hover:bg-[#0E2A6D] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Trocar Foto</span>
                    </button>
                    <button
                      type="button"
                      onClick={resetMatrizPhoto}
                      disabled={isProcessing}
                      className="py-1.5 px-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                      title="Remover foto da Matriz"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => matrizInputRef.current?.click()}
                  disabled={isProcessing}
                  className="w-full py-2.5 px-3 bg-[#F5C400] hover:bg-[#E5B400] text-slate-950 font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <Camera className="w-4 h-4" />
                  <span>Selecionar Foto da Matriz</span>
                </button>
              )}
              <input
                ref={matrizInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleMatrizFile}
              />
            </div>

            {/* 2. Filial Zona Norte */}
            <div className="border border-slate-200 rounded-xl p-3 bg-slate-50/70">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-xs font-bold text-emerald-800 block">2. Filial (Zona Norte)</span>
                  <span className="text-[11px] text-slate-500">Unidade 24 Horas</span>
                </div>
                {filialPhoto ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <Check className="w-3 h-3" /> Ativa
                  </span>
                ) : (
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                    Pendente
                  </span>
                )}
              </div>

              {filialPhoto ? (
                <div className="space-y-2">
                  <div className="w-full h-28 rounded-lg overflow-hidden border border-slate-200 bg-slate-900 relative">
                    <img
                      src={filialPhoto}
                      alt="Miniatura Filial"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => filialInputRef.current?.click()}
                      disabled={isProcessing}
                      className="flex-1 py-1.5 px-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Trocar Foto</span>
                    </button>
                    <button
                      type="button"
                      onClick={resetFilialPhoto}
                      disabled={isProcessing}
                      className="py-1.5 px-2.5 bg-rose-50 hover:bg-rose-100 text-rose-700 text-xs font-semibold rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                      title="Remover foto da Filial"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => filialInputRef.current?.click()}
                  disabled={isProcessing}
                  className="w-full py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
                >
                  <Camera className="w-4 h-4" />
                  <span>Selecionar Foto da Filial</span>
                </button>
              )}
              <input
                ref={filialInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFilialFile}
              />
            </div>

            <div className="text-[11px] text-slate-500 bg-blue-50/60 p-2.5 rounded-lg border border-blue-100">
              💡 <strong>Dica:</strong> Você também pode arrastar os arquivos das fotos diretamente para cima da fachada no site ou colar com <kbd className="px-1 py-0.5 bg-white rounded border border-slate-300 font-mono text-[10px]">Ctrl+V</kbd>.
            </div>
          </div>
        </div>
      )}
    </>
  );
};
