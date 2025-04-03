
import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';

interface MarketplaceHeaderProps {
  title: string;
  actions?: ReactNode;
}

const MarketplaceHeader = ({ title, actions }: MarketplaceHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
};

export default MarketplaceHeader;
