import React from 'react';
import { MainFacade } from './MainFacade';
import { MatrizFacade } from './MatrizFacade';
import { FilialFacade } from './FilialFacade';

interface UnitImageProps {
  type: 'principal' | 'matriz' | 'filial';
  alt?: string;
  className?: string;
  priority?: boolean;
}

export const UnitImage: React.FC<UnitImageProps> = ({
  type,
  className = 'w-full h-full',
}) => {
  if (type === 'principal') {
    return <MainFacade className={className} />;
  }

  if (type === 'matriz') {
    return <MatrizFacade className={className} />;
  }

  return <FilialFacade className={className} />;
};
