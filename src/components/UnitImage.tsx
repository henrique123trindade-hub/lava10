import React from 'react';
import { MatrizFacade } from './MatrizFacade';
import { FilialFacade } from './FilialFacade';

interface UnitImageProps {
  type: 'matriz' | 'filial';
  alt?: string;
  className?: string;
  priority?: boolean;
}

export const UnitImage: React.FC<UnitImageProps> = ({
  type,
  className = 'w-full h-full',
}) => {
  if (type === 'matriz') {
    return <MatrizFacade className={className} />;
  }

  return <FilialFacade className={className} />;
};
