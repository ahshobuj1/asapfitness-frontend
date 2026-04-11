import Image from 'next/image';
import {Play} from 'lucide-react';
import {TClassCard} from '@/types/class';

export function ClassCard({data}: {data: TClassCard}) {
  return (
    <div className="group flex flex-col bg-[#F1F3F5] rounded-2xl overflow-hidden cursor-pointer h-full border border-transparent hover:border-gray-200 transition-colors">
      <div className="relative w-full aspect-16/10 overflow-hidden">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col grow">
        <h3 className="text-lg font-bold text-slate-900 mb-2">{data.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
          {data.description}
        </p>
      </div>
    </div>
  );
}
