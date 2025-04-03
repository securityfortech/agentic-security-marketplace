
import React from 'react';
import { Agent } from '@/data/agents/types';
import MarketplaceHeader from './MarketplaceHeader';
import FilterControls from './FilterControls';
import AgentHireHandler from './AgentHireHandler';
import { useAgentFilter } from '@/hooks/use-agent-filter';

interface MarketplaceContentProps {
  agents: Agent[];
  isPublic?: boolean;
}

const MarketplaceContent: React.FC<MarketplaceContentProps> = ({ 
  agents,
  isPublic = false
}) => {
  const {
    searchTerm,
    selectedTypes,
    setSearchTerm,
    handleTypeSelect,
    handleTypeClear,
    filteredAgents
  } = useAgentFilter(agents);
  
  return (
    <div className="space-y-6">
      <MarketplaceHeader title="Agent Marketplace" />
      
      <FilterControls
        searchTerm={searchTerm}
        selectedTypes={selectedTypes}
        onSearchChange={setSearchTerm}
        onTypeSelect={handleTypeSelect}
        onTypeClear={handleTypeClear}
      />
      
      <AgentHireHandler 
        agents={filteredAgents}
        isPublic={isPublic}
      />
    </div>
  );
};

export default MarketplaceContent;
