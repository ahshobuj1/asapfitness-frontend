import type {Metadata} from 'next';
import {Poppins, Geist_Mono} from 'next/font/google';
import './globals.css';
import ReduxProvider from '@/components/Provider/ReduxProvider';
import {Toaster} from 'sonner';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ASAP Fitness & Wellness',
  description: 'ASAP Fitness & Wellness',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
          {children}
          <Toaster position="top-center" />
        </ReduxProvider>
      </body>
    </html>
  );
}
