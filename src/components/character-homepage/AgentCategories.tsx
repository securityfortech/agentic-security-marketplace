
import React from 'react';
import { Agent } from '@/components/agents/AgentCard';
import AgentCategory from '@/components/marketplace/AgentCategory';

interface AgentCategoriesProps {
  filteredAgents: Agent[];
  onHireAgent: (agent: any) => void;
}

const AgentCategories = ({ filteredAgents, onHireAgent }: AgentCategoriesProps) => {
  const featuredAgents = filteredAgents.filter(agent => agent.featured).slice(0, 4);
  const securityAgents = filteredAgents.filter(agent => agent.category === 'Security').slice(0, 4);
  const networkAgents = filteredAgents.filter(agent => agent.category === 'Network').slice(0, 4);
  const popularAgents = [...filteredAgents].sort((a, b) => b.interactions - a.interactions).slice(0, 4);
  
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
      {featuredAgents.length > 0 && (
        <AgentCategory 
          title="For you" 
          agents={featuredAgents}
          onHire={onHireAgent}
        />
      )}
      
      {securityAgents.length > 0 && (
        <AgentCategory 
          title="Featured" 
          agents={securityAgents}
          onHire={onHireAgent}
        />
      )}
      
      {popularAgents.length > 0 && (
        <AgentCategory 
          title="Popular" 
          agents={popularAgents}
          onHire={onHireAgent}
        />
      )}
      
      {networkAgents.length > 0 && (
        <AgentCategory 
          title="Trending" 
          agents={networkAgents}
          onHire={onHireAgent}
        />
      )}
    </>
  );
};

export default AgentCategories;
