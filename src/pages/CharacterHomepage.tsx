
import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useAgentFilter } from '@/hooks/use-agent-filter';
import { useToast } from '@/hooks/use-toast';
import { marketplaceAgents } from '@/components/marketplace/marketplaceData';
import HomepageHeader from '@/components/character-homepage/HomepageHeader';
import HomepageFooter from '@/components/character-homepage/HomepageFooter';
import MobileSearchAndFilter from '@/components/character-homepage/MobileSearchAndFilter';
import AgentCategories from '@/components/character-homepage/AgentCategories';

const CharacterHomepage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const {
    searchTerm,
    selectedTypes,
    setSearchTerm,
    handleTypeSelect,
    handleTypeClear,
    filteredAgents
  } = useAgentFilter(marketplaceAgents);
  
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  
  const handleHireAgent = (agent: any) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in or create an account to hire agents.",
      });
    } else {
      toast({
        title: "Agent Hired",
        description: `${agent.name} has been added to your team.`,
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <HomepageHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <main className="container mx-auto px-4 py-8">
        <MobileSearchAndFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedTypes={selectedTypes}
          handleTypeSelect={handleTypeSelect}
          handleTypeClear={handleTypeClear}
        />
        
        <AgentCategories 
          filteredAgents={filteredAgents} 
          onHireAgent={handleHireAgent} 
        />
      </main>
      
      <HomepageFooter />
    </div>
  );
};

export default CharacterHomepage;
