
import React from 'react';
import { Search } from 'lucide-react';
import { agentTypes } from '@/components/agents/AgentFilter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface MobileSearchAndFilterProps {
  selectedTypes: string[];
  handleTypeSelect: (type: string) => void;
  handleTypeClear: () => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const MobileSearchAndFilter = ({
  selectedTypes,
  handleTypeSelect,
  handleTypeClear,
  searchTerm,
  onSearchChange
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

      <div className="mt-4">
        <p className="text-sm font-medium mb-2">Search agents</p>
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search agents..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 w-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileSearchAndFilter;
