
export interface Agent {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  avatar?: string;
  status: 'active' | 'inactive';
  features: string[];
  featured?: boolean;
  creator?: string;
  interactions: number;
  type: string; // Adding type property for filtering
  image: string; // Adding colorful image for each agent
}

// Updated data with new fields
export const marketplaceAgents: Agent[] = [
  {
    id: '1',
    name: 'Network Guardian',
    description: 'Monitors network traffic and identifies suspicious patterns',
    price: 499,
    category: 'Network',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'securitylab',
    interactions: 317500,
    type: 'IT',
    image: 'linear-gradient(135deg, #6E59A5, #9b87f5)',
    features: [
      'Real-time traffic analysis',
      'Anomaly detection',
      'Automated alerts',
      'Detailed threat reports'
    ]
  },
  {
    id: '2',
    name: 'Perimeter Defender',
    description: 'Protects your network perimeter from external threats',
    price: 699,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'firewallpro',
    interactions: 64800,
    type: 'Response',
    image: 'linear-gradient(180deg, #F97316, #FDE1D3)',
    features: [
      'Firewall integration',
      'Intrusion prevention',
      'Automated blocking',
      'Threat intelligence'
    ]
  },
  {
    id: '3',
    name: 'Data Shield',
    description: 'Protects sensitive data from unauthorized access',
    price: 599,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    creator: 'dataguard',
    interactions: 128000,
    type: 'Compliance',
    image: 'linear-gradient(90deg, #0EA5E9, #D3E4FD)',
    features: [
      'Data encryption',
      'Access control',
      'Compliance monitoring',
      'Data leak prevention'
    ]
  },
  {
    id: '4',
    name: 'Threat Hunter',
    description: 'Proactively searches for and eliminates potential threats',
    price: 899,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'threatintel',
    interactions: 482100,
    type: 'Pentest',
    image: 'linear-gradient(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)',
    features: [
      'Advanced threat detection',
      'Behavior analysis',
      'Automated response',
      'Forensic investigation'
    ]
  },
  {
    id: '5',
    name: 'Compliance Monitor',
    description: 'Ensures compliance with regulatory requirements',
    price: 399,
    category: 'Monitoring',
    avatar: '/placeholder.svg',
    status: 'inactive',
    creator: 'regulatorypro',
    interactions: 56600,
    type: 'Compliance',
    image: 'linear-gradient(to right, #ee9ca7, #ffdde2)',
    features: [
      'Compliance reporting',
      'Policy enforcement',
      'Audit preparation',
      'Gap analysis'
    ]
  },
  {
    id: '6',
    name: 'Incident Responder',
    description: 'Rapidly responds to security incidents to minimize damage',
    price: 799,
    category: 'Response',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'incidentteam',
    interactions: 98700,
    type: 'Response',
    image: 'linear-gradient(90deg, hsla(59, 86%, 68%, 1) 0%, hsla(134, 36%, 53%, 1) 100%)',
    features: [
      'Automated response',
      'Incident analysis',
      'Damage control',
      'Recovery assistance'
    ]
  },
  {
    id: '7',
    name: 'Vulnerability Scanner',
    description: 'Identifies vulnerabilities in your systems and applications',
    price: 599,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    creator: 'securityscan',
    interactions: 204300,
    type: 'Pentest',
    image: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
    features: [
      'Automated scanning',
      'Vulnerability prioritization',
      'Remediation guidance',
      'Security reporting'
    ]
  },
  {
    id: '8',
    name: 'Endpoint Protector',
    description: 'Secures endpoint devices from malware and other threats',
    price: 549,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    creator: 'endpointdef',
    interactions: 187000,
    type: 'Awareness',
    image: 'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)',
    features: [
      'Anti-malware',
      'Device control',
      'Application security',
      'Behavior monitoring'
    ]
  }
];
