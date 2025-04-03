
import { Agent } from './types';

export const securityOperationsAgents: Agent[] = [
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
  }
];
