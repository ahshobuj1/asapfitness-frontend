import {TProgram} from '@/types/program';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image';

const ProgramCard = ({program}: {program: TProgram}) => {
  return (
    <div className="group relative h-150 w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg">
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

        <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>

        <p className="text-gray-300 text-sm mb-6 line-clamp-3">
          {program.description}
        </p>

        <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-full flex justify-center items-center gap-2 transition-colors">
          View All Programs
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ProgramCard;
