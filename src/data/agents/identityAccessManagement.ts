
import { Agent } from './types';

export const identityAccessManagementAgents: Agent[] = [
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
  }
];
