
import React from 'react';
import MarketplaceContent from '@/components/marketplace/MarketplaceContent';
import PublicHeader from '@/components/marketplace/PublicHeader';
import PublicFooter from '@/components/marketplace/PublicFooter';
import { marketplaceAgents } from '@/components/marketplace/marketplaceData';
import { useAuth } from '@/contexts/AuthContext';

interface MarketplaceProps {
  isPublic?: boolean;
}

const Marketplace: React.FC<MarketplaceProps> = ({ isPublic = false }) => {
  const { user } = useAuth();
  
  // Render public marketplace view with header and footer
  if (isPublic) {
    return (
      <div className="min-h-screen flex flex-col">
        <PublicHeader />

        {/* Main content */}
        <main className="flex-1 bg-background p-4 md:p-6">
          <div className="container mx-auto max-w-7xl">
            <MarketplaceContent 
              agents={marketplaceAgents} 
              isPublic={true} 
            />
          </div>
        </main>
        
        <PublicFooter />
      </div>
    );
  }
  
  // Render authenticated marketplace view (within Layout component)
  return <MarketplaceContent agents={marketplaceAgents} isPublic={false} />;
};

export default Marketplace;
