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
import {useAppSelector, useAppDispatch} from '@/redux/hooks';
import {logout} from '@/redux/features/authSlice';
import {useLogoutUserMutation} from '@/redux/features/auth.api';
import {useRouter} from 'next/navigation';
import {toast} from 'sonner';
import {useGetMeQuery} from '@/redux/features/user.api';
import {useState, useRef, useEffect} from 'react';
import {User, LogOut} from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

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
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {user} = useAppSelector((state) => state.auth);
  const {data: userData} = useGetMeQuery(undefined, {skip: !user});
  const [logoutUser] = useLogoutUserMutation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      setIsDropdownOpen(false);
      await logoutUser({}).unwrap();
      dispatch(logout());
      toast.success('Logged out successfully');
      router.push('/auth/login');
    } catch (error) {
      console.error('Logout failed:', error);
      dispatch(logout()); // Clear state anyway
    }
  };

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
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  {userData?.data?.avatarUrl ? (
                    <Image
                      src='/images/home/user-profile-asap.png'
                      // src={userData.data.avatarUrl}
                      alt="Profile"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary flex items-center justify-center text-white font-bold">
                      {userData?.data?.fullName?.charAt(0) ||
                        user.email.charAt(0).toUpperCase()}
                    </div>
                  )}
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 animate-in fade-in zoom-in duration-200">
                    <div className="px-4 py-2 border-b border-gray-50 mb-1">
                      <p className="text-sm font-bold text-slate-900 truncate">
                        {userData?.data?.fullName || 'User'}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {user.email}
                      </p>
                    </div>
                    {/* 
                    <Link
                      href="/dashboard"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 transition-colors">
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link> */}

                    <Link
                      href="/dashboard/my-profile"
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-gray-50 transition-colors">
                      <User className="w-4 h-4" />
                      My Profile
                    </Link>

                    <button
                      onClick={() => {
                        setIsDropdownOpen(false);
                        setIsLogoutDialogOpen(true);
                      }}
                      className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors mt-1 border-t border-gray-50 cursor-pointer">
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
        <MobileNav />
      </nav>
      <AlertDialog
        open={isLogoutDialogOpen}
        onOpenChange={setIsLogoutDialogOpen}>
        <AlertDialogContent className="bg-white rounded-2xl border-none shadow-2xl p-6">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold text-slate-900">
              Ready to leave?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-gray-500 font-medium">
              Are you sure you want to log out? You will need to log in again to
              access your account.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-6 gap-3">
            <AlertDialogCancel className="rounded-full border-gray-200 text-slate-600 hover:bg-gray-50 font-bold px-6 h-11 border-none bg-gray-100">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleLogout}
              className="rounded-full bg-primary hover:bg-red-700 text-white font-bold px-6 h-11 border-none">
              Yes, Log out
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </header>
  );
}
