
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, User, Settings, LogOut, Menu, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const HomepageHeader = () => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  // Generate initials for avatar fallback
  const getInitials = () => {
    if (!user) return 'U';
    const name = user.user_metadata?.name || user.email || '';
    return name.split('@')[0].substring(0, 2).toUpperCase();
  };

  // If user is authenticated, use the same layout as Navbar
  if (user) {
    return (
      <nav className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/80">
        <div className="h-16 flex items-center px-4 lg:px-6">
          <div className="flex-1 flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">AS</span>
                </div>
                <span className="font-bold text-xl hidden md:inline-block">Agentic Security</span>
              </Link>
            </div>

            {/* Desktop Search */}
            <div className="hidden md:flex items-center mx-4 max-w-md w-full">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search agents..." 
                  className="pl-10 h-9 bg-muted/50 border-muted focus-visible:ring-primary/20" 
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-foreground relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full p-0">
                    <Avatar className="h-8 w-8 border border-primary/10">
                      <AvatarFallback className="bg-primary/10 text-primary">{getInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-1">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="flex items-center cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="flex items-center cursor-pointer">
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
        </div>
      </nav>
    );
  }

  // Non-authenticated header
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 py-4 border-b border-border">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-md bg-gradient-to-tr from-primary to-blue-500 flex items-center justify-center">
            <span className="text-primary-foreground font-bold">AS</span>
          </div>
          <h1 className="text-xl font-bold">Agentic Security</h1>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" onClick={() => navigate('/login')} className="rounded-full">
            Sign In
          </Button>
          <Button onClick={() => navigate('/signup')} className="rounded-full">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default HomepageHeader;
