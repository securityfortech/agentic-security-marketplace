
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface AgentBadgeProps {
  text: string;
  variant?: "default" | "secondary" | "destructive" | "outline";
  size?: "default" | "small";
  className?: string;
}

const AgentBadge = ({ 
  text, 
  variant = "default",
  size = "default",
  className = ""
}: AgentBadgeProps) => {
  const sizeClass = size === "small" ? "text-[10px]" : "text-xs";
  
  return (
    <Badge 
      variant={variant} 
      className={`${sizeClass} rounded-full px-3 ${className}`}
    >
      {text}
    </Badge>
  );
};

export default AgentBadge;
