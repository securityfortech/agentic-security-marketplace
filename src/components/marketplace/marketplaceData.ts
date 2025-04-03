
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
  type: string; // Using more detailed security categories
  image: string; // Colorful image for each agent
}

// Updated data with new types and agents
export const marketplaceAgents: Agent[] = [
  // Offensive Security & Pentesting
  {
    id: '1',
    name: 'Red Team Emulator',
    description: 'Simulates advanced persistent threats and provides comprehensive red team emulation capabilities',
    price: 899,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'redteamsec',
    interactions: 215700,
    type: 'Offensive Security & Pentesting',
    image: 'linear-gradient(90deg, #FF416C, #FF4B2B)',
    features: [
      'Red team operation simulation',
      'Attack chain analysis',
      'Defensive gap identification',
      'Continuous security posture testing'
    ]
  },
  {
    id: '2',
    name: 'Phishing Campaign Executor',
    description: 'Automates internal phishing campaigns to test and improve user security awareness',
    price: 649,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'phishguard',
    interactions: 138200,
    type: 'Offensive Security & Pentesting',
    image: 'linear-gradient(90deg, hsla(46, 73%, 75%, 1) 0%, hsla(176, 73%, 88%, 1) 100%)',
    features: [
      'Custom phishing template creation',
      'Automated campaign execution',
      'User response tracking',
      'Detailed campaign reports'
    ]
  },
  {
    id: '3',
    name: 'LLM Jailbreak Detector',
    description: 'Identifies and prevents attempts to bypass AI system safeguards and security measures',
    price: 799,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'aishield',
    interactions: 94300,
    type: 'Offensive Security & Pentesting',
    image: 'linear-gradient(90deg, hsla(59, 86%, 68%, 1) 0%, hsla(134, 36%, 53%, 1) 100%)',
    features: [
      'Real-time jailbreak detection',
      'Pattern recognition',
      'Prompt analysis',
      'Security alert generation'
    ]
  },
  
  // Vulnerability Management
  {
    id: '4',
    name: 'CVE Prioritizer',
    description: 'Analyzes and prioritizes vulnerabilities based on your specific environment and risk profile',
    price: 599,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'vulnexperts',
    interactions: 267400,
    type: 'Vulnerability Management',
    image: 'linear-gradient(to top, #d299c2 0%, #fef9d7 100%)',
    features: [
      'Risk-based prioritization',
      'Environment-specific scoring',
      'Patch scheduling assistance',
      'Remediation guidance'
    ]
  },
  {
    id: '5',
    name: 'Fix Validation Agent',
    description: 'Automatically validates vulnerability fixes and ensures issues are properly remediated',
    price: 549,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'fixverify',
    interactions: 124800,
    type: 'Vulnerability Management',
    image: 'linear-gradient(90deg, hsla(277, 75%, 84%, 1) 0%, hsla(297, 50%, 51%, 1) 100%)',
    features: [
      'Automated retesting',
      'Verification reporting',
      'Regression testing',
      'Fix effectiveness scoring'
    ]
  },
  {
    id: '6',
    name: 'Code Dependency Analyzer',
    description: 'Scans your codebase to identify vulnerable dependencies and supply chain risks',
    price: 479,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'dependsec',
    interactions: 156300,
    type: 'Vulnerability Management',
    image: 'linear-gradient(to right, #6a11cb, #2575fc)',
    features: [
      'Dependency tree analysis',
      'Known vulnerability matching',
      'Update recommendations',
      'License compliance checks'
    ]
  },
  
  // Cloud Security
  {
    id: '7',
    name: 'Cloud Misconfiguration Scanner',
    description: 'Identifies and remediates security misconfigurations across your cloud environments',
    price: 799,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'cloudsecure',
    interactions: 289500,
    type: 'Cloud Security',
    image: 'linear-gradient(to top, #30cfd0, #330867)',
    features: [
      'Multi-cloud support',
      'Real-time scanning',
      'Automated remediation',
      'Compliance benchmarking'
    ]
  },
  {
    id: '8',
    name: 'IAM Risk Advisor',
    description: 'Analyzes identity and access management configurations to identify security risks',
    price: 699,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'iamsecure',
    interactions: 178600,
    type: 'Cloud Security',
    image: 'linear-gradient(225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)',
    features: [
      'Permission analysis',
      'Least privilege recommendations',
      'Role optimization',
      'Access path visualization'
    ]
  },
  {
    id: '9',
    name: 'Container Security Guardian',
    description: 'Protects containerized environments by scanning images and enforcing security policies',
    price: 749,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'k8ssec',
    interactions: 143200,
    type: 'Cloud Security',
    image: 'linear-gradient(90deg, hsla(139, 70%, 75%, 1) 0%, hsla(63, 90%, 76%, 1) 100%)',
    features: [
      'Image vulnerability scanning',
      'Runtime security monitoring',
      'Policy enforcement',
      'Kubernetes RBAC validation'
    ]
  },
  
  // Application Security (AppSec)
  {
    id: '10',
    name: 'AppSec PR Reviewer',
    description: 'Automatically reviews pull requests for security issues before code is merged',
    price: 649,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'securepr',
    interactions: 243800,
    type: 'Application Security (AppSec)',
    image: 'linear-gradient(to bottom right, #00F260, #0575E6)',
    features: [
      'Code security review',
      'Security best practice enforcement',
      'CI/CD integration',
      'Automated fix suggestions'
    ]
  },
  {
    id: '11',
    name: 'Threat Modeling Assistant',
    description: 'Guides teams through the threat modeling process to identify security risks early',
    price: 599,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'threatmodeler',
    interactions: 112700,
    type: 'Application Security (AppSec)',
    image: 'linear-gradient(90deg, hsla(24, 100%, 83%, 1) 0%, hsla(341, 91%, 68%, 1) 100%)',
    features: [
      'Interactive modeling sessions',
      'Threat identification',
      'Risk prioritization',
      'Mitigation strategies'
    ]
  },
  {
    id: '12',
    name: 'SBOM Generator',
    description: 'Creates and maintains software bills of materials (SBOM) for compliance and security',
    price: 449,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'sbomtool',
    interactions: 97300,
    type: 'Application Security (AppSec)',
    image: 'linear-gradient(90deg, rgb(245,152,168) 0%, rgb(246,237,178) 100%)',
    features: [
      'Automated SBOM generation',
      'Component inventory',
      'Vulnerability correlation',
      'Compliance reporting'
    ]
  },
  
  // Governance, Risk & Compliance (GRC)
  {
    id: '13',
    name: 'Compliance Readiness Agent',
    description: 'Prepares your organization for compliance audits and certifications',
    price: 749,
    category: 'Compliance',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'complysecure',
    interactions: 196400,
    type: 'Governance, Risk & Compliance (GRC)',
    image: 'linear-gradient(to top left, #FF5E62, #FF9966)',
    features: [
      'Gap analysis',
      'Evidence collection',
      'Control implementation',
      'Audit preparation'
    ]
  },
  {
    id: '14',
    name: 'GDPR Data Mapper',
    description: 'Maps data flows and identifies privacy risks to ensure GDPR compliance',
    price: 699,
    category: 'Compliance',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'privacyguard',
    interactions: 128700,
    type: 'Governance, Risk & Compliance (GRC)',
    image: 'linear-gradient(109.6deg, rgba(223,234,247,1) 11.2%, rgba(244,248,252,1) 91.1%)',
    features: [
      'Data flow visualization',
      'PII identification',
      'Risk assessment',
      'Compliance documentation'
    ]
  },
  {
    id: '15',
    name: 'Third-Party Risk Analyst',
    description: 'Evaluates the security posture of vendors and third-party partners',
    price: 599,
    category: 'Compliance',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'vendorsec',
    interactions: 115900,
    type: 'Governance, Risk & Compliance (GRC)',
    image: 'linear-gradient(180deg, #F97316, #FDE1D3)',
    features: [
      'Vendor security assessment',
      'Questionnaire automation',
      'Risk scoring',
      'Continuous monitoring'
    ]
  },
  
  // Security Operations (SecOps)
  {
    id: '16',
    name: 'Incident Triage Agent',
    description: 'Automates initial incident triage to speed up response and reduce analyst fatigue',
    price: 899,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'incidentpro',
    interactions: 314200,
    type: 'Security Operations (SecOps)',
    image: 'linear-gradient(to right, #ee9ca7, #ffdde2)',
    features: [
      'Alert prioritization',
      'Contextual enrichment',
      'Automated triage',
      'Response recommendation'
    ]
  },
  {
    id: '17',
    name: 'Alert Fatigue Reducer',
    description: 'Cuts through alert noise to focus analysts on real threats',
    price: 749,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'alertpro',
    interactions: 187600,
    type: 'Security Operations (SecOps)',
    image: 'linear-gradient(90deg, #3F2B96, #A8C0FF)',
    features: [
      'Alert correlation',
      'Noise reduction',
      'Pattern recognition',
      'Priority scoring'
    ]
  },
  {
    id: '18',
    name: 'MITRE ATT&CK Auditor',
    description: 'Evaluates your detection coverage against the MITRE ATT&CK framework',
    price: 699,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'mitresec',
    interactions: 147300,
    type: 'Security Operations (SecOps)',
    image: 'linear-gradient(90deg, hsla(186, 33%, 94%, 1) 0%, hsla(216, 41%, 79%, 1) 100%)',
    features: [
      'Coverage mapping',
      'Gap analysis',
      'Detection recommendations',
      'Threat-based prioritization'
    ]
  },
  
  // Identity & Access Management (IAM)
  {
    id: '19',
    name: 'Active Directory Auditor',
    description: 'Identifies security risks and misconfigurations in Active Directory environments',
    price: 799,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'adsecure',
    interactions: 217600,
    type: 'Identity & Access Management (IAM)',
    image: 'linear-gradient(135deg, #6E59A5, #9b87f5)',
    features: [
      'Privilege escalation path detection',
      'Security misconfiguration identification',
      'Group policy analysis',
      'Remediation guidance'
    ]
  },
  {
    id: '20',
    name: 'Zero Trust Policy Tester',
    description: 'Validates zero trust policies and identifies potential security gaps',
    price: 749,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'zerotrustsec',
    interactions: 132400,
    type: 'Identity & Access Management (IAM)',
    image: 'linear-gradient(45deg, #2E3192, #1BFFFF)',
    features: [
      'Policy simulation',
      'Access path validation',
      'Exception identification',
      'Zero trust maturity assessment'
    ]
  },
  {
    id: '21',
    name: 'MFA Configuration Checker',
    description: 'Verifies and optimizes multi-factor authentication setups across your organization',
    price: 549,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'mfasec',
    interactions: 96800,
    type: 'Identity & Access Management (IAM)',
    image: 'linear-gradient(108deg, rgba(242,245,139,1) 17.7%, rgba(148,197,20,0.68) 91.2%)',
    features: [
      'MFA coverage assessment',
      'Configuration validation',
      'Bypass risk identification',
      'User experience optimization'
    ]
  },
  
  // Asset, Infrastructure & Network Security
  {
    id: '22',
    name: 'Real-time Asset Inventory',
    description: 'Continuously discovers and maps all assets across your infrastructure',
    price: 749,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'assetmaster',
    interactions: 287400,
    type: 'Asset, Infrastructure & Network Security',
    image: 'linear-gradient(to right, #243949 0%, #517fa4 100%)',
    features: [
      'Automated discovery',
      'Classification and tagging',
      'Vulnerability correlation',
      'Change tracking'
    ]
  },
  {
    id: '23',
    name: 'DNS Hygiene Auditor',
    description: 'Ensures your DNS configurations are secure and properly maintained',
    price: 599,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'dnssec',
    interactions: 124500,
    type: 'Asset, Infrastructure & Network Security',
    image: 'linear-gradient(90deg, hsla(39, 100%, 77%, 1) 0%, hsla(22, 90%, 57%, 1) 100%)',
    features: [
      'Zone file analysis',
      'Misconfiguration detection',
      'Security best practices',
      'Takeover risk assessment'
    ]
  },
  {
    id: '24',
    name: 'Network Segmentation Auditor',
    description: 'Validates network segmentation and identifies security boundaries',
    price: 649,
    category: 'Security',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'netsegment',
    interactions: 115700,
    type: 'Asset, Infrastructure & Network Security',
    image: 'linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)',
    features: [
      'Segment mapping',
      'Traffic analysis',
      'Boundary validation',
      'Lateral movement risk assessment'
    ]
  },
  
  // Threat Intelligence & Detection
  {
    id: '25',
    name: 'Threat Intel Summarizer',
    description: 'Consolidates and prioritizes threat intelligence to focus on what matters to your organization',
    price: 799,
    category: 'Intelligence',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'threatintel',
    interactions: 296400,
    type: 'Threat Intelligence & Detection',
    image: 'linear-gradient(135deg, #3a7bd5, #00d2ff)',
    features: [
      'Contextual prioritization',
      'Industry-specific focus',
      'Actionable intelligence',
      'IOC extraction'
    ]
  },
  {
    id: '26',
    name: 'Dark Web Monitor',
    description: 'Continuously scans the dark web for leaked credentials and sensitive data',
    price: 749,
    category: 'Intelligence',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'darkwatcher',
    interactions: 217300,
    type: 'Threat Intelligence & Detection',
    image: 'linear-gradient(45deg, #283048, #859398)',
    features: [
      'Credential monitoring',
      'Exposure alerts',
      'Dark forum tracking',
      'Data leak identification'
    ]
  },
  {
    id: '27',
    name: 'AI YARA Rule Creator',
    description: 'Automatically generates and optimizes YARA rules for threat detection',
    price: 699,
    category: 'Intelligence',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'yaragenius',
    interactions: 134800,
    type: 'Threat Intelligence & Detection',
    image: 'linear-gradient(184.1deg, rgba(249,255,182,1) 44.7%, rgba(226,255,172,1) 67.2%)',
    features: [
      'Pattern identification',
      'Rule generation',
      'False positive reduction',
      'Performance optimization'
    ]
  },
  
  // Automation, Reporting & Assistive Agents
  {
    id: '28',
    name: 'Documentation Automator',
    description: 'Creates and maintains security documentation to reduce administrative burden',
    price: 499,
    category: 'Automation',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: true,
    creator: 'docsecure',
    interactions: 254600,
    type: 'Automation, Reporting & Assistive Agents',
    image: 'linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)',
    features: [
      'Template-based documentation',
      'Automated updates',
      'Process documentation',
      'Knowledge preservation'
    ]
  },
  {
    id: '29',
    name: 'Security Champions Assistant',
    description: 'Supports and empowers security champions across your organization',
    price: 549,
    category: 'Automation',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'championsec',
    interactions: 143700,
    type: 'Automation, Reporting & Assistive Agents',
    image: 'linear-gradient(180deg, rgb(254,100,121) 0%, rgb(251,221,186) 100%)',
    features: [
      'Training resources',
      'Champion tracking',
      'Security awareness campaigns',
      'Knowledge sharing'
    ]
  },
  {
    id: '30',
    name: 'Campaign Report Compiler',
    description: 'Automatically generates comprehensive reports from security campaign data',
    price: 499,
    category: 'Automation',
    avatar: '/placeholder.svg',
    status: 'active',
    featured: false,
    creator: 'reportmaster',
    interactions: 118900,
    type: 'Automation, Reporting & Assistive Agents',
    image: 'linear-gradient(111.4deg, rgba(238,113,113,1) 1%, rgba(246,215,148,1) 58%)',
    features: [
      'Data aggregation',
      'Visual reporting',
      'Trend analysis',
      'Executive summaries'
    ]
  }
];

