/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useVerifyEmailMutation, useResendOtpMutation } from '@/redux/features/auth.api';
import { useAppDispatch } from '@/redux/hooks';
import { setUser } from '@/redux/features/authSlice';
import { toast } from 'sonner';

const verificationSchema = z.object({
  code: z.string().min(6, 'Verification code must be 6 digits'),
});

type VerificationFormValues = z.infer<typeof verificationSchema>;

export default function VerificationPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const dispatch = useAppDispatch();

  const [verifyEmail, { isLoading: isVerifying }] = useVerifyEmailMutation();
  const [resendOtp, { isLoading: isResending }] = useResendOtpMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerificationFormValues>({
    resolver: zodResolver(verificationSchema),
  });

  const onSubmit = async (data: VerificationFormValues) => {
    try {
      const result = await verifyEmail({ token: data.code }).unwrap();
      const { user, accessToken } = result.data;
      
      if (accessToken && user) {
        dispatch(setUser({ user, token: accessToken }));
        toast.success('Email verified successfully!');
        router.push('/');
      } else {
        toast.success('Email verified! Please log in.');
        router.push('/auth/login');
      }
    } catch (error: any) {
      console.error('Verification failed:', error);
      toast.error(error?.data?.message || 'Verification failed. Please check the code.');
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error('Email not found. Please try registering again.');
      return;
    }
    try {
      await resendOtp({ email }).unwrap();
      toast.success('Verification code resent successfully!');
    } catch (error: any) {
      console.error('Resend OTP failed:', error);
      toast.error(error?.data?.message || 'Failed to resend code.');
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col relative">
      <Link
        href="/"
        className="absolute top-8 left-8 w-12 h-12 bg-[#EAECEF] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
        <ArrowLeft className="w-5 h-5 text-slate-600" strokeWidth={2} />
      </Link>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-100 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center text-slate-900 mb-2">
            Verification Code
          </h1>

          <p className="text-sm text-gray-500 text-center mb-8 px-4">
            Enter the code sent to your email to verify your account.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-4">
            <div className="flex flex-col w-full">
              <input
                type="text"
                placeholder="Enter verification code"
                {...register('code')}
                className={`w-full bg-[#EAECEF] text-slate-900 rounded-full px-6 py-3.5 outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-500 text-sm font-medium ${
                  errors.code ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {errors.code && (
                <span className="text-red-500 text-xs mt-1.5 ml-4 font-medium">
                  {errors.code.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              disabled={isVerifying}
              className="w-full bg-primary hover:bg-primary/80 text-white font-bold cursor-pointer py-6 rounded-full transition-colors text-base mt-2 mb-4">
              {isVerifying ? 'Verifying...' : 'Verify'}
            </Button>
          </form>

          <p className="text-sm text-center text-gray-500 font-medium">
            Didn&apos;t Get The Code?{' '}
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className="text-primary hover:underline font-bold focus:outline-none disabled:text-gray-400">
              {isResending ? 'Sending...' : 'Resend it'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
