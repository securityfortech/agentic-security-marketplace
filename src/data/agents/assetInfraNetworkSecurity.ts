
import { Agent } from './types';

export const assetInfraNetworkSecurityAgents: Agent[] = [
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
  }
];
