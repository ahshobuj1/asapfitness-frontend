import Image from 'next/image';
import {ArrowRight} from 'lucide-react';

const programsData = [
  {
    id: 1,
    title: 'Basic Program',
    description:
      'Perfect for beginners starting their fitness journey with simple, guided workouts.',
    image: '/images/home/programs/programs-1.jpg',
    link: '/programs/basic',
  },
  {
    id: 2,
    title: 'Standard Program',
    description:
      'Designed for those with some gym experience, following a balanced training routine.',
    image: '/images/home/programs/programs-2.jpg',
    link: '/programs/standard',
  },
  {
    id: 3,
    title: 'Advanced Program',
    description:
      'Ideal for regular gym-goers who want to maintain and refine their physique.',
    image: '/images/home/programs/programs-3.jpg',
    link: '/programs/advanced',
  },
];

export default function Programs() {
  return (
    <section className="container max-w-7xl py-16 md:py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Transform
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
            Your Body
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-gray-500 text-sm md:text-base leading-relaxed">
            Choose from 3 expert-designed training categories, each with 10
            progressive programs tailored to your goals.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programsData.map((program) => (
          <div
            key={program.id}
            className="group relative h-150 w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg">
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
              <Image
                src={program.image}
                alt={program.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-[#111827] via-[#111827]/70 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
              <div className="w-8 h-1 bg-primary rounded-full mb-3" />

              <h3 className="text-2xl font-bold text-white mb-2">
                {program.title}
              </h3>

              <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                {program.description}
              </p>

              <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-full flex justify-center items-center gap-2 transition-colors">
                View All Programs
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
