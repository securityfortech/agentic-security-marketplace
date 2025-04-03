
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {!isMobile ? (
          <>
            <div className={`transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-0'}`}>
              {sidebarOpen && <Sidebar />}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-16 z-30 md:left-4"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </>
        ) : (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="absolute left-4 top-16 z-30">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
        )}
        <main className={`flex-1 overflow-y-auto bg-background p-4 md:p-6 ${!isMobile && 'transition-all duration-300'}`}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
