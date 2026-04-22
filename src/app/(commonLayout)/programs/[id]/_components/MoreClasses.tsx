'use client';

import { ClassCard } from '@/components/Shared/ClassCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useGetClassesByCategoryQuery } from '@/redux/features/lms.api';

export default function MoreClassesSection({
  categoryId,
  onSelectClass,
}: {
  categoryId: string;
  onSelectClass: (classId: string) => void;
}) {
  const { data: classesData, isLoading } = useGetClassesByCategoryQuery(categoryId);

  if (isLoading) {
    return (
      <section className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="flex justify-center items-center h-48">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary"></div>
        </div>
      </section>
    );
  }

  const classes = classesData?.data || [];

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
          {classes.map((cls) => (
            <CarouselItem
              key={cls.id}
              className="pl-4 md:pl-6 basis-full md:basis-1/2 lg:basis-1/3">
              <ClassCard 
                key={cls.id} 
                data={cls} 
                onClick={() => onSelectClass(cls.id)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
