
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SubItem {
  label: string;
  path: string;
}

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
  isActive: boolean;
  subItems?: SubItem[];
}

const SidebarItem = ({ icon: Icon, label, path, isActive, subItems }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(isActive);
  
  const hasSubItems = subItems && subItems.length > 0;
  
  const toggleSubMenu = (e: React.MouseEvent) => {
    if (hasSubItems) {
      e.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="flex flex-col">
      <Link 
        to={hasSubItems ? '#' : path}
        onClick={toggleSubMenu}
        className={cn(
          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
          isActive 
            ? "bg-sidebar-accent text-primary font-medium" 
            : "text-sidebar-foreground hover:bg-sidebar-accent/50"
        )}
      >
        <Icon className="h-4 w-4" />
        <span>{label}</span>
        {hasSubItems && (
          isOpen 
            ? <ChevronDown className="h-4 w-4 ml-auto" /> 
            : <ChevronRight className="h-4 w-4 ml-auto" />
        )}
      </Link>
      
      {hasSubItems && isOpen && (
        <div className="ml-8 mt-1 space-y-1">
          {subItems.map((subItem) => (
            <Link
              key={subItem.path}
              to={subItem.path}
              className={cn(
                "block rounded-md px-3 py-1.5 text-sm transition-colors",
                location.pathname === subItem.path
                  ? "bg-sidebar-accent text-primary font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              )}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
