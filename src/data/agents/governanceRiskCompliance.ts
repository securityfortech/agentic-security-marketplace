
import { Agent } from './types';

export const governanceRiskComplianceAgents: Agent[] = [
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
  }
];
