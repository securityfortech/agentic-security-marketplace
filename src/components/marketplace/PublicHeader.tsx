
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const PublicHeader = () => {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">AS</span>
            </div>
            <span className="font-bold text-xl">Agentic Security</span>
          </div>
          <div className="space-x-4">
            <Button asChild variant="ghost">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default PublicHeader;
