
import React from 'react';
import ActivityFeed from '@/components/activity/ActivityFeed';
import { ActivityEntry } from '@/components/activity/ActivityItem';

// Sample activity data
const activityData: ActivityEntry[] = [
  {
    id: '1',
    type: 'agent_hired',
    agent: 'NetProwler',
    timestamp: '2023-10-15 09:30',
    message: 'Agent hired',
    details: 'You have hired the NetProwler pentesting agent for your security team.'
  },
  {
    id: '2',
    type: 'scan_started',
    agent: 'NetProwler',
    timestamp: '2023-10-15 09:45',
    message: 'Network scan initiated',
    details: 'Comprehensive scan of internal network started. Expected completion in 30 minutes.'
  },
  {
    id: '3',
    type: 'incident_detected',
    agent: 'NetProwler',
    timestamp: '2023-10-15 10:15',
    message: 'Critical vulnerability detected',
    details: 'CVE-2023-1234 found in web server. Outdated SSL library with known exploit vector.'
  },
  {
    id: '4',
    type: 'agent_hired',
    agent: 'ByteHunter',
    timestamp: '2023-10-16 11:30',
    message: 'Agent hired',
    details: 'You have hired the ByteHunter reverse engineering agent for your security team.'
  },
  {
    id: '5',
    type: 'task_completed',
    agent: 'ByteHunter',
    timestamp: '2023-10-16 14:20',
    message: 'Malware analysis complete',
    details: 'Suspicious file was analyzed and determined to be ransomware variant. Detailed report available.'
  },
  {
    id: '6',
    type: 'agent_hired',
    agent: 'ComplianceGuard',
    timestamp: '2023-10-17 09:15',
    message: 'Agent hired',
    details: 'You have hired the ComplianceGuard compliance analyst agent for your security team.'
  },
  {
    id: '7',
    type: 'task_completed',
    agent: 'ComplianceGuard',
    timestamp: '2023-10-18 16:45',
    message: 'Compliance audit completed',
    details: 'GDPR compliance audit complete. 3 issues found that require remediation.'
  },
];

const Activity = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Activity</h1>
      </div>
      
      <ActivityFeed activities={activityData} />
    </div>
  );
};

export default Activity;
