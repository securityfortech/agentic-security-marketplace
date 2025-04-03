
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Brain } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 py-8 md:py-14">
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Deploy AI Cybersecurity Agents <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">On-Demand</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Agentic Security delivers specialized AI agents that enhance your team's capabilities across security operations. Instantly scale expertise in IT, incident response, penetration testing, compliance, and more.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="lg" className="font-medium rounded-full">
            <Link to="/dashboard">Get Started</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/marketplace">Explore Agents</Link>
          </Button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-300 via-blue-400 to-blue-600 shadow-lg overflow-hidden">
            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/30 blur-xl transform -rotate-45"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Brain className="w-20 h-20 text-white drop-shadow-md" />
              <div className="absolute inset-0 animate-ping bg-white/30 rounded-full duration-1000 delay-300"></div>
            </div>
          </div>
          
          <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-white animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-blue-200 animate-pulse delay-100"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-blue-100 animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
