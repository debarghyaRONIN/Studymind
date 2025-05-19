"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { BookOpen, Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Schedule', href: '/schedule' },
    { name: 'Documents', href: '/documents' },
    { name: 'Analytics', href: '/analytics' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      isScrolled ? 'bg-background/90 backdrop-blur-sm border-b' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">StudyMind</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <Button asChild variant="outline" size="sm">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ModeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background/95 backdrop-blur-sm md:hidden">
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col space-y-3 pt-6 border-t">
              <Button asChild variant="outline">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}