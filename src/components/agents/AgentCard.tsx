
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Circle, Shield } from 'lucide-react';
import { Agent, AgentSkill } from '@/data/agents/types';
import { useToast } from '@/hooks/use-toast';

interface AgentCardProps {
  agent: Agent;
  isHired?: boolean;
  onHire?: (agent: Agent) => void;
  onTerminate?: (agent: Agent) => void;
}

const AgentCard: React.FC<AgentCardProps> = ({ 
  agent, 
  isHired = false,
  onHire,
  onTerminate
}) => {
  const { toast } = useToast();
  
  const handleHire = () => {
    if (onHire) {
      onHire(agent);
      toast({
        title: "Agent Deployed",
        description: `${agent.name} has been successfully added to your team.`,
      });
    }
  };

  const handleTerminate = () => {
    if (onTerminate) {
      onTerminate(agent);
      toast({
        title: "Agent Terminated",
        description: `${agent.name} has been removed from your team.`,
      });
    }
  };
  
  return (
    <Card className="agent-card overflow-hidden h-full transition-all duration-300 hover:shadow-md hover:border-primary/50 flex flex-col">
      {agent.image && (
        <div 
          className="h-24 bg-cover bg-center" 
          style={{ backgroundImage: `url(${agent.image})` }}
        ></div>
      )}
      
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg font-medium">{agent.name}</CardTitle>
          </div>
          <Badge variant="outline" className="font-medium text-xs">
            {agent.type}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 pt-2 flex-grow">
        <p className="text-sm text-muted-foreground mt-2 mb-4 line-clamp-3">{agent.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.skills && agent.skills.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="text-xs font-medium">
              {skill.name} - {skill.level}
            </Badge>
          ))}
          
          {agent.features && agent.features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-medium">
              {feature}
            </Badge>
          ))}
        </div>
        
        {isHired && agent.status && (
          <div className="mb-3 flex items-center">
            <span className="text-sm mr-2">Status:</span>
            <span className={`flex items-center ${
              agent.status === 'active' 
                ? 'text-success' 
                : 'text-muted-foreground'
            }`}>
              <Circle className={`h-2 w-2 mr-1 fill-current ${
                agent.status === 'active' 
                  ? 'text-success' 
                  : 'text-muted-foreground'
              }`} />
              {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
            </span>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex justify-between items-center mt-auto border-t border-border/30">
        <div className="text-sm font-medium">
          <span className="text-muted-foreground">Cost:</span> ${typeof agent.price === 'number' ? agent.price : agent.price}/hr
        </div>
        
        {isHired ? (
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={handleTerminate}
            className="rounded-full transition-all duration-200 hover:scale-105"
          >
            Terminate
          </Button>
        ) : (
          <Button 
            size="sm" 
            onClick={handleHire}
            className="rounded-full transition-all duration-200 hover:scale-105"
          >
            <Shield className="mr-2 h-4 w-4" />
            Deploy
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default AgentCard;
