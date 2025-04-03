
import React from 'react';
import { Agent } from '@/data/agents/types';
import MarketplaceHeader from './MarketplaceHeader';
import FilterControls from './FilterControls';
import AgentHireHandler from './AgentHireHandler';
import { useAgentFilter } from '@/hooks/use-agent-filter';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Bot } from 'lucide-react';

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
      
      <Alert className="bg-primary/5 border-primary/20">
        <Bot className="h-4 w-4 text-primary" />
        <AlertDescription>
          Browse our selection of {agents.length} security agents, ready to be deployed to your team.
        </AlertDescription>
      </Alert>
      
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
