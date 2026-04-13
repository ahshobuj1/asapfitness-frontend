'use client';
import {cn} from '@/lib/utils';
import {useScroll} from '@/hooks/use-scroll';
import {Button} from '@/components/ui/button';
import {MobileNav} from '@/components/mobile-nav';
import Link from 'next/link';
import Image from 'next/image';
import {ArrowUpRight} from 'lucide-react';
import {usePathname} from 'next/navigation';
import {CartModal} from './Shared/CartModal';

export const navLinks = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Programs',
    href: '/programs',
  },
  {
    label: 'Shop',
    href: '/shop',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
];

export function Header() {
  const scrolled = useScroll(10);
  const pathname = usePathname();

  return (
    <header
      className={cn(
        'sticky top-0 transition-all duration-200 z-50 w-full border-transparent border-b py-3',
        {
          'border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/90':
            scrolled,
        },
      )}>
      <nav className="mx-auto flex h-14 w-full max-w-370 items-center justify-between px-4">
        <Link className="rounded-md py-2 hover:bg-muted" href="/">
          <Image
            src="/images/home/Logo.png"
            alt="Logo"
            width={80}
            height={80}
            style={{width: 'auto'}}
          />
        </Link>
        <div className="hidden items-center md:flex gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
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
                    isActive
                      ? 'text-primary hover:text-primary/80'
                      : 'text-slate-700 hover:text-primary',
                  )}>
                  {link.label}
                </Link>
              </Button>
            );
          })}
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <CartModal />

          <div className="flex items-center gap-[-2px]">
            <Link href={'/auth/login'}>
              <Button
                variant="outline"
                className="rounded-full border border-primary text-primary hover:bg-orange-50 hover:text-primary/80 px-6 h-10 font-medium bg-transparent cursor-pointer">
                Log In
              </Button>
            </Link>

            <Button className="rounded-full bg-primary hover:bg-primary/80 text-white w-10 h-10 p-0 flex items-center justify-center shadow-none -ml-0.4 border border-white cursor-pointer">
              <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
            </Button>
          </div>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
