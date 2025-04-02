
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Shield, Bot, BarChart, Lock, Code, Search } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-12 max-w-6xl">
          <nav className="flex justify-between items-center mb-16">
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
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                AI-Powered Security <span className="text-primary">Agents</span> For Your Team
              </h1>
              <p className="text-lg text-muted-foreground">
                Agentic Security provides on-demand AI security agents that augment your team's capabilities. Scale your security operations with specialized agents for penetration testing, incident response, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="font-medium">
                  <Link to="/dashboard">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/marketplace">Explore Agents</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 bg-card rounded-lg p-8 border border-border animate-glow">
              <div className="w-full aspect-square relative bg-background/50 rounded-md border border-border overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-primary animate-pulse-slow" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-card to-transparent"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-destructive animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-warning animate-pulse delay-100"></div>
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse delay-200"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Features section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Security Agents For Every Need</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Search className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Penetration Testing</h3>
              <p className="text-muted-foreground">Automated security testing to identify vulnerabilities in your infrastructure before attackers do.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Lock className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Incident Response</h3>
              <p className="text-muted-foreground">AI agents that help your team respond to and recover from security incidents rapidly.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Code className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reverse Engineering</h3>
              <p className="text-muted-foreground">Specialized agents that can analyze malware and suspicious code to determine its purpose.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compliance Analysis</h3>
              <p className="text-muted-foreground">Stay compliant with regulatory frameworks with agents that continuously audit your systems.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Bot className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Threat Hunting</h3>
              <p className="text-muted-foreground">Proactive agents that search for signs of compromise before they become breaches.</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Vulnerability Scanning</h3>
              <p className="text-muted-foreground">Continuous monitoring of your systems to detect new vulnerabilities as they emerge.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to enhance your security team?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sign up today and start deploying AI security agents to strengthen your defenses and respond to threats faster.
          </p>
          <Button asChild size="lg" className="font-medium">
            <Link to="/signup">Get Started</Link>
          </Button>
        </div>
      </section>
      
      {/* Footer */}
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
    </div>
  );
};

export default Index;
