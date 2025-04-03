
import React from 'react';
import { Agent } from '@/data/agents/types';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface AgentSpotlightProps {
  agents: Agent[];
  onHireAgent: (agent: Agent) => void;
}

const AgentSpotlight = ({
  agents,
  onHireAgent
}: AgentSpotlightProps) => {
  const { toast } = useToast();
  
  const handleHire = (agent: Agent) => {
    onHireAgent(agent);
    toast({
      title: "Agent Deployed",
      description: `${agent.name} has been added to your team.`,
    });
  };
  
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {agents.map(agent => (
          <div 
            key={agent.id} 
            className="relative overflow-hidden bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md"
          >
            <div className="p-5 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Avatar className="h-16 w-16 rounded-xl border-2 border-primary/20">
                  {agent.image && (
                    <div 
                      style={{ backgroundImage: `url(${agent.image})` }} 
                      className="w-full h-full rounded-xl bg-cover bg-center"
                    />
                  )}
                </Avatar>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{agent.name}</h3>
                  <p className="text-muted-foreground text-sm">{agent.title}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                {agent.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/30">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>{agent.interactions.toLocaleString()} chats</span>
                </div>
                
                <Button 
                  onClick={() => handleHire(agent)} 
                  size="sm" 
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                >
                  Deploy
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgentSpotlight;
