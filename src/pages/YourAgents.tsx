
import React, { useState } from 'react';
import AgentList from '@/components/agents/AgentList';
import AgentStatus from '@/components/agents/AgentStatus';
import { Agent } from '@/data/agents/types';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Sample hired agents data
const hiredAgents: Agent[] = [
  {
    id: '1',
    name: 'NetProwler',
    description: 'Advanced network penetration testing agent with expertise in identifying vulnerabilities across your infrastructure.',
    type: 'Pentester',
    skills: [
      { name: 'Network Scanning', level: 'expert' },
      { name: 'Exploit Development', level: 'intermediate' },
      { name: 'Vulnerability Assessment', level: 'expert' }
    ],
    price: '$125',
    status: 'active'
  },
  {
    id: '3',
    name: 'ByteHunter',
    description: 'Binary analysis expert that can reverse engineer malware and suspicious executables to determine their purpose.',
    type: 'Reverse Engineer',
    skills: [
      { name: 'Binary Analysis', level: 'expert' },
      { name: 'Malware Deobfuscation', level: 'expert' },
      { name: 'Assembly Code Analysis', level: 'intermediate' }
    ],
    price: '$165',
    status: 'warning'
  },
  {
    id: '4',
    name: 'ComplianceGuard',
    description: 'Ensures your systems meet regulatory requirements by continuously auditing and reporting on compliance issues.',
    type: 'Compliance Analyst',
    skills: [
      { name: 'Regulatory Framework Expertise', level: 'expert' },
      { name: 'Audit Documentation', level: 'intermediate' },
      { name: 'Gap Analysis', level: 'expert' }
    ],
    price: '$110',
    status: 'inactive'
  }
];

const YourAgents = () => {
  const [agents, setAgents] = useState(hiredAgents);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(agents[0]);
  const { toast } = useToast();
  
  const handleTerminateAgent = (agent: Agent) => {
    setAgents(agents.filter(a => a.id !== agent.id));
    
    if (selectedAgent && selectedAgent.id === agent.id) {
      setSelectedAgent(agents.length > 1 ? agents.filter(a => a.id !== agent.id)[0] : null);
    }
    
    toast({
      title: "Agent Terminated",
      description: `${agent.name} has been removed from your team.`,
    });
  };
  
  const handleRestartAgent = (agent: Agent) => {
    setAgents(agents.map(a => 
      a.id === agent.id ? { ...a, status: 'active' } : a
    ));
    
    toast({
      title: "Agent Restarted",
      description: `${agent.name} is now active and running.`,
    });
  };
  
  const handleStopAgent = (agent: Agent) => {
    setAgents(agents.map(a => 
      a.id === agent.id ? { ...a, status: 'inactive' } : a
    ));
    
    toast({
      title: "Agent Stopped",
      description: `${agent.name} has been stopped.`,
    });
  };

  const handleSelectAgent = (agent: Agent) => {
    setSelectedAgent(agent);
  };
  
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Your Agents</h1>
        <Button asChild>
          <Link to="/marketplace" className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            <span>Hire New Agent</span>
          </Link>
        </Button>
      </div>
      
      {agents.length === 0 ? (
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>No agents hired</AlertTitle>
          <AlertDescription>
            You don't have any agents yet. Visit the Agent Marketplace to hire your first agent.
          </AlertDescription>
        </Alert>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <AgentDetails 
              agents={agents} 
              selectedAgent={selectedAgent}
              onSelectAgent={handleSelectAgent}
              onTerminate={handleTerminateAgent}
            />
          </div>
          <div>
            {selectedAgent && (
              <AgentStatus 
                agent={selectedAgent}
                onRestart={handleRestartAgent}
                onStop={handleStopAgent}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

interface AgentDetailsProps {
  agents: Agent[];
  selectedAgent: Agent | null;
  onSelectAgent: (agent: Agent) => void;
  onTerminate: (agent: Agent) => void;
}

const AgentDetails: React.FC<AgentDetailsProps> = ({ 
  agents, 
  selectedAgent, 
  onSelectAgent,
  onTerminate 
}) => {
  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <h2 className="text-xl font-semibold mb-4">Your Security Team</h2>
      <div className="space-y-4">
        {agents.map((agent) => (
          <div 
            key={agent.id}
            className={`p-4 rounded-lg border transition-all cursor-pointer ${
              selectedAgent?.id === agent.id 
                ? 'border-primary bg-primary/5' 
                : 'border-border hover:border-primary/50'
            }`}
            onClick={() => onSelectAgent(agent)}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`status-badge-${agent.status}`}></span>
                  <h3 className="font-medium">{agent.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{agent.type}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {agent.skills.slice(0, 2).map((skill) => (
                    <span 
                      key={skill.name} 
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded"
                    >
                      {skill.name}
                    </span>
                  ))}
                  {agent.skills.length > 2 && (
                    <span className="text-xs text-muted-foreground">+{agent.skills.length - 2} more</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-sm font-medium mb-2">{agent.price}/hr</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-destructive hover:text-destructive hover:bg-destructive/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    onTerminate(agent);
                  }}
                >
                  Terminate
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourAgents;
