
import React, { useState } from 'react';
import AgentFilter from '@/components/agents/AgentFilter';
import AgentList from '@/components/agents/AgentList';
import { Agent } from '@/components/agents/AgentCard';
import { useToast } from '@/hooks/use-toast';

// Sample marketplace agents data
const marketplaceAgents: Agent[] = [
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
    price: '$125'
  },
  {
    id: '2',
    name: 'IncidentShield',
    description: 'Automated incident response agent that helps your team react quickly to security breaches and contains threats.',
    type: 'Incident Responder',
    skills: [
      { name: 'Threat Hunting', level: 'expert' },
      { name: 'Malware Analysis', level: 'intermediate' },
      { name: 'Forensic Investigation', level: 'expert' }
    ],
    price: '$140'
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
    price: '$165'
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
    price: '$110'
  },
  {
    id: '5',
    name: 'VulnScanner Pro',
    description: 'High-speed vulnerability scanner that continuously monitors your web applications for security issues.',
    type: 'Vulnerability Scanner',
    skills: [
      { name: 'Web App Scanning', level: 'expert' },
      { name: 'OWASP Top 10', level: 'expert' },
      { name: 'API Security', level: 'intermediate' }
    ],
    price: '$95'
  },
  {
    id: '6',
    name: 'ThreatHound',
    description: 'Proactive threat hunting agent that searches for indicators of compromise before they become full breaches.',
    type: 'Threat Hunter',
    skills: [
      { name: 'IOC Detection', level: 'expert' },
      { name: 'Behavior Analysis', level: 'intermediate' },
      { name: 'Threat Intelligence', level: 'expert' }
    ],
    price: '$150'
  },
];

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const { toast } = useToast();
  
  const handleTypeSelect = (type: string) => {
    setSelectedTypes((prev) => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };
  
  const handleTypeClear = () => {
    setSelectedTypes([]);
  };
  
  const filteredAgents = marketplaceAgents.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedTypes.length === 0 || 
                        selectedTypes.includes(agent.type);
    
    return matchesSearch && matchesType;
  });
  
  const handleHireAgent = (agent: Agent) => {
    toast({
      title: "Agent Hired",
      description: `${agent.name} has been added to your team.`,
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Agent Marketplace</h1>
      </div>
      
      <AgentFilter
        searchTerm={searchTerm}
        selectedTypes={selectedTypes}
        onSearchChange={setSearchTerm}
        onTypeSelect={handleTypeSelect}
        onTypeClear={handleTypeClear}
      />
      
      <AgentList 
        agents={filteredAgents}
        onHire={handleHireAgent}
      />
    </div>
  );
};

export default Marketplace;
