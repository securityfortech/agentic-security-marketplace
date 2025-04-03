
import React from 'react';
import AgentCard from './AgentCard';
import { Agent } from '@/data/agents/types';

interface AgentListProps {
  agents: Agent[];
  isHired?: boolean;
  onHire?: (agent: Agent) => void;
  onTerminate?: (agent: Agent) => void;
}

const AgentList: React.FC<AgentListProps> = ({ 
  agents, 
  isHired = false,
  onHire,
  onTerminate
}) => {
  if (agents.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No agents found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {agents.map((agent) => (
        <AgentCard 
          key={agent.id} 
          agent={agent} 
          isHired={isHired}
          onHire={onHire}
          onTerminate={onTerminate}
        />
      ))}
    </div>
  );
};

export default AgentList;
