/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, EyeOff, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { useLoginMutation } from '@/redux/features/auth.api';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/features/authSlice';
import { toast } from 'sonner';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await login(data).unwrap();
      const { user, accessToken } = result.data;
      
      dispatch(setUser({ user, token: accessToken }));
      
      toast.success('Login successful!');
      router.push('/'); // Redirect to home or dashboard
    } catch (error: any) {
      console.error('Login failed:', error);
      toast.error(error?.data?.message || 'Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col relative">
      <Link
        href="/"
        className="absolute top-8 left-8 w-12 h-12 bg-[#F1F3F5] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
        <ArrowLeft className="w-5 h-5 text-slate-600" strokeWidth={2} />
      </Link>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-100 flex flex-col">
          <h1 className="text-3xl font-bold text-center text-slate-900 mb-10">
            Log in
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full">
            <div className="flex flex-col gap-4 mb-2">
              <div className="flex flex-col w-full">
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  suppressHydrationWarning
                  className={`w-full bg-[#EAECEF] text-slate-900 rounded-full px-6 py-3.5 outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-500 text-sm font-medium ${errors.email ? 'ring-2 ring-red-500' : ''
                    }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1.5 ml-4 font-medium">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col w-full">
                <div className="relative w-full">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    {...register('password')}
                    className={`w-full bg-[#EAECEF] text-slate-900 rounded-full px-6 py-3.5 pr-12 outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-500 text-sm font-medium ${errors.password ? 'ring-2 ring-red-500' : ''
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none">
                    {showPassword ? (
                      <Eye className="w-5 h-5" strokeWidth={1.5} />
                    ) : (
                      <EyeOff className="w-5 h-5" strokeWidth={1.5} />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-xs mt-1.5 ml-4 font-medium">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex justify-end mb-8 mt-2">
              <Link
                href="/auth/reset-password"
                className="text-xs text-[#E74C3C] hover:underline font-medium">
                Forgot Password
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary/80 hover:bg-primary/80 cursor-pointer text-white font-bold py-6 rounded-full transition-colors text-base mb-6">
              {isLoading ? 'Logging In...' : 'Log In'}
            </Button>
          </form>

          <p className="text-[11px] text-gray-500 text-center leading-relaxed mb-12 px-2 font-medium">
            By signing in to A.S.A.P Fitness, you agree to our{' '}
            <Link href="/terms" className="text-primary/80 hover:underline">
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary/80 hover:underline">
              Privacy Policy.
            </Link>
          </p>

          <p className="text-sm text-center text-slate-800 font-medium mt-4">
            Don&apos;t have an account?{' '}
            <Link
              href="/auth/register"
              className="text-primary/80 hover:underline font-bold">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
