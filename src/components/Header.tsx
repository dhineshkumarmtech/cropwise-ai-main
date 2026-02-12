import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/hooks/useLanguage';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/detect', label: t.nav.detect },
    { href: '/history', label: t.nav.history },
    { href: '/about', label: t.nav.about },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-leaf">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="hidden sm:inline">CropGuard AI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                location.pathname === link.href && "bg-accent text-accent-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button variant="default" size="sm" className="hidden sm:flex">
            {t.nav.login}
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border animate-fade-in">
          <nav className="container py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-lg text-sm font-medium transition-colors hover:bg-accent",
                  location.pathname === link.href && "bg-accent text-accent-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="default" size="sm" className="w-full mt-4">
              {t.nav.login}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}