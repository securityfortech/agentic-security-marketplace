
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, User, Settings, LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from '@/contexts/AuthContext';
import { SidebarTrigger } from '@/components/ui/sidebar';

const Navbar = () => {
  const { user, signOut } = useAuth();

  // Generate initials for avatar fallback
  const getInitials = () => {
    if (!user) return 'U';
    const name = user.user_metadata?.name || user.email || '';
    return name.split('@')[0].substring(0, 2).toUpperCase();
  };

  return (
    <nav className="bg-transparent border-b border-zinc-800 h-16 flex items-center px-4 lg:px-6">
      <div className="flex-1 flex items-center justify-between w-full">
        <div className="flex items-center space-x-2">
          <SidebarTrigger className="mr-2 text-white" />
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-emerald-500 flex items-center justify-center">
              <span className="text-black font-bold">AS</span>
            </div>
            <span className="font-bold text-xl hidden md:inline-block">agentic-security</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Bell className="h-5 w-5" />
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full p-0">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-zinc-800 text-white">{getInitials()}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/dashboard" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={signOut} className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
