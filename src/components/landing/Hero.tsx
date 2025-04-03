
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 py-10 md:py-16">
      <div className="flex-1 space-y-6 text-left">
        <div className="inline-flex items-center py-1 px-3 rounded-full bg-primary/10 text-primary text-sm mb-4 animate-fade-in">
          <span className="mr-2">✨</span>
          <span>Next-gen cybersecurity</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Hire an <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Agentic Security</span> Assistant
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-2xl">
          Agentic Security delivers specialized AI agents that enhance your team's capabilities across security operations. Instantly scale expertise in IT, incident response, penetration testing, compliance, and more.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild size="lg" className="font-medium rounded-full group">
            <Link to="/dashboard" className="flex items-center">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/marketplace">Explore Agents</Link>
          </Button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-400 via-blue-500 to-purple-600 shadow-xl overflow-hidden animate-pulse-slow">
            <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/30 blur-xl transform -rotate-45"></div>
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <Brain className="w-24 h-24 text-white drop-shadow-md" />
              <div className="absolute inset-0 animate-ping bg-white/30 rounded-full duration-1000 delay-300"></div>
            </div>
          </div>
          
          <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-white animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-blue-200 animate-pulse delay-100"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full bg-blue-100 animate-pulse delay-200"></div>
          
          {/* Connecting lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <path
                d="M100,100 L140,70 M100,100 L60,130 M100,100 L120,150"
                stroke="white"
                strokeWidth="0.5"
                strokeDasharray="5,5"
                fill="none"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
