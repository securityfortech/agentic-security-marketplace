
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/contexts/AuthContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { User, Settings, LogOut } from 'lucide-react';

const LandingHeader = () => {
  const { user, signOut } = useAuth();

  const getInitials = () => {
    if (!user) return 'U';
    const name = user.user_metadata?.name || user.email || '';
    return name.split('@')[0].substring(0, 2).toUpperCase();
  };

  return (
    <nav className="flex justify-between items-center mb-10 md:mb-16">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold">AS</span>
        </div>
        <span className="font-bold text-xl">Agentic Security</span>
      </div>
      
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <Button variant="ghost" size="icon" className="text-foreground">
              <Bell className="h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full p-0">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{getInitials()}</AvatarFallback>
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
          </>
        ) : (
          <>
            <div className="hidden sm:flex space-x-4">
              <Button asChild variant="ghost" className="rounded-full">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild className="rounded-full">
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
            <Button asChild variant="outline" size="icon" className="sm:hidden">
              <Link to="/login"><ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default LandingHeader;
