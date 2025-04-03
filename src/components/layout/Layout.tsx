
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { ChevronLeft } from 'lucide-react';
import { 
  SidebarProvider, 
  Sidebar as ShadcnSidebar,
  SidebarContent,
  SidebarTrigger
} from '@/components/ui/sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen flex-col bg-background">
        <Navbar />
        <div className="flex flex-1 w-full overflow-hidden">
          <ShadcnSidebar>
            <SidebarContent>
              <Sidebar />
            </SidebarContent>
          </ShadcnSidebar>
          <main className="flex-1 overflow-y-auto bg-background p-4 md:p-6">
            <div className="flex items-center mb-4">
              <SidebarTrigger />
            </div>
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
