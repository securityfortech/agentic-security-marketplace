
import { Agent } from './types';

export const applicationSecurityAgents: Agent[] = [
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
  }
];
