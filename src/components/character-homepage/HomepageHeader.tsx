
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

const HomepageHeader = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  // Generate initials for avatar fallback
  const getInitials = () => {
    if (!user) return 'U';
    const name = user.user_metadata?.name || user.email || '';
    return name.split('@')[0].substring(0, 2).toUpperCase();
  };

  return (
    <header className={`${user ? 'bg-card' : 'bg-background'} py-4 border-b border-border ${user ? 'h-16 flex items-center' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">AS</span>
          </div>
          <h1 className="text-xl font-bold">Agentic Security</h1>
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
                    <div onClick={() => navigate('/dashboard')} className="flex items-center cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <div onClick={() => navigate('/settings')} className="flex items-center cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </div>
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
              <Button variant="ghost" onClick={() => navigate('/login')}>
                Sign In
              </Button>
              <Button onClick={() => navigate('/signup')}>
                Get Started
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
