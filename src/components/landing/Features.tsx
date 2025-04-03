
import React from 'react';
import { Search, Lock, Code, BarChart, Bot, Shield } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Security Agents For Every Need</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Deploy specialized AI agents that enhance your security operations across various domains</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Penetration Testing" 
            description="Automated security testing to identify vulnerabilities in your infrastructure before attackers do." 
            icon={<Search className="text-primary w-6 h-6" />}
            gradient="from-blue-400 to-blue-600"
          />
          
          <FeatureCard 
            title="Incident Response" 
            description="AI agents that help your team respond to and recover from security incidents rapidly." 
            icon={<Lock className="text-primary w-6 h-6" />}
            gradient="from-orange-400 to-red-500"
          />
          
          <FeatureCard 
            title="Reverse Engineering" 
            description="Specialized agents that can analyze malware and suspicious code to determine its purpose." 
            icon={<Code className="text-primary w-6 h-6" />}
            gradient="from-purple-400 to-indigo-500"
          />
          
          <FeatureCard 
            title="Compliance Analysis" 
            description="Stay compliant with regulatory frameworks with agents that continuously audit your systems." 
            icon={<BarChart className="text-primary w-6 h-6" />}
            gradient="from-green-400 to-teal-500"
          />
          
          <FeatureCard 
            title="Threat Hunting" 
            description="Proactive agents that search for signs of compromise before they become breaches." 
            icon={<Bot className="text-primary w-6 h-6" />}
            gradient="from-red-400 to-pink-500"
          />
          
          <FeatureCard 
            title="Vulnerability Scanning" 
            description="Continuous monitoring of your systems to detect new vulnerabilities as they emerge." 
            icon={<Shield className="text-primary w-6 h-6" />}
            gradient="from-yellow-400 to-amber-500"
          />
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
}

const FeatureCard = ({ title, description, icon, gradient }: FeatureCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-all overflow-hidden group">
      <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Features;
