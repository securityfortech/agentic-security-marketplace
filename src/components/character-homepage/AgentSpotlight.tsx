
import React from 'react';
import { Agent } from '@/data/agents/types';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { 
  Shield, Database, Lock, Code, FileText, 
  CloudRain, Network, Activity, Zap, Bot
} from 'lucide-react';

interface AgentSpotlightProps {
  agents: Agent[];
  onHireAgent: (agent: Agent) => void;
}

// Function to determine icon based on agent type
const getAgentIcon = (type: string) => {
  switch (true) {
    case type.includes('Offensive Security'):
      return <Shield className="h-5 w-5 text-white" />;
    case type.includes('Cloud Security'):
      return <CloudRain className="h-5 w-5 text-white" />;
    case type.includes('Application Security'):
      return <Code className="h-5 w-5 text-white" />;
    case type.includes('Governance'):
      return <FileText className="h-5 w-5 text-white" />;
    case type.includes('Operations'):
      return <Activity className="h-5 w-5 text-white" />;
    case type.includes('Identity'):
      return <Lock className="h-5 w-5 text-white" />;
    case type.includes('Network'):
      return <Network className="h-5 w-5 text-white" />;
    case type.includes('Intelligence'):
      return <Zap className="h-5 w-5 text-white" />;
    case type.includes('Automation'):
      return <Bot className="h-5 w-5 text-white" />;
    case type.includes('Vulnerability'):
      return <Database className="h-5 w-5 text-white" />;
    default:
      return <Shield className="h-5 w-5 text-white" />;
  }
};

const AgentSpotlight = ({
  agents,
  onHireAgent
}: AgentSpotlightProps) => {
  const { toast } = useToast();
  
  const handleHire = (agent: Agent) => {
    onHireAgent(agent);
    toast({
      title: "Agent Deployed",
      description: `${agent.name} has been added to your team.`,
    });
  };
  
  return (
    <section className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {agents.map(agent => (
          <div 
            key={agent.id} 
            className="relative overflow-hidden bg-card rounded-xl border border-border hover:border-primary/30 transition-all duration-300 flex flex-col h-full shadow-sm hover:shadow-md"
          >
            <div className="p-5 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Avatar className="h-16 w-16 rounded-xl border-2 border-primary/20 flex items-center justify-center overflow-hidden">
                  <div 
                    style={{ 
                      background: agent.image || 'linear-gradient(90deg, #FF416C, #FF4B2B)', 
                      width: '100%', 
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {getAgentIcon(agent.type)}
                  </div>
                </Avatar>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">{agent.name}</h3>
                  <p className="text-muted-foreground text-sm">{agent.title || agent.type}</p>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                {agent.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/30">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>{agent.interactions.toLocaleString()} chats</span>
                </div>
                
                <Button 
                  onClick={() => handleHire(agent)} 
                  size="sm" 
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 hover:shadow-md"
                >
                  Deploy
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AgentSpotlight;
