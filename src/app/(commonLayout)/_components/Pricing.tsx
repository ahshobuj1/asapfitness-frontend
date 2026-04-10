import Image from 'next/image';
import {Check} from 'lucide-react';

const pricingFeatures = [
  'Unlimited class bookings and feedback',
  'Complete access to all training sessions',
  'Unlimited trainer messaging',
  'Upload fitness and health documents',
  'Qualify for all achievement badges',
  'Give and receive class reviews',
  'Top priority in class search results',
  'Get featured as a star member',
  'Access to premium trainer support',
  'Early entry to new workout features',
];

export default function Pricing() {
  return (
    <section className="container max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
          Our Simple
        </h2>
        <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
          Pricing
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
        <div className="w-full lg:w-100 bg-[#F8F9FA] rounded-3xl p-8 lg:p-10 flex flex-col shrink-0">
          <div className="flex items-baseline gap-1">
            <span className="text-5xl md:text-6xl font-semibold text-slate-900">
              $80
            </span>
            <span className="text-gray-500 font-medium">/per month</span>
          </div>

          <button className="w-full bg-primary hover:bg-primary/80 text-white  py-3.5 px-6 rounded-full cursor-pointer mt-6 mb-8 transition-colors">
            Enroll Now
          </button>

          <div className="flex flex-col gap-3.5">
            {pricingFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
                  strokeWidth={3}
                />
                <span className="text-sm text-slate-700 font-medium leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full min-h-100 lg:min-h-full rounded-3xl overflow-hidden">
          <Image
            src="/images/home/pricing.png"
            alt="Pricing Lifestyle"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
