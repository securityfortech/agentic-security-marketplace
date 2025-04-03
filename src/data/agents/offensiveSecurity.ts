
import { Agent } from './types';

export const offensiveSecurityAgents: Agent[] = [
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
  }
];
