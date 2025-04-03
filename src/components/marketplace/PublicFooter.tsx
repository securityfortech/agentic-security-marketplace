
import React from 'react';

const PublicFooter = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
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
  );
};

export default PublicFooter;
