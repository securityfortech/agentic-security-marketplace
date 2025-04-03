
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { 
  SidebarProvider, 
  SidebarRail, 
  SidebarInset,
  SidebarTrigger 
} from '@/components/ui/sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <SidebarProvider defaultOpen={!isMobile}>
      <div className="flex h-screen w-full flex-col bg-black text-white">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <SidebarRail />
          <main className="flex-1 overflow-y-auto bg-black p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
