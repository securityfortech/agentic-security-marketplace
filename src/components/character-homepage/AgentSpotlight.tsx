
import React from 'react';
import { Agent } from '@/components/agents/AgentCard';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Shield, MessageCircle } from 'lucide-react';

interface AgentSpotlightProps {
  agents: Agent[];
  onHireAgent: (agent: Agent) => void;
}

const AgentSpotlight = ({
  agents,
  onHireAgent
}: AgentSpotlightProps) => {
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {agents.map(agent => <div key={agent.id} className="relative overflow-hidden bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 flex flex-col h-full">
            {agent.featured && <div className="absolute top-3 right-3 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium flex items-center">
                <Shield className="w-3 h-3 mr-1" />
                Featured
              </div>}
            
            <div className="p-5 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Avatar className="h-16 w-16 rounded-xl border-2 border-primary/20">
                  <div 
                    style={{ background: agent.image }} 
                    className="w-full h-full rounded-xl"
                  />
                </Avatar>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{agent.name}</h3>
                  <p className="text-muted-foreground text-sm">{agent.title}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {agent.description.length > 120 ? `${agent.description.substring(0, 120)}...` : agent.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>{agent.interactions.toLocaleString()} chats</span>
                </div>
                
                <Button onClick={() => onHireAgent(agent)} size="sm" className="rounded-full">
                  Chat Now
                </Button>
              </div>
            </div>
          </div>)}
      </div>
    </section>
  );
};

export default AgentSpotlight;
