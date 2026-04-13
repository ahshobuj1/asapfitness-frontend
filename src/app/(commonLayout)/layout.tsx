import { Header } from '@/components/header';
import Footer from '@/components/Shared/Footer';

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
