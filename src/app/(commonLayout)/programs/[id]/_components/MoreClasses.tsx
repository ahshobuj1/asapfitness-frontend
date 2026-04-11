import { ClassCard } from '@/components/Shared/ClassCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { TClassCard } from '@/types/class';

const moreClassesData: TClassCard[] = [
  {
    id: 1,
    title: 'Class 2: Foundation Program',
    description:
      'Ideal for regular gym-goers who want to maintain and refine their physique.',
    image: '/images/home/classes/class-1.png',
  },
  {
    id: 2,
    title: 'Class 3: Cardio Warmup',
    description:
      'Ideal for regular gym-goers who want to maintain and refine their physique.',
    image: '/images/home/classes/class-2.png',
  },
  {
    id: 3,
    title: 'Class 4: Cool Down',
    description:
      'Ideal for regular gym-goers who want to maintain and refine their physique.',
    image: '/images/home/classes/class-3.png',
  },
  {
    id: 4,
    title: 'Class 5: Core Strength',
    description:
      'Ideal for regular gym-goers who want to maintain and refine their physique.',
    image: '/images/home/classes/class-2.png',
  },
  {
    id: 5,
    title: 'Class 6: Advanced Mobility',
    description:
      'Ideal for regular gym-goers who want to maintain and refine their physique.',
    image: '/images/home/classes/class-3.png',
  },
];

export default function MoreClassesSection() {
  return (
    <section className="container mx-auto px-6 py-12 max-w-7xl">
      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">
            More classes
          </h2>
          <div className="hidden lg:flex items-center gap-3">
            <CarouselPrevious className="static translate-y-0 w-12 h-12 border-white bg-primary hover:bg-primary/90 hover:text-white hover:border-white transition-colors text-white cursor-pointer" />

            <CarouselNext className="static translate-y-0 w-12 h-12 border-white bg-primary hover:bg-primary/90 hover:text-white hover:border-primary transition-colors cursor-pointer text-white" />
          </div>
        </div>

        <CarouselContent className="-ml-4 md:-ml-6">
          {moreClassesData.map((cls: TClassCard) => (
            <CarouselItem
              key={cls.id}
              className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
              <ClassCard key={cls.id} data={cls} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
