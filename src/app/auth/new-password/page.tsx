'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, EyeOff, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useResetPasswordMutation } from '@/redux/features/auth.api';
import { toast } from 'sonner';

const newPasswordSchema = z.object({
  token: z.string().min(1, 'Verification code is required'),
  newPassword: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Please confirm your password'),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type NewPasswordFormValues = z.infer<typeof newPasswordSchema>;

export default function NewPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  
  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewPasswordFormValues>({
    resolver: zodResolver(newPasswordSchema),
  });

  const onSubmit = async (data: NewPasswordFormValues) => {
    try {
      await resetPassword({
        token: data.token,
        newPassword: data.newPassword,
      }).unwrap();
      toast.success('Password reset successful! Please log in.');
      router.push('/auth/login');
    } catch (error: any) {
      console.error('Password reset failed:', error);
      toast.error(error?.data?.message || 'Failed to reset password. Please check the code.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col relative">
      <Link
        href="/auth/reset-password"
        className="absolute top-8 left-8 w-12 h-12 bg-[#EAECEF] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
        <ArrowLeft className="w-5 h-5 text-slate-600" strokeWidth={2} />
      </Link>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-100 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center text-slate-900 mb-2">
            New Password
          </h1>

          <p className="text-sm text-gray-500 text-center mb-8 px-4">
            Enter the code sent to <span className="font-semibold text-slate-700">{email}</span> and your new password.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-4">
            
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="Verification Code"
                {...register('token')}
                className={`w-full bg-[#EAECEF] text-slate-900 rounded-full px-6 py-3.5 outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-500 text-sm font-medium ${
                  errors.token ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {errors.token && (
                <span className="text-red-500 text-xs mt-1.5 ml-4 font-medium">
                  {errors.token.message}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <div className="relative w-full">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="New Password"
                  {...register('newPassword')}
                  className={`w-full bg-[#EAECEF] text-slate-900 rounded-full px-6 py-3.5 pr-12 outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-500 text-sm font-medium ${
                    errors.newPassword ? 'ring-2 ring-red-500' : ''
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
              {errors.newPassword && (
                <span className="text-red-500 text-xs mt-1.5 ml-4 font-medium">
                  {errors.newPassword.message}
                </span>
              )}
            </div>

            <div className="flex flex-col w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                {...register('confirmPassword')}
                className={`w-full bg-[#EAECEF] text-slate-900 rounded-full px-6 py-3.5 outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-500 text-sm font-medium ${
                  errors.confirmPassword ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {errors.confirmPassword && (
                <span className="text-red-500 text-xs mt-1.5 ml-4 font-medium">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-primary/80 text-white font-bold cursor-pointer py-6 rounded-full transition-colors text-base mt-2 mb-4">
              {isLoading ? 'Resetting...' : 'Reset Password'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
