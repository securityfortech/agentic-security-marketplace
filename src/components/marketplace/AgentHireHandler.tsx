
import React from 'react';
import AgentList from '@/components/agents/AgentList';
import { Agent } from '@/components/agents/AgentCard';
import { useToast } from '@/hooks/use-toast';

interface AgentHireHandlerProps {
  agents: Agent[];
  isPublic?: boolean;
}

const AgentHireHandler: React.FC<AgentHireHandlerProps> = ({ 
  agents,
  isPublic = false
}) => {
  const { toast } = useToast();
  
  const handleHireAgent = (agent: Agent) => {
    if (isPublic) {
      toast({
        title: "Authentication Required",
        description: "Please sign in or create an account to hire agents.",
      });
    } else {
      toast({
        title: "Agent Hired",
        description: `${agent.name} has been added to your team.`,
      });
    }
  };

  return (
    <AgentList 
      agents={agents}
      onHire={handleHireAgent}
    />
  );
};

export default AgentHireHandler;
