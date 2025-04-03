
import React from 'react';
import { LayoutDashboard, ShoppingBag, Bot, Activity, BarChart } from 'lucide-react';
import SidebarItem from './SidebarItem';
import { 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton
} from '@/components/ui/sidebar';

interface MainNavigationProps {
  pathname: string;
}

const MainNavigation = ({ pathname }: MainNavigationProps) => {
  const mainNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { 
      icon: ShoppingBag, 
      label: "Marketplace", 
      path: "/", 
      subItems: [
        { label: "Marketplace", path: "/" },
        { label: "Usage", path: "/marketplace/usage" }
      ]
    },
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
          isActive={
            item.subItems 
              ? pathname === item.path || item.subItems.some(subItem => pathname === subItem.path)
              : pathname === item.path
          }
          subItems={item.subItems}
        />
      ))}
    </nav>
  );
};

export default MainNavigation;
