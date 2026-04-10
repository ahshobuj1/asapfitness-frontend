import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {MessageSquareText} from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative container max-w-7xl min-h-125 md:min-h-175 flex items-start bg-slate-900 overflow-hidden md:rounded-[2rem] m-4 shadow-2xl">
      {/* Background Gym Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home/hero-back.png"
          alt="Gym facility background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container relative z-10 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
        {/* Left Column: Content */}
        <div className="flex flex-col items-start gap-6 pt-16 pb-12 md:py-0">
          <Badge
            variant="default"
            className="text-orange-100 font-normal border-white/50 bg-[#4A3424]/80 rounded-full px-4 py-3.5 text-sm tracking-wide backdrop-blur-sm">
            Personal Fitness Training
          </Badge>

          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-[1.1] tracking-tight">
            Functional <br />
            Fitness Training <br />
            with <span className="text-orange-500">ASAP.</span>
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-150 leading-relaxed">
            Expert-designed training programs and premium supplements to help
            you reach your fitness goals faster than ever before.
          </p>

          {/* Statistics */}
          <div className="flex gap-10 mt-2 mb-2">
            <div className="flex flex-col gap-1">
              <span className="text-4xl md:text-5xl font-semibold text-orange-500">
                500+
              </span>
              <span className="text-sm md:text-base text-gray-300">
                Transformations
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl md:text-5xl font-semibold text-orange-500">
                15+
              </span>
              <span className="text-sm md:text-base text-gray-300">
                Years Experience
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-4xl md:text-5xl font-semibold text-orange-500">
                30
              </span>
              <span className="text-sm md:text-base text-gray-300">
                Programs
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg transition-all">
              Explore Programs
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-white text-white hover:bg-white hover:text-slate-900 bg-transparent transition-all">
              Buy supplements
            </Button>
          </div>
        </div>

        {/* Right Column: Hero Image Placeholder */}
        <div className="relative h-150 md:h-187.5 w-full md:flex items-end justify-center pointer-events-none">
          <Image
            src="/images/home/hero-bg.png"
            alt="ASAP Trainer"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-10 md:right-65 z-50 max-w-7xl mx-auto">
        <p className="h-20 w-20 flex items-center justify-center rounded-full cursor-pointer bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 transition-transform duration-300 hover:scale-105">
          <MessageSquareText className="h-10 w-10" />
        </p>
      </div>
    </section>
  );
}
