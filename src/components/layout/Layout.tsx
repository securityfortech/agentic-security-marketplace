
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 overflow-y-auto bg-background p-4 md:p-6">
        {children}
      </main>
    </div>
  );
};

export default Layout;
