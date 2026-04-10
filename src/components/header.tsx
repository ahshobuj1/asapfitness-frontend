'use client';

import {cn} from '@/lib/utils';
import {useScroll} from '@/hooks/use-scroll';
import {Button} from '@/components/ui/button';
import {MobileNav} from '@/components/mobile-nav';
import Link from 'next/link';
import Image from 'next/image';
import {ShoppingCart, ArrowUpRight} from 'lucide-react';

export const navLinks = [
  {
    label: 'Home',
    href: '#',
  },
  {
    label: 'Programs',
    href: '#',
  },
  {
    label: 'Shop',
    href: '#',
  },
  {
    label: 'Pricing',
    href: '#',
  },
];

export function Header() {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 mx-auto w-full container border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out py-4',
        {
          'border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-6xl md:shadow border':
            scrolled,
        },
      )}>
      <nav
        className={cn(
          'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
          {
            'md:px-2': scrolled,
          },
        )}>
        <Link className="rounded-md p-2 hover:bg-muted" href="/">
          <Image
            src="/images/home/Logo.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>

        <div className="hidden flex-1 items-center justify-center md:flex gap-2">
          {navLinks.map((link) => (
            <Button
              asChild
              key={link.label}
              size="sm"
              variant="ghost"
              className="text-lg hover:bg-transparent">
              <Link
                href={link.href}
                className={cn(
                  'text-base font-medium transition-colors',
                  link.label === 'Home'
                    ? 'text-primary hover:text-primary/80'
                    : 'text-slate-700 hover:text-primary',
                )}>
                {link.label}
              </Link>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-6 md:flex">
            <button className="text-slate-800 hover:text-primary transition-colors cursor-pointer">
              <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
            </button>

            <div className="flex items-center gap-[-2px]">
              <Button
                variant="outline"
                className="rounded-full border border-primary text-primary hover:bg-orange-50 hover:text-primary/80 px-6 h-10 font-medium bg-transparent cursor-pointer">
                Log In
              </Button>

              <Button className="rounded-full bg-primary hover:bg-primary/80 text-white w-10 h-10 p-0 flex items-center justify-center shadow-none ml-2 border border-white cursor-pointer">
                <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
              </Button>
            </div>
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
