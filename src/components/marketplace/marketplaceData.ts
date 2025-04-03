
import { Agent } from '@/components/agents/AgentCard';

// Sample marketplace agents data
export const marketplaceAgents: Agent[] = [
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
