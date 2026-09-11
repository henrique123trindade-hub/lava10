import React from 'react';
import { Lava10Emblem } from './Lava10Emblem';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  isLight?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  isLight = false,
}) => {
  const sizeMap = {
    sm: { emblem: 'w-9 h-9', title: 'text-lg', subtitle: 'text-[11px]' },
    md: { emblem: 'w-11 h-11', title: 'text-xl', subtitle: 'text-xs' },
    lg: { emblem: 'w-14 h-14', title: 'text-2xl', subtitle: 'text-sm' },
    xl: { emblem: 'w-20 h-20', title: 'text-3xl', subtitle: 'text-base' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Emblema circular oficial com máquina de lavar e cesto de roupas */}
      <div className={`${currentSize.emblem} flex-shrink-0 transition-transform duration-200 hover:scale-105 drop-shadow-xs`}>
        <Lava10Emblem size="100%" />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span
            className={`${currentSize.title} font-black tracking-tight leading-none ${
              isLight ? 'text-white' : 'text-[#123B8E]'
            }`}
          >
            LAVA<span className="text-[#F5C400]">10</span>
          </span>
          <span
            className={`${currentSize.subtitle} font-semibold uppercase tracking-wider mt-1 ${
              isLight ? 'text-blue-200' : 'text-gray-500'
            }`}
          >
            Lavanderia Automática
          </span>
        </div>
      )}
    </div>
  );
};
