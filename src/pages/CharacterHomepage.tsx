import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useAgentFilter } from '@/hooks/use-agent-filter';
import { useToast } from '@/hooks/use-toast';
import { marketplaceAgents } from '@/components/marketplace/marketplaceData';
import HomepageHeader from '@/components/character-homepage/HomepageHeader';
import HomepageFooter from '@/components/character-homepage/HomepageFooter';
import MobileSearchAndFilter from '@/components/character-homepage/MobileSearchAndFilter';
import AgentCategories from '@/components/character-homepage/AgentCategories';
import AgentSpotlight from '@/components/character-homepage/AgentSpotlight';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
const CharacterHomepage = () => {
  const {
    user
  } = useAuth();
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const {
    searchTerm,
    selectedTypes,
    setSearchTerm,
    handleTypeSelect,
    handleTypeClear,
    filteredAgents
  } = useAgentFilter(marketplaceAgents);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
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

  // Get featured agents for spotlight section
  const featuredAgents = marketplaceAgents.filter(agent => agent.featured).slice(0, 3);
  return <div className="min-h-screen bg-background">
      <HomepageHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      {!user && <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 py-12 border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Meet your AI Security Agents</h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">Deploy specialized cybersecurity agents designed to defend your organization from cyber threats and handle routine security tasks with precision.</p>
            <Button onClick={() => navigate('/signup')} size="lg" className="rounded-full font-medium">
              Get Started
            </Button>
          </div>
        </div>}
      
      <main className="container mx-auto px-4 py-8">
        {featuredAgents.length > 0 && <AgentSpotlight agents={featuredAgents} onHireAgent={handleHireAgent} />}
        
        <MobileSearchAndFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} selectedTypes={selectedTypes} handleTypeSelect={handleTypeSelect} handleTypeClear={handleTypeClear} />
        
        <AgentCategories filteredAgents={filteredAgents} onHireAgent={handleHireAgent} />
      </main>
      
      <HomepageFooter />
    </div>;
};
export default CharacterHomepage;