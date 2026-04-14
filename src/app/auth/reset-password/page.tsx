'use client';

import Link from 'next/link';
import {ArrowLeft} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';

const resetSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
});

type ResetFormValues = z.infer<typeof resetSchema>;

export default function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<ResetFormValues>({
    resolver: zodResolver(resetSchema),
  });

  const onSubmit = (data: ResetFormValues) => {
    console.log(data);
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
            Reset Password
          </h1>

          <p className="text-sm text-gray-500 text-center mb-8">
            Reset you password quickly and securely to regain access.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-4">
            <div className="flex flex-col w-full">
              <input
                type="email"
                placeholder="Email"
                {...register('email')}
                className={`w-full bg-[#EAECEF] text-slate-900 rounded-full px-6 py-3.5 outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-500 text-sm font-medium ${
                  errors.email ? 'ring-2 ring-red-500' : ''
                }`}
              />
              {errors.email && (
                <span className="text-red-500 text-xs mt-1.5 ml-4 font-medium">
                  {errors.email.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/80 text-white font-bold cursor-pointer py-6 rounded-full transition-colors text-base mt-2">
              Send Code
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
