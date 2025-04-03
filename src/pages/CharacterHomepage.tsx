
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useAgentFilter } from '@/hooks/use-agent-filter';
import { useToast } from '@/hooks/use-toast';
import { marketplaceAgents } from '@/components/marketplace/marketplaceData';
import HomepageHeader from '@/components/character-homepage/HomepageHeader';
import HomepageFooter from '@/components/character-homepage/HomepageFooter';
import MobileSearchAndFilter from '@/components/character-homepage/MobileSearchAndFilter';
import AgentCategories from '@/components/character-homepage/AgentCategories';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Bot, Shield, ArrowRight } from 'lucide-react';

const CharacterHomepage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const {
    searchTerm,
    setSearchTerm,
    selectedTypes,
    handleTypeSelect,
    handleTypeClear,
    filteredAgents
  } = useAgentFilter(marketplaceAgents);
  
  const handleHireAgent = (agent: any) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in or create an account to hire agents."
      });
      navigate('/signup');
    } else {
      toast({
        title: "Agent Hired",
        description: `${agent.name} has been added to your team.`
      });
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <HomepageHeader />
      
      {!user && (
        <div className="bg-gradient-to-tr from-primary/10 via-blue-500/10 to-purple-500/10 py-16 border-b border-border overflow-hidden relative">
          <div className="container mx-auto px-4 text-left md:text-center relative z-10">
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-primary/10 text-primary text-sm mb-6 animate-fade-in">
              <Shield className="w-4 h-4 mr-2" />
              <span>Security Automation Platform</span>
            </div>
            
            <h1 className="text-4xl font-bold mb-6 md:text-5xl max-w-3xl md:mx-auto leading-tight">
              Hire your <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Agentic Cybersecurity</span> Team
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl md:mx-auto">
              Deploy expert autonomous cybersecurity agents to proactively defend your organization and seamlessly automate routine security operations with precision.
            </p>
            
            <Button 
              onClick={() => navigate('/signup')} 
              size="lg" 
              className="rounded-full font-medium group"
            >
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            {/* Background elements */}
            <div className="absolute -bottom-16 -right-16 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
      )}
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 flex items-center">
          <Bot className="h-6 w-6 text-primary mr-2" />
          <h2 className="text-2xl font-bold">Security Agents</h2>
        </div>
        
        <MobileSearchAndFilter 
          selectedTypes={selectedTypes} 
          handleTypeSelect={handleTypeSelect} 
          handleTypeClear={handleTypeClear} 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        
        <AgentCategories 
          filteredAgents={filteredAgents} 
          onHireAgent={handleHireAgent} 
        />
      </main>
      
      <HomepageFooter />
    </div>
  );
};

export default CharacterHomepage;
