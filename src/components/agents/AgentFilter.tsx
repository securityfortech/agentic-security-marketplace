
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const agentTypes = [
  "Offensive Security & Pentesting",
  "Vulnerability Management",
  "Cloud Security",
  "Application Security (AppSec)",
  "Governance, Risk & Compliance (GRC)",
  "Security Operations (SecOps)",
  "Identity & Access Management (IAM)",
  "Asset, Infrastructure & Network Security",
  "Threat Intelligence & Detection",
  "Automation, Reporting & Assistive Agents"
];

interface AgentFilterProps {
  searchTerm: string;
  selectedTypes: string[];
  onSearchChange: (value: string) => void;
  onTypeSelect: (type: string) => void;
  onTypeClear: () => void;
}

const AgentFilter: React.FC<AgentFilterProps> = ({
  searchTerm,
  selectedTypes,
  onSearchChange,
  onTypeSelect,
  onTypeClear
}) => {
  return (
    <div className="mb-6 space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search agents by name, description or features..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium">Filter by security domain</p>
          {selectedTypes.length > 0 && (
            <Button variant="ghost" size="sm" onClick={onTypeClear} className="h-auto py-1 px-2 text-xs">
              Clear filters
            </Button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {agentTypes.map((type) => (
            <Badge
              key={type}
              variant={selectedTypes.includes(type) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => onTypeSelect(type)}
            >
              {type}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgentFilter;
