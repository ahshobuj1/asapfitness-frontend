'use client';

import {useState, useRef} from 'react';
import Link from 'next/link';
import {ArrowLeft, EyeOff, Eye, Camera, X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Image from 'next/image';

const signupSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  age: z.string().min(1, 'Age is required'),
  gender: z.string().min(1, 'Gender is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      gender: '',
    },
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log(data);
    console.log('Preview Image Base64:', previewImage);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
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
          <h1 className="text-3xl font-bold text-center text-slate-900 mb-8">
            Create Account
          </h1>

          <div className="relative inline-block mb-8">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#B0B7C3] bg-[#EAECEF] flex items-center justify-center cursor-pointer hover:bg-[#E0E2E6] transition-colors relative overflow-hidden group">
              {previewImage ? (
                <Image
                  src={previewImage}
                  alt="Profile Preview"
                  className="w-full h-full object-cover"
                  fill
                  sizes="200"
                />
              ) : (
                <Camera className="w-8 h-8 text-[#8A94A6]" strokeWidth={1.5} />
              )}

              <input
                type="file"
                ref={fileInputRef}
                className="absolute inset-0 opacity-0 cursor-pointer z-10"
                accept="image/*"
                onChange={handleImageChange}
              />

              {previewImage && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                  <Camera className="w-6 h-6 text-white" />
                </div>
              )}
            </div>

            {previewImage && (
              <button
                type="button"
                onClick={handleRemoveImage}
                className="absolute top-0 right-0 w-7 h-7 bg-primary cursor-pointer rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors z-50 shadow-md"
                title="Remove image">
                <X className="w-4 h-4" strokeWidth={2.5} />
              </button>
            )}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full">
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex flex-col w-full">
                <input
                  type="text"
                  placeholder="Name"
                  {...register('name')}
                  className={`w-full bg-[#EAECEF] text-slate-900 rounded-full px-6 py-3.5 outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-500 text-sm font-medium ${
                    errors.name ? 'ring-2 ring-red-500' : ''
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1.5 ml-4 font-medium">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col w-full">
                <input
                  type="email"
                  placeholder="Email"
                  {...register('email')}
                  suppressHydrationWarning
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

              <div className="flex gap-4 w-full">
                <div className="flex flex-col w-1/2">
                  <input
                    type="number"
                    placeholder="Age"
                    {...register('age')}
                    className={`w-full bg-[#EAECEF] text-slate-900 rounded-full px-6 py-3.5 outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-500 text-sm font-medium ${
                      errors.age ? 'ring-2 ring-red-500' : ''
                    }`}
                  />
                  {errors.age && (
                    <span className="text-red-500 text-xs mt-1.5 ml-4 font-medium">
                      {errors.age.message}
                    </span>
                  )}
                </div>

                <div className="flex flex-col w-1/2">
                  <Controller
                    name="gender"
                    control={control}
                    render={({field}) => (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <SelectTrigger
                          className={`w-full bg-[#EAECEF] text-slate-900 rounded-full px-6 py-6 border-none shadow-none focus:ring-2 focus:ring-primary focus:ring-offset-0 text-sm font-medium ${
                            errors.gender ? 'ring-2 ring-red-500' : ''
                          }`}>
                          <SelectValue
                            placeholder="Gender"
                            className="text-gray-500"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white rounded-xl p-1 shadow-md border-gray-100">
                          <SelectItem
                            value="male"
                            className="text-slate-900 rounded-lg cursor-pointer">
                            Male
                          </SelectItem>
                          <SelectItem
                            value="female"
                            className="text-slate-900 rounded-lg cursor-pointer">
                            Female
                          </SelectItem>
                          <SelectItem
                            value="other"
                            className="text-slate-900 rounded-lg cursor-pointer">
                            Other
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.gender && (
                    <span className="text-red-500 text-xs mt-1.5 ml-4 font-medium">
                      {errors.gender.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col w-full">
                <div className="relative w-full">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    {...register('password')}
                    className={`w-full bg-[#EAECEF] text-slate-900 rounded-full px-6 py-3.5 pr-12 outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-gray-500 text-sm font-medium ${
                      errors.password ? 'ring-2 ring-red-500' : ''
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

            <Button
              type="submit"
              className="w-full bg-primary/80 hover:bg-primary/80 cursor-pointer text-white font-bold py-6 rounded-full transition-colors text-base mb-6">
              Create Account
            </Button>
          </form>

          <p className="text-[11px] text-gray-500 text-center leading-relaxed mb-10 px-2 font-medium">
            By signing in to A.S.A.P Fitness, you agree to our{' '}
            <Link href="/terms" className="text-primary/80 hover:underline">
              Terms & Conditions
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary/80 hover:underline">
              Privacy Policy.
            </Link>
          </p>

          <p className="text-sm text-center text-slate-800 font-medium">
            Have an account?{' '}
            <Link
              href="/auth/login"
              className="text-primary/80 hover:underline font-bold">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
