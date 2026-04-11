import ProgramCard from '@/components/Shared/ProgramCard';

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
        {programsData.map((program, index) => (
          <ProgramCard key={program.id} program={program} priority={index < 3} />
        ))}
      </div>
    </section>
  );
}
