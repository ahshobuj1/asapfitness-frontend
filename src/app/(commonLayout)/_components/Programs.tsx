'use client';

import ProgramCard from '@/components/Shared/ProgramCard';
import { useGetAllCategoriesQuery } from '@/redux/features/lms.api';

export default function Programs() {
  const { data: categoriesData, isLoading } = useGetAllCategoriesQuery();

  if (isLoading) {
    return (
      <section className="container max-w-7xl py-16 md:py-24">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </section>
    );
  }

  const programs = [...(categoriesData?.data || [])].reverse();

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
            Choose from expert-designed training categories, each with 
            progressive programs tailored to your goals.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((program, index) => (
          <ProgramCard key={program.id} program={program} priority={index < 3} />
        ))}
      </div>
    </section>
  );
}
