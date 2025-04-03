
import React from 'react';
import { Agent } from '@/components/marketplace/marketplaceData';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import AgentBadge from './AgentBadge';

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
          <div key={agent.id} className="relative group overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300">
            <div className="flex p-4">
              <Avatar className="h-14 w-14 rounded-md mr-3 flex-shrink-0 border-4 border-background">
                <div style={{ background: agent.image }} className="w-full h-full rounded-md"></div>
              </Avatar>
              
              <div className="flex flex-col min-w-0">
                <h3 className="font-semibold text-base truncate">{agent.name}</h3>
                <p className="text-xs text-muted-foreground truncate">By @{agent.creator}</p>
                <div className="flex gap-2 mt-1">
                  {/* Only show the type badge which corresponds to the filterable type */}
                  <AgentBadge text={agent.type} variant="secondary" />
                </div>
              </div>
            </div>

            <div className="px-4 py-2">
              <p className="text-xs line-clamp-2 h-8 text-muted-foreground">{agent.description}</p>
              
              {agent.features && agent.features.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {agent.features.slice(0, 2).map((feature, index) => (
                    <AgentBadge 
                      key={index} 
                      text={feature} 
                      variant="secondary" 
                      size="small" 
                    />
                  ))}
                  {agent.features.length > 2 && (
                    <AgentBadge 
                      text={`+${agent.features.length - 2}`} 
                      variant="secondary" 
                      size="small" 
                    />
                  )}
                </div>
              )}
            </div>
            
            <div className="px-4 pb-3 pt-2 flex items-center justify-between">
              <div className="flex items-center text-xs text-muted-foreground">
                <MessageSquare className="h-3 w-3 mr-1" />
                <span>{agent.interactions.toLocaleString()}</span>
              </div>
              
              <Button 
                size="sm" 
                variant="ghost" 
                className="text-xs h-7 hover:bg-primary hover:text-primary-foreground"
                onClick={() => onHire?.(agent)}
              >
                Hire
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentCategory;
