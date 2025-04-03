
import { Agent } from './types';

export const threatIntelligenceDetectionAgents: Agent[] = [
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
  }
];
