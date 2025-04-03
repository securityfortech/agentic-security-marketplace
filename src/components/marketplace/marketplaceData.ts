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
  },
  {
    id: '9',
    name: 'OSINT Analyst',
    description: 'Collects and analyzes open-source intelligence for threat assessment',
    price: 649,
    category: 'Intelligence',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'threatintel',
    interactions: 276500,
    type: 'OSINT',
    image: 'linear-gradient(135deg, #3a7bd5, #00d2ff)',
    features: [
      'Social media monitoring',
      'Dark web analysis',
      'Geolocation tracking',
      'Digital footprint assessment'
    ]
  },
  {
    id: '10',
    name: 'Ransomware Defender',
    description: 'Prevents, detects, and mitigates ransomware attacks before they cause damage',
    price: 899,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    creator: 'securityshield',
    interactions: 198400,
    type: 'Response',
    image: 'linear-gradient(90deg, #FF416C, #FF4B2B)',
    features: [
      'Behavior-based detection',
      'Real-time file monitoring',
      'Automated backup',
      'System restore capabilities'
    ]
  },
  {
    id: '11',
    name: 'Awareness Trainer',
    description: 'Creates and delivers customized security awareness training programs',
    price: 349,
    category: 'Training',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'securityedu',
    interactions: 342100,
    type: 'Awareness',
    image: 'linear-gradient(to right, #6a11cb, #2575fc)',
    features: [
      'Phishing simulations',
      'Interactive modules',
      'Progress tracking',
      'Customized content'
    ]
  },
  {
    id: '12',
    name: 'Policy Enforcer',
    description: 'Ensures compliance with organizational security policies and standards',
    price: 549,
    category: 'Compliance',
    avatar: '/placeholder.svg',
    status: 'active',
    creator: 'compliance360',
    interactions: 124700,
    type: 'Compliance',
    image: 'linear-gradient(45deg, #2E3192, #1BFFFF)',
    features: [
      'Policy monitoring',
      'Violation reporting',
      'Automated enforcement',
      'Compliance dashboards'
    ]
  },
  {
    id: '13',
    name: 'Threat Hunter Pro',
    description: 'Proactively searches for advanced persistent threats in your network',
    price: 979,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'huntexperts',
    interactions: 385200,
    type: 'Threat Hunting',
    image: 'linear-gradient(90deg, #3F2B96, #A8C0FF)',
    features: [
      'Behavior analytics',
      'Anomaly detection',
      'APT identification',
      'Threat intelligence integration'
    ]
  },
  {
    id: '14',
    name: 'Web App Scanner',
    description: 'Identifies and helps remediate vulnerabilities in web applications',
    price: 599,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    creator: 'websec',
    interactions: 215600,
    type: 'Pentest',
    image: 'linear-gradient(to bottom right, #00F260, #0575E6)',
    features: [
      'OWASP Top 10 checks',
      'Custom payloads',
      'API testing',
      'Remediation guidance'
    ]
  },
  {
    id: '15',
    name: 'Data Privacy Guardian',
    description: 'Ensures compliance with data privacy regulations like GDPR and CCPA',
    price: 749,
    category: 'Compliance',
    avatar: '/placeholder.svg',
    status: 'active',
    creator: 'privacyshield',
    interactions: 167800,
    type: 'Compliance',
    image: 'linear-gradient(to top left, #FF5E62, #FF9966)',
    features: [
      'PII scanning',
      'Consent management',
      'Data mapping',
      'Breach notification'
    ]
  },
  {
    id: '16',
    name: 'Phishing Defender',
    description: 'Detects and blocks phishing attempts before they reach users',
    price: 499,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'emailsec',
    interactions: 294500,
    type: 'Awareness',
    image: 'linear-gradient(to right, #8E2DE2, #4A00E0)',
    features: [
      'Email filtering',
      'URL analysis',
      'Attachment scanning',
      'User notifications'
    ]
  },
  {
    id: '17',
    name: 'Dark Web Monitor',
    description: 'Monitors the dark web for leaked credentials and sensitive information',
    price: 649,
    category: 'Intelligence',
    avatar: '/placeholder.svg',
    status: 'active',
    creator: 'darkwatcher',
    interactions: 165300,
    type: 'OSINT',
    image: 'linear-gradient(45deg, #283048, #859398)',
    features: [
      'Credentials monitoring',
      'Data breach alerts',
      'Dark web scanning',
      'Risk assessment'
    ]
  },
  {
    id: '18',
    name: 'Cloud Security Guardian',
    description: 'Monitors and secures cloud environments against misconfiguration and threats',
    price: 799,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    creator: 'clouddefend',
    interactions: 231000,
    type: 'IT',
    image: 'linear-gradient(to top, #30cfd0, #330867)',
    features: [
      'Cloud posture management',
      'Misconfiguration detection',
      'Compliance benchmarking',
      'Remediation automation'
    ]
  }
];
