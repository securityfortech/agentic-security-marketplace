
import React, { useState } from 'react';
import { Agent } from '@/components/agents/AgentCard';
import AgentList from '@/components/agents/AgentList';
import AgentStatus from '@/components/agents/AgentStatus';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from 'lucide-react';

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
      setSelectedAgent(agents.length > 1 ? agents[0] : null);
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
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Your Agents</h1>
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <AgentList 
              agents={agents}
              isHired={true}
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

export default YourAgents;
