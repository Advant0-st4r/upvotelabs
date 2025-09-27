import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Bell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';

const navigationItems = [
  { name: 'Discovery', href: '/discovery', exact: true },
  { name: 'Forum', href: '/forum', exact: true },
  { name: 'Wizard', href: '/project-wizard', exact: true },
  { name: 'Projects', href: '/projects', exact: true, badge: 'Soon' },
];

export const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (href: string, exact: boolean) => {
    return exact ? location.pathname === href : location.pathname.startsWith(href);
  };

  const handleQuickGenerate = () => {
    window.location.href = '/project-wizard';
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-background border-b sticky top-0 z-50">
      <Link to="/discovery" className="flex items-center gap-2" aria-label="UpvoteLabs Home">
        <Zap className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg">UpvoteLabs</span>
      </Link>

      <Button
        variant="ghost"
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
        <div className="max-w-md w-full">
          <Input placeholder="Search ideas..." className="w-full" aria-label="Search ideas" />
        </div>
        {navigationItems.map(item => (
          <Link
            key={item.name}
            to={item.href}
            className={`text-sm font-medium transition-colors ${
              isActive(item.href, item.exact) ? 'text-primary font-bold' : 'text-muted-foreground hover:text-primary'
            }`}
            aria-current={isActive(item.href, item.exact) ? 'page' : undefined}
          >
            {item.name}
            {item.badge && <span className="ml-1 inline-block bg-muted text-xs px-1.5 py-0.5 rounded">{item.badge}</span>}
          </Link>
        ))}
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden p-4">
          <div className="flex flex-col gap-4">
            <Input placeholder="Search ideas..." className="w-full" aria-label="Search ideas" />
            {navigationItems.map(item => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium ${
                  isActive(item.href, item.exact) ? 'text-primary font-bold' : 'text-muted-foreground hover:text-primary'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
                {item.badge && <span className="ml-1 inline-block bg-muted text-xs px-1.5 py-0.5 rounded">{item.badge}</span>}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline" onClick={handleQuickGenerate} aria-label="Quick Generate">
              Quick Generate
            </Button>
          </TooltipTrigger>
          <TooltipContent>Start a new project idea</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>View notifications</TooltipContent>
        </Tooltip>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
      </div>
    </nav>
  );
};