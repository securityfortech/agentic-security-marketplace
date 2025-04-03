
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

      {/* Marketplace Section */}
      <div className="mt-4">
        <p className="text-xs font-medium text-sidebar-foreground/60 mb-3 pl-3">Marketplace</p>
        <div className="flex flex-col gap-1">
          <SidebarItem 
            icon={ShoppingBag}
            label="Marketplace"
            path="/"
            isActive={pathname === "/"}
          />
          <SidebarItem 
            icon={BarChart}
            label="Usage"
            path="/marketplace/usage"
            isActive={pathname === "/marketplace/usage"}
          />
        </div>
      </div>
    </nav>
  );
};

export default MainNavigation;
