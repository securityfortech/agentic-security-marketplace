
import React from 'react';
import AgentList from '@/components/agents/AgentList';
import { Agent } from '@/data/agents/types';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Shield, Info } from 'lucide-react';

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

  if (agents.length === 0) {
    return (
      <div className="mt-6">
        <Alert className="bg-muted/50">
          <Info className="h-4 w-4" />
          <AlertTitle>No agents found</AlertTitle>
          <AlertDescription>
            Try adjusting your search criteria or filters to see more results.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold">Available Agents ({agents.length})</h2>
      </div>
      <AgentList 
        agents={agents}
        onHire={handleHireAgent}
      />
    </div>
  );
};

export default AgentHireHandler;
