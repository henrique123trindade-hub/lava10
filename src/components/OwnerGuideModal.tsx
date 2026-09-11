import React from 'react';
import { X, CheckCircle2, Code2, Phone, MapPin, DollarSign, PlusCircle } from 'lucide-react';
import { business } from '../config/business';

interface OwnerGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerGuideModal: React.FC<OwnerGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl border border-gray-200 flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#123B8E] flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#111827]">
                Guia de Configuração da Lava10
              </h3>
              <p className="text-xs text-gray-500">
                Arquivo central: <code className="text-[#123B8E] font-mono">src/config/business.ts</code>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 text-sm text-gray-700">
          
          {/* Status summary */}
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
            <h4 className="font-bold text-[#123B8E] mb-2 flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Dados do Negócio Carregados
            </h4>
            <ul className="text-xs space-y-1 text-gray-700">
              <li>&bull; <strong>Matriz Centro:</strong> Rua Andrade Neves, 1620 (06h às 02h)</li>
              <li>&bull; <strong>Filial Zona Norte:</strong> 24 Horas</li>
              <li>&bull; <strong>Instagram:</strong> {business.instagramHandle}</li>
              <li>&bull; <strong>WhatsApp Atual:</strong> {business.whatsapp || 'Não configurado (botão suspenso automaticamente)'}</li>
            </ul>
          </div>

          {/* Guide Item 1: WhatsApp */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#111827] mb-2">
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>1. Como alterar o Telefone / WhatsApp</span>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              Abra <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-xs">src/config/business.ts</code> e preencha o campo <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-xs">whatsapp</code> com DDD:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs font-mono overflow-x-auto">
{`// src/config/business.ts
export const business = {
  whatsapp: "51999999999", // com DDD
  whatsappDefaultMessage: "Olá! Vim pelo site da Lava10...",
};`}
            </pre>
          </div>

          {/* Guide Item 2: Endereço da Filial */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#111827] mb-2">
              <MapPin className="w-4 h-4 text-[#123B8E]" />
              <span>2. Como atualizar o endereço da Filial Zona Norte</span>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              No mesmo arquivo, localize <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-xs">filial-zona-norte</code> na lista <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-xs">units</code>:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs font-mono overflow-x-auto">
{`{
  id: "filial-zona-norte",
  name: "Lava10 Filial (Zona Norte)",
  address: "Av. da Zona Norte, 123", // Preencha aqui
  mapsUrl: "https://maps.app.goo.gl/link-da-filial",
}`}
            </pre>
          </div>

          {/* Guide Item 3: Preços */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#111827] mb-2">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>3. Como cadastrar ou alterar preços</span>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              Para exibir preços nos blocos de serviços, preencha o campo <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-xs">price</code>:
            </p>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg text-xs font-mono overflow-x-auto">
{`{
  id: "lavagem",
  name: "Lavagem",
  price: "R$ 16,00",
  priceNotice: "Sabão e amaciante inclusos"
}`}
            </pre>
          </div>

          {/* Guide Item 4: Novas Unidades */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-2 text-sm font-bold text-[#111827] mb-2">
              <PlusCircle className="w-4 h-4 text-[#123B8E]" />
              <span>4. Como adicionar novas unidades</span>
            </div>
            <p className="text-xs text-gray-600">
              Basta duplicar um objeto dentro do array <code className="bg-gray-100 px-1.5 py-0.5 rounded font-mono text-xs">units</code> em <code className="font-mono text-xs">business.ts</code>.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end sticky bottom-0 rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#123B8E] text-white font-semibold text-xs hover:bg-[#0E2A6D] transition-colors"
          >
            Fechar guia
          </button>
        </div>

      </div>
    </div>
  );
};
