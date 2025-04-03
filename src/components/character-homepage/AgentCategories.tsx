
import React from 'react';
import { Agent } from '@/components/marketplace/marketplaceData';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { MessageCircle } from 'lucide-react';

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
      <div className="text-center py-12">
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
          title="Security Specialists" 
          agents={securityAgents}
          onHireAgent={onHireAgent}
        />
      )}
    </>
  );
};

interface CategorySectionProps {
  title: string;
  agents: Agent[];
  onHireAgent: (agent: Agent) => void;
}

const CategorySection = ({ title, agents, onHireAgent }: CategorySectionProps) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {agents.map(agent => (
          <div 
            key={agent.id}
            className="bg-card rounded-lg border border-border hover:border-primary/30 transition-all duration-200 p-4 flex flex-col"
          >
            <div className="flex items-start mb-3">
              <Avatar className="h-12 w-12 rounded-lg border border-border">
                <div 
                  style={{ background: agent.image }} 
                  className="w-full h-full rounded-lg"
                />
              </Avatar>
              <div className="ml-3">
                <h3 className="font-semibold text-sm line-clamp-1">{agent.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">{agent.title}</p>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
              {agent.description}
            </p>
            
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center text-xs text-muted-foreground">
                <MessageCircle className="w-3 h-3 mr-1" />
                <span>{agent.interactions.toLocaleString()}</span>
              </div>
              
              <Button 
                onClick={() => onHireAgent(agent)} 
                size="sm" 
                variant="secondary"
                className="rounded-full h-7 px-3 text-xs"
              >
                Chat
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgentCategories;
