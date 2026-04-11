import Image from 'next/image';
import {Play, ShieldCheck, Calendar, Smartphone, Headset} from 'lucide-react';
import {Button} from '@/components/ui/button';

export default function ClassSection() {
  return (
    <section className="container mx-auto px-6 py-16 md:py-24 max-w-7xl">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
          View Your Free Class
        </h2>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Unlock your potential with our diverse fitness programs, tailored to
          help you achieve your personal best.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div className="lg:col-span-2 relative w-full aspect-4/3 md:aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-md">
          <Image
            src="/images/home/programs/program-video.png"
            alt="Fitness Training Class"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 800px"
          />
          <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-1 border border-gray-200 rounded-2xl p-8 bg-white shadow-sm flex flex-col h-full">
          <h3 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4">
            $80
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-8">
            Pay monthly and enjoy full access to all content for a whole month.
          </p>

          <Button className="w-full bg-primary hover:bg-primary/80 text-white py-6 rounded-full text-base mb-10 transition-colors">
            Enroll Now
          </Button>

          <div className="flex flex-col gap-5 mt-auto">
            <div className="flex items-center gap-3">
              <ShieldCheck
                className="w-5 h-5 text-primary shrink-0"
                strokeWidth={1.5}
              />
              <span className="text-sm text-gray-600">
                30-day money-back guarantee
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar
                className="w-5 h-5 text-primary shrink-0"
                strokeWidth={1.5}
              />
              <span className="text-sm text-gray-600">
                All classes access for a whole month
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Smartphone
                className="w-5 h-5 text-primary shrink-0"
                strokeWidth={1.5}
              />
              <span className="text-sm text-gray-600">
                Access on any device
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Headset
                className="w-5 h-5 text-primary shrink-0"
                strokeWidth={1.5}
              />
              <span className="text-sm text-gray-600">
                Trainer support included
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
