
import React from 'react';
import { useLocation } from 'react-router-dom';
import MainNavigation from './sidebar/MainNavigation';
import SupportNavigation from './sidebar/SupportNavigation';

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="flex h-full w-full flex-col bg-sidebar border-r border-border">
      <div className="flex flex-col gap-4 p-4">
        <div className="border-b border-border pb-4">
          <MainNavigation pathname={pathname} />
        </div>
        
        <div>
          <p className="text-xs font-medium text-sidebar-foreground/60 mb-3 pl-3">Support</p>
          <SupportNavigation pathname={pathname} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
