
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { marketplaceAgents } from '@/components/marketplace/marketplaceData';
import AgentCategory from '@/components/marketplace/AgentCategory';
import { useAuth } from '@/contexts/AuthContext';

const CharacterHomepage = () => {
  const { user } = useAuth();
  
  // Organize agents into categories
  const featuredAgents = marketplaceAgents.filter(agent => agent.featured).slice(0, 4);
  const securityAgents = marketplaceAgents.filter(agent => agent.category === 'Security').slice(0, 4);
  const networkAgents = marketplaceAgents.filter(agent => agent.category === 'Network').slice(0, 4);
  const popularAgents = [...marketplaceAgents].sort((a, b) => b.interactions - a.interactions).slice(0, 4);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
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
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="md:hidden mb-6 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search agents..."
            className="pl-10 w-full"
          />
        </div>
        
        {/* For you section */}
        <AgentCategory 
          title="For you" 
          agents={featuredAgents} 
        />
        
        {/* Featured section */}
        <AgentCategory 
          title="Featured" 
          agents={securityAgents} 
        />
        
        {/* Popular section */}
        <AgentCategory 
          title="Popular" 
          agents={popularAgents} 
        />
        
        {/* Trending section */}
        <AgentCategory 
          title="Trending" 
          agents={networkAgents} 
        />
        
        {/* Categories section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {['Security', 'Network', 'Monitoring', 'Response', 'Prevention'].map((category) => (
              <Button key={category} variant="outline" className="rounded-full">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </main>
      
      {/* Footer */}
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
