
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Shield, Bot, BarChart, Lock, Code, Search, Brain } from 'lucide-react';

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
                Deploy AI Cybersecurity Agents <span className="text-primary">On-Demand</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Agentic Security delivers specialized AI agents that enhance your team's capabilities across security operations. Instantly scale expertise in IT, incident response, penetration testing, compliance, and more.
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
            
            <div className="flex-1 flex justify-center items-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-sky-100 via-blue-300 to-blue-600 shadow-lg overflow-hidden">
                  <div className="absolute top-0 left-1/4 w-1/2 h-full bg-white/30 blur-xl transform -rotate-45"></div>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-blue-500/20 rounded-full animate-pulse"></div>
                    <div className="absolute -inset-5 bg-blue-400/30 rounded-full animate-ping duration-1000"></div>
                    <Brain className="w-16 h-16 text-white drop-shadow-md relative z-10 animate-[glow_3s_ease-in-out_infinite]" />
                    
                    {/* Orbiting particles */}
                    <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '8s' }}>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-200 rounded-full shadow-lg shadow-blue-400/50"></div>
                    </div>
                    <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '12s', animationDirection: 'reverse' }}>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg shadow-blue-400/50"></div>
                    </div>
                    <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '15s' }}>
                      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-2 h-2 bg-blue-300 rounded-full shadow-lg shadow-blue-400/50"></div>
                    </div>
                    <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 bg-blue-100 rounded-full shadow-lg shadow-blue-400/50"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-white animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-blue-200 animate-pulse delay-100"></div>
                <div className="absolute top-1/2 right-1/3 w-2 h-2 rounded-full bg-blue-100 animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      
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
