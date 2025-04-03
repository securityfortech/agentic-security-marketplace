
import React from 'react';
import { Search, Lock, Code, BarChart, Bot, Shield, Zap, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center py-1 px-3 rounded-full bg-primary/10 text-primary text-sm mb-6">
            <Bot className="w-4 h-4 mr-2" />
            <span>AI-powered Security</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Security Agents For Every Need</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Deploy specialized AI agents that enhance your security operations across various domains</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Penetration Testing" 
            description="Automated security testing to identify vulnerabilities in your infrastructure before attackers do." 
            icon={<Search className="text-white w-5 h-5" />}
            gradient="from-blue-400 to-blue-600"
          />
          
          <FeatureCard 
            title="Incident Response" 
            description="AI agents that help your team respond to and recover from security incidents rapidly." 
            icon={<Lock className="text-white w-5 h-5" />}
            gradient="from-orange-400 to-red-500"
          />
          
          <FeatureCard 
            title="Reverse Engineering" 
            description="Specialized agents that can analyze malware and suspicious code to determine its purpose." 
            icon={<Code className="text-white w-5 h-5" />}
            gradient="from-purple-400 to-indigo-500"
          />
          
          <FeatureCard 
            title="Compliance Analysis" 
            description="Stay compliant with regulatory frameworks with agents that continuously audit your systems." 
            icon={<BarChart className="text-white w-5 h-5" />}
            gradient="from-green-400 to-teal-500"
          />
          
          <FeatureCard 
            title="Threat Hunting" 
            description="Proactive agents that search for signs of compromise before they become breaches." 
            icon={<Bot className="text-white w-5 h-5" />}
            gradient="from-red-400 to-pink-500"
            featured
          />
          
          <FeatureCard 
            title="Vulnerability Scanning" 
            description="Continuous monitoring of your systems to detect new vulnerabilities as they emerge." 
            icon={<Shield className="text-white w-5 h-5" />}
            gradient="from-yellow-400 to-amber-500"
          />
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="rounded-full group">
            <Link to="/marketplace" className="flex items-center">
              Explore All Agents
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  featured?: boolean;
}

const FeatureCard = ({ title, description, icon, gradient, featured }: FeatureCardProps) => {
  return (
    <div className={`relative bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden group ${featured ? 'ring-1 ring-primary/20' : ''}`}>
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`}></div>
      
      <div className="p-6">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-2 flex items-center">
          {title}
          {featured && <Zap className="ml-2 h-4 w-4 text-yellow-500" />}
        </h3>
        
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-border opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

export default Features;
