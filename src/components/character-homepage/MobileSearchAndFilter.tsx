
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { agentTypes } from '@/components/agents/AgentFilter';

interface MobileSearchAndFilterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedTypes: string[];
  handleTypeSelect: (type: string) => void;
  handleTypeClear: () => void;
}

const MobileSearchAndFilter = ({
  searchTerm,
  setSearchTerm,
  selectedTypes,
  handleTypeSelect,
  handleTypeClear
}: MobileSearchAndFilterProps) => {
  return (
    <div className="mb-6">
      <div className="md:hidden mb-4 relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search agents..."
          className="pl-10 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div>
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
  );
};

export default MobileSearchAndFilter;
