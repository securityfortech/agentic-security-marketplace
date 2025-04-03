
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, Shield } from 'lucide-react';

export interface AgentSkill {
  name: string;
  level: 'beginner' | 'intermediate' | 'expert';
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  type: string;
  skills: AgentSkill[];
  price: string;
  status?: 'active' | 'inactive' | 'warning' | 'error';
  image?: string;
}

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
  return (
    <Card className="agent-card overflow-hidden">
      {agent.image && (
        <div className="h-24" style={{ background: agent.image }}></div>
      )}
      
      <CardHeader className="p-4 pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-lg">{agent.name}</CardTitle>
          </div>
          <Badge variant="outline">{agent.type}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm text-muted-foreground mt-2 mb-4">{agent.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {agent.skills.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="text-xs">
              {skill.name} - {skill.level}
            </Badge>
          ))}
        </div>
        
        {isHired && agent.status && (
          <div className="mb-3 flex items-center">
            <span className="text-sm mr-2">Status:</span>
            <span className={`status-badge-${agent.status}`}>
              {agent.status.charAt(0).toUpperCase() + agent.status.slice(1)}
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="text-sm font-medium">
          <span className="text-muted-foreground">Cost:</span> {agent.price}/hr
        </div>
        
        {isHired ? (
          <Button variant="destructive" size="sm" onClick={() => onTerminate?.(agent)}>
            Terminate
          </Button>
        ) : (
          <Button size="sm" onClick={() => onHire?.(agent)}>
            <Shield className="mr-2 h-4 w-4" />
            Hire
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default AgentCard;
