
import React from 'react';
import { Bot, AlertTriangle, Info, Shield, CheckCircle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ActivityEntry {
  id: string;
  type: 'agent_hired' | 'agent_terminated' | 'task_completed' | 'incident_detected' | 'scan_started';
  agent?: string;
  timestamp: string;
  message: string;
  details?: string;
}

interface ActivityItemProps {
  activity: ActivityEntry;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  const { type, agent, timestamp, message, details } = activity;
  
  const getIcon = () => {
    switch (type) {
      case 'agent_hired':
      case 'agent_terminated':
        return <Bot className="h-5 w-5" />;
      case 'task_completed':
        return <CheckCircle className="h-5 w-5" />;
      case 'incident_detected':
        return <AlertTriangle className="h-5 w-5" />;
      case 'scan_started':
        return <Shield className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };
  
  const getIconColor = () => {
    switch (type) {
      case 'agent_hired':
        return 'text-primary bg-primary/10';
      case 'agent_terminated':
        return 'text-muted-foreground bg-muted';
      case 'task_completed':
        return 'text-success bg-success/10';
      case 'incident_detected':
        return 'text-destructive bg-destructive/10';
      case 'scan_started':
        return 'text-info bg-info/10';
      default:
        return 'text-muted-foreground bg-muted';
    }
  };
  
  return (
    <div className="flex">
      <div className="relative mr-4">
        <div className={cn('rounded-full p-2', getIconColor())}>
          {getIcon()}
        </div>
        <span className="absolute top-10 left-1/2 h-full w-px -translate-x-1/2 bg-border" />
      </div>
      
      <div className="flex-1 pb-8">
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-3 w-3 text-muted-foreground" />
          <span className="text-muted-foreground">{timestamp}</span>
        </div>
        
        <h3 className="mt-1 text-base font-medium">
          {message}
        </h3>
        
        {agent && (
          <p className="mt-1 text-sm text-muted-foreground">
            Agent: {agent}
          </p>
        )}
        
        {details && (
          <p className="mt-2 text-sm text-muted-foreground">
            {details}
          </p>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;
