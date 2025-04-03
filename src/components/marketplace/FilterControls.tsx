
import React from 'react';
import AgentFilter from '@/components/agents/AgentFilter';

interface FilterControlsProps {
  searchTerm: string;
  selectedTypes: string[];
  onSearchChange: (value: string) => void;
  onTypeSelect: (type: string) => void;
  onTypeClear: () => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({
  searchTerm,
  selectedTypes,
  onSearchChange,
  onTypeSelect,
  onTypeClear
}) => {
  return (
    <AgentFilter
      searchTerm={searchTerm}
      selectedTypes={selectedTypes}
      onSearchChange={onSearchChange}
      onTypeSelect={onTypeSelect}
      onTypeClear={onTypeClear}
    />
  );
};

export default FilterControls;
