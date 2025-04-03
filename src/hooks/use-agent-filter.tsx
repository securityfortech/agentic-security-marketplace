
import { useState } from 'react';
import { Agent } from '@/components/marketplace/marketplaceData';

export function useAgentFilter(agents: Agent[]) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const handleTypeSelect = (type: string) => {
    setSelectedTypes((prev) => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };
  
  const handleTypeClear = () => {
    setSelectedTypes([]);
  };
  
  const filteredAgents = agents.filter((agent) => {
    const matchesType = selectedTypes.length === 0 || 
                        selectedTypes.includes(agent.type);
    
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesType && matchesSearch;
  });

  return {
    searchTerm,
    setSearchTerm,
    selectedTypes,
    handleTypeSelect,
    handleTypeClear,
    filteredAgents
  };
}
