
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Bot, 
  Activity, 
  Settings, 
  HelpCircle
} from 'lucide-react';

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
          ? "bg-sidebar-accent text-primary font-medium" 
          : "text-sidebar-foreground hover:bg-sidebar-accent/50"
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const mainNavItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
    { icon: ShoppingBag, label: "Marketplace", path: "/marketplace" },
    { icon: Bot, label: "Your Agents", path: "/your-agents" },
    { icon: Activity, label: "Activity", path: "/activity" },
  ];

  const secondaryNavItems = [
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: HelpCircle, label: "Help", path: "/help" },
  ];

  return (
    <div className="hidden md:flex h-full w-64 flex-col bg-sidebar border-r border-border">
      <div className="flex flex-col gap-4 p-4">
        <div className="border-b border-border pb-4">
          <Link to="/" className="flex items-center gap-2 font-semibold mb-8">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">AS</span>
            </div>
            <span>Agentic Security</span>
          </Link>
          
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
        </div>
        
        <div>
          <p className="text-xs font-medium text-sidebar-foreground/60 mb-3 pl-3">Support</p>
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
