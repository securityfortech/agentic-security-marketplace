
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Sidebar as SidebarComponent, 
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel
} from '@/components/ui/sidebar';
import { 
  LayoutDashboard, 
  Database, 
  KeyRound, 
  HardDrive, 
  Code2, 
  Activity, 
  ShieldAlert, 
  Table, 
  FileCode, 
  Users
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const mainItems = [
    { icon: LayoutDashboard, label: "Project overview", path: "/dashboard" },
    { icon: Table, label: "Table Editor", path: "/table-editor" },
    { icon: FileCode, label: "SQL Editor", path: "/sql-editor" },
  ];

  const featureItems = [
    { icon: Database, label: "Database", path: "/database" },
    { icon: KeyRound, label: "Authentication", path: "/authentication" },
    { icon: HardDrive, label: "Storage", path: "/storage" },
    { icon: Code2, label: "Edge Functions", path: "/edge-functions" },
    { icon: Activity, label: "Realtime", path: "/realtime" },
  ];

  const supportItems = [
    { icon: ShieldAlert, label: "Security", path: "/security" },
    { icon: Users, label: "Team", path: "/team" },
  ];

  return (
    <SidebarComponent variant="sidebar" className="bg-black border-r border-zinc-800">
      <SidebarHeader className="px-2 py-4">
        <Link to="/" className="flex items-center space-x-2 px-2">
          <div className="w-8 h-8 rounded-md bg-emerald-500 flex items-center justify-center">
            <span className="text-black font-bold">AS</span>
          </div>
          <span className="font-medium text-sm">agentic-security</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {mainItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  isActive={pathname === item.path}
                  asChild
                  tooltip={item.label}
                >
                  <Link to={item.path}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Features</SidebarGroupLabel>
          <SidebarMenu>
            {featureItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  isActive={pathname === item.path}
                  asChild
                  tooltip={item.label}
                >
                  <Link to={item.path}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Support</SidebarGroupLabel>
          <SidebarMenu>
            {supportItems.map((item) => (
              <SidebarMenuItem key={item.path}>
                <SidebarMenuButton
                  isActive={pathname === item.path}
                  asChild
                  tooltip={item.label}
                >
                  <Link to={item.path}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </SidebarComponent>
  );
};

export default Sidebar;
