import React from 'react';
import { Logo } from './Logo';
import { Home, MapPin } from 'lucide-react';

interface NotFoundViewProps {
  onBackToHome: () => void;
}

export const NotFoundView: React.FC<NotFoundViewProps> = ({ onBackToHome }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 shadow-sm">
        <div className="flex justify-center mb-6">
          <Logo size="md" />
        </div>

        <span className="text-4xl font-extrabold text-gray-300 font-display block mb-3">
          404
        </span>

        <h1 className="text-2xl font-bold text-[#111827] mb-2">
          Página não encontrada
        </h1>

        <p className="text-sm text-gray-600 mb-8 leading-relaxed">
          O link que você tentou acessar não existe ou foi alterado. Todas as informações da Lava10 estão na página inicial.
        </p>

        <div className="space-y-3">
          <button
            onClick={onBackToHome}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#123B8E] text-white font-semibold text-sm hover:bg-[#0E2A6D] transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4 text-[#F5C400]" />
            <span>Voltar para o início</span>
          </button>

          <a
            href="#unidades"
            onClick={onBackToHome}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium text-xs transition-colors"
          >
            <MapPin className="w-4 h-4 text-[#123B8E]" />
            <span>Ver Unidades</span>
          </a>
        </div>
      </div>
    </div>
  );
};
