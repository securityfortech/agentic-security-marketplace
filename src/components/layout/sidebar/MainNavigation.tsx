
import React from 'react';
import { LayoutDashboard, ShoppingBag, Bot, Activity } from 'lucide-react';
import SidebarItem from './SidebarItem';

interface MainNavigationProps {
  pathname: string;
}

const MainNavigation = ({ pathname }: MainNavigationProps) => {
  const mainNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: ShoppingBag, label: "Marketplace", path: "/" },
    { icon: Bot, label: "Your Agents", path: "/your-agents" },
    { icon: Activity, label: "Activity", path: "/activity" },
  ];

  return (
    <nav className="flex flex-col gap-1">
      {mainNavItems.map((item) => (
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

export default MainNavigation;
