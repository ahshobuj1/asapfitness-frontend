import Image from 'next/image';

const featuresData = [
  {
    title: 'Science-Based',
    description: 'Programs built on proven exercise science.',
  },
  {
    title: 'Personalized',
    description: 'Tailored programs designed for your unique goals.',
  },
  {
    title: 'Video Guided',
    description: 'HD video tutorials to guide your progress.',
  },
  {
    title: '24/7 Support',
    description: 'Community and trainer support always available.',
  },
];

export default function WhyTrainWithUsSection() {
  return (
    <section className="container max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-125 aspect-4/5 rounded-3xl overflow-hidden bg-slate-100">
            <Image
              src="/images/home/about.png"
              alt="Professional Trainer"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="absolute -bottom-8 lg:-bottom-12 right-4 lg:-right-8 bg-primary rounded-2xl p-6 md:p-8 w-60 shadow-xl shadow-primary/20 z-10">
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
              15+
            </h3>
            <p className="text-white/90 text-sm leading-snug">
              Years of Professional Training Experience
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6 mt-12 lg:mt-0">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Why Train <span className="text-primary">With Us?</span>
          </h2>

          <p className="text-gray-500 text-base leading-relaxed mb-4">
            With over 15 years of professional experience and 500+ successful
            transformations, our certified trainers bring science-backed methods
            and real world results to every program. We don&apos;t just give you
            workouts - we give you a complete system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-[#F1F3F5] rounded-xl p-6 transition-transform hover:-translate-y-1">
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
