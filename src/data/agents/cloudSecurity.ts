
import { Agent } from './types';

export const cloudSecurityAgents: Agent[] = [
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
  }
];
