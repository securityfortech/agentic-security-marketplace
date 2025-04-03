
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomepageHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-background py-4 border-b border-border">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">AS</span>
          </div>
          <h1 className="text-xl font-bold">Agentic Security</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate('/login')}>
            Sign In
          </Button>
          <Button onClick={() => navigate('/signup')}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
