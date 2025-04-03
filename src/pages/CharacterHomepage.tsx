import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { marketplaceAgents } from '@/components/marketplace/marketplaceData';
import AgentCategory from '@/components/marketplace/AgentCategory';
import { useAuth } from '@/contexts/AuthContext';
import { useAgentFilter } from '@/hooks/use-agent-filter';
import { useToast } from '@/hooks/use-toast';

const CharacterHomepage = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  
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
        description: "Please sign in or create an account to hire agents.",
      });
    } else {
      toast({
        title: "Agent Hired",
        description: `${agent.name} has been added to your team.`,
      });
    }
  };
  
  const featuredAgents = filteredAgents.filter(agent => agent.featured).slice(0, 4);
  const securityAgents = filteredAgents.filter(agent => agent.category === 'Security').slice(0, 4);
  const networkAgents = filteredAgents.filter(agent => agent.category === 'Network').slice(0, 4);
  const popularAgents = [...filteredAgents].sort((a, b) => b.interactions - a.interactions).slice(0, 4);
  
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">AS</span>
              </div>
              <span className="font-bold text-xl">Agentic Security</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search agents..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="space-x-4">
              {user ? (
                <Button asChild>
                  <Link to="/dashboard">Dashboard</Link>
                </Button>
              ) : (
                <>
                  <Button asChild variant="ghost">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/signup">Sign Up to Chat</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="md:hidden mb-4 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search agents..."
              className="pl-10 w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium">Filter by type</p>
              {selectedTypes.length > 0 && (
                <Button variant="ghost" size="sm" onClick={handleTypeClear} className="h-auto py-1 px-2 text-xs">
                  Clear filters
                </Button>
              )}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {['IT', 'Compliance', 'Pentest', 'Response', 'Awareness'].map((type) => (
                <Button 
                  key={type} 
                  variant={selectedTypes.includes(type) ? "default" : "outline"} 
                  className="rounded-full text-xs h-8"
                  onClick={() => handleTypeSelect(type)}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {filteredAgents.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No agents found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        ) : (
          <>
            {featuredAgents.length > 0 && (
              <AgentCategory 
                title="For you" 
                agents={featuredAgents}
                onHire={handleHireAgent}
              />
            )}
            
            {securityAgents.length > 0 && (
              <AgentCategory 
                title="Featured" 
                agents={securityAgents}
                onHire={handleHireAgent}
              />
            )}
            
            {popularAgents.length > 0 && (
              <AgentCategory 
                title="Popular" 
                agents={popularAgents}
                onHire={handleHireAgent}
              />
            )}
            
            {networkAgents.length > 0 && (
              <AgentCategory 
                title="Trending" 
                agents={networkAgents}
                onHire={handleHireAgent}
              />
            )}
          </>
        )}
      </main>
      
      <footer className="py-8 bg-background border-t border-border mt-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">AS</span>
              </div>
              <span className="font-bold">Agentic Security</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2023 Agentic Security. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CharacterHomepage;
