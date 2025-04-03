
import React from 'react';
import { Settings, HelpCircle } from 'lucide-react';
import SidebarItem from './SidebarItem';

interface SupportNavigationProps {
  pathname: string;
}

const SupportNavigation = ({ pathname }: SupportNavigationProps) => {
  const secondaryNavItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: HelpCircle, label: "Help", path: "/help" },
  ];

  return (
    <nav className="flex flex-col gap-1">
      {secondaryNavItems.map((item) => (
        <SidebarItem 
          key={item.path}
          icon={item.icon}
          label={item.label}
          path={item.path}
          isActive={pathname === item.path}
        />
      ))}
    </nav>
  );
};

export default SupportNavigation;
