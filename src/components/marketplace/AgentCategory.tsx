
import React from 'react';
import { AgentList } from '../agents/AgentList';
import { Agent } from '@/components/marketplace/marketplaceData';

interface AgentCategoryProps {
  title: string;
  agents: Agent[];
  onHire?: (agent: Agent) => void;
}

const AgentCategory = ({ title, agents, onHire }: AgentCategoryProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {agents.map((agent) => (
          <div key={agent.id} className="relative group overflow-hidden rounded-lg border border-border bg-card transition-all hover:shadow-md">
            <div className="aspect-square w-full bg-secondary/20 relative overflow-hidden">
              {agent.avatar && (
                <img 
                  src={agent.avatar} 
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg truncate">{agent.name}</h3>
              <p className="text-sm text-muted-foreground mb-2">By @{agent.creator}</p>
              <p className="text-sm line-clamp-2 h-10">{agent.description}</p>
              <div className="flex items-center mt-2 text-xs text-muted-foreground">
                <span>{agent.interactions.toLocaleString()} interactions</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentCategory;
