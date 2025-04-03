
import React from 'react';
import { agentTypes } from '@/components/agents/AgentFilter';
import { Button } from '@/components/ui/button';

interface MobileSearchAndFilterProps {
  selectedTypes: string[];
  handleTypeSelect: (type: string) => void;
  handleTypeClear: () => void;
}

const MobileSearchAndFilter = ({
  selectedTypes,
  handleTypeSelect,
  handleTypeClear
}: MobileSearchAndFilterProps) => {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium">Filter by type</p>
            {selectedTypes.length > 0 && (
              <Button variant="ghost" size="sm" onClick={handleTypeClear} className="h-auto py-1 px-2 text-xs">
                Clear filters
              </Button>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {agentTypes.map((type) => (
              <Button 
                key={type} 
                variant={selectedTypes.includes(type) ? "default" : "outline"} 
                className="rounded-full text-xs h-8"
                onClick={() => handleTypeSelect(type)}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSearchAndFilter;

