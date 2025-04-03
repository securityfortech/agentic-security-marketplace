
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
  isActive: boolean;
}

const SidebarItem = ({ icon: Icon, label, path, isActive }: SidebarItemProps) => {
  return (
    <Link 
      to={path}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        isActive 
          ? "bg-zinc-800 text-white font-medium" 
          : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
};

export default SidebarItem;
