
import React from 'react';
import { Agent } from '@/data/agents/types';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface AgentCategoriesProps {
  filteredAgents: Agent[];
  onHireAgent: (agent: Agent) => void;
}

const AgentCategories = ({ filteredAgents, onHireAgent }: AgentCategoriesProps) => {
  const featuredAgents = filteredAgents.filter(agent => agent.featured).slice(0, 8);
  const securityAgents = filteredAgents.filter(agent => agent.category === 'Security').slice(0, 8);
  const popularAgents = [...filteredAgents].sort((a, b) => b.interactions - a.interactions).slice(0, 8);
  
  if (filteredAgents.length === 0) {
    return (
      <div className="text-center py-12 bg-card/50 rounded-lg border border-border">
        <h3 className="text-xl font-semibold mb-2">No agents found</h3>
        <p className="text-muted-foreground">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <>
      {popularAgents.length > 0 && (
        <CategorySection 
          title="Popular Security Agents" 
          agents={popularAgents}
          onHireAgent={onHireAgent}
        />
      )}
      
      {featuredAgents.length > 0 && (
        <CategorySection 
          title="Featured Agents" 
          agents={featuredAgents}
          onHireAgent={onHireAgent}
        />
      )}
      
      {securityAgents.length > 0 && (
        <CategorySection 
          title="All Agents" 
          agents={securityAgents}
          onHireAgent={onHireAgent}
          showLoadMore={true}
        />
      )}
    </>
  );
};

interface CategorySectionProps {
  title: string;
  agents: Agent[];
  onHireAgent: (agent: Agent) => void;
  showLoadMore?: boolean;
}

const CategorySection = ({ title, agents, onHireAgent, showLoadMore = false }: CategorySectionProps) => {
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
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {agents.map(agent => (
          <div 
            key={agent.id}
            className="bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-300 p-4 flex flex-col h-full shadow-sm hover:shadow-md"
          >
            <div className="flex items-start mb-3">
              <Avatar className="h-12 w-12 rounded-lg border border-border">
                {agent.image && (
                  <div 
                    style={{ backgroundImage: `url(${agent.image})` }} 
                    className="w-full h-full rounded-lg bg-cover bg-center"
                  />
                )}
              </Avatar>
              <div className="ml-3">
                <h3 className="font-semibold text-sm line-clamp-1">{agent.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">{agent.title || agent.type}</p>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-grow">
              {agent.description}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/30">
              <div className="flex items-center text-xs text-muted-foreground">
                <MessageCircle className="w-3 h-3 mr-1" />
                <span>{agent.interactions.toLocaleString()}</span>
              </div>
              
              <Button 
                onClick={() => handleHire(agent)} 
                size="sm" 
                variant="secondary"
                className="rounded-full h-7 px-3 text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
              >
                Deploy
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {showLoadMore && (
        <div className="flex justify-center mt-6">
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground opacity-70"
          >
            Load more...
          </Button>
        </div>
      )}
    </section>
  );
};

export default AgentCategories;
