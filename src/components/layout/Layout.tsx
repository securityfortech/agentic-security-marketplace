
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex h-screen flex-col bg-background">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {!isMobile && <Sidebar />}
        <main className="flex-1 overflow-y-auto bg-background p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
