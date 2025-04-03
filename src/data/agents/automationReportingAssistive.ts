
import { Agent } from './types';

export const automationReportingAssistiveAgents: Agent[] = [
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
