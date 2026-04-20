import Image from 'next/image';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    image: '/images/home/footer/Instagram.png',
  },
  {
    name: 'Facebook',
    href: '#',
    image: '/images/home/footer/FrameFacebook.png',
  },
  {
    name: 'Linkedin',
    href: '#',
    image: '/images/home/footer/Linkedin.png',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111620] pt-16 pb-8 px-6 border-t border-slate-800">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col items-start justify-center">
            <Image
              src="/images/home/Logo.png"
              alt="A.S.A.P. Personal Training"
              width={220}
              height={120}
              className="w-auto h-24 object-contain"
              style={{width: 'auto'}}
            />
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-white">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Programs', 'Shop'].map((link) => (
                <li key={link}>
                  <Link
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-primary transition-colors text-base">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-white">Connect</h3>
            <ul className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <Link
                    href={social.href}
                    className="flex items-center gap-4 group">
                    <div className="bg-primary rounded-full w-10 h-10 flex items-center justify-center group-hover:bg-primary/80 transition-colors shrink-0 overflow-hidden">
                      <Image
                        src={social.image}
                        alt={`${social.name} icon`}
                        width={24}
                        height={24}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">
                      {social.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-semibold text-white">Stay Updated</h3>
            <p className="text-gray-300 text-sm">
              Get the latest news and special offers
            </p>
            <div className="relative flex items-center w-full max-w-sm mt-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-[#1C212D] text-white rounded-full py-3.5 pl-5 pr-14 focus:outline-none focus:ring-1 focus:ring-primary border border-transparent placeholder:text-gray-500 text-sm"
                suppressHydrationWarning
              />
              <button className="absolute right-1.5 bg-primary hover:bg-primary/80 transition-colors rounded-full p-2.5 text-white flex items-center justify-center">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-gray-400">
            <span>© 2026 A.S.A.P. All rights reserved</span>
            <span className="hidden md:inline text-slate-600">|</span>
            <Link
              href="mailto:hello@asap.com"
              className="hover:text-primary transition-colors">
              hello@asap.com
            </Link>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & conditions
            </Link>
            <Link
              href="/privacy"
              className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
