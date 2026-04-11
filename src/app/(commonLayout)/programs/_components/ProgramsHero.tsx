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

export default function ProgramsHero() {
  return (
    <section className="container max-w-7xl pt-6 md:pt-10 pb-16 md:pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Programs
          </h2>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed mt-4">
            Choose from 3 expert-designed training categories, each with 10
            progressive programs tailored to your goals.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programsData.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
}
