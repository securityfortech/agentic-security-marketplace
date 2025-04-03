import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Shield, Bot, BarChart, Lock, Code, Search, Brain, ArrowRight, CheckCircle, Bell, User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero section with improved styling */}
      <header className="bg-gradient-to-br from-background to-card border-b border-border">
        <div className="container mx-auto px-4 py-6 md:py-8 max-w-6xl">
          <nav className="flex justify-between items-center mb-10 md:mb-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">AS</span>
              </div>
              <span className="font-bold text-xl">Agentic Security</span>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Button variant="ghost" size="icon" className="text-foreground">
                    <Bell className="h-5 w-5" />
                  </Button>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <User className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link to="/profile" className="flex items-center">
                          <User className="mr-2 h-4 w-4" />
                          <span>Profile</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/settings" className="flex items-center">
                          <Settings className="mr-2 h-4 w-4" />
                          <span>Settings</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <div className="hidden sm:flex space-x-4">
                  <Button asChild variant="ghost" className="rounded-full">
                    <Link to="/login">Sign In</Link>
                  </Button>
                  <Button asChild className="rounded-full">
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </div>
              )}
              <Button asChild variant="outline" size="icon" className="sm:hidden">
                <Link to="/login"><ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </nav>
          
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
        </div>
      </header>
      
      {/* Features section with improved cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Security Agents For Every Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Deploy specialized AI agents that enhance your security operations across various domains</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <Search className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Penetration Testing</h3>
                <p className="text-muted-foreground">Automated security testing to identify vulnerabilities in your infrastructure before attackers do.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-orange-400 to-red-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <Lock className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Incident Response</h3>
                <p className="text-muted-foreground">AI agents that help your team respond to and recover from security incidents rapidly.</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-indigo-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <Code className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reverse Engineering</h3>
                <p className="text-muted-foreground">Specialized agents that can analyze malware and suspicious code to determine its purpose.</p>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-green-400 to-teal-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <BarChart className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compliance Analysis</h3>
                <p className="text-muted-foreground">Stay compliant with regulatory frameworks with agents that continuously audit your systems.</p>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-red-400 to-pink-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <Bot className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Threat Hunting</h3>
                <p className="text-muted-foreground">Proactive agents that search for signs of compromise before they become breaches.</p>
              </div>
            </div>
            
            {/* Card 6 */}
            <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden group">
              <div className="h-2 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
                  <Shield className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Vulnerability Scanning</h3>
                <p className="text-muted-foreground">Continuous monitoring of your systems to detect new vulnerabilities as they emerge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits section (new) */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Agentic Security</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our AI-powered agents provide significant advantages over traditional security solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <CheckCircle className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">24/7 Continuous Monitoring</h3>
                <p className="text-muted-foreground">Our agents never sleep, providing round-the-clock protection against emerging threats.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Rapid Deployment</h3>
                <p className="text-muted-foreground">Deploy specialized security agents in minutes, not weeks or months.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <CheckCircle className="text-purple-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scalable Security</h3>
                <p className="text-muted-foreground">Easily scale your security operations up or down based on your evolving needs.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <CheckCircle className="text-orange-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Cost-Effective</h3>
                <p className="text-muted-foreground">Reduce the cost of security operations while improving your overall security posture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA section with improved styling */}
      <section className="py-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-t border-border">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to enhance your security team?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Sign up today and start deploying AI security agents to strengthen your defenses and respond to threats faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-medium rounded-full">
              <Link to="/signup">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link to="/marketplace">Explore Agents</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer with improved spacing */}
      <footer className="py-10 bg-background border-t border-border">
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
