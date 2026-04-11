import {TProduct} from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';

export function ProductCard({product}: {product: TProduct}) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden drop-shadow-2xl group">
      <div className="bg-white h-90 relative p-8 flex justify-center items-center overflow-hidden">
        <Link href={`/shop/${1}`}>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover p-8 transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
      </div>

      <Link href={`/shop/${1}`}>
        <div className="bg-[#333B4A] p-6 flex flex-col grow">
          <span className="text-gray-400 text-sm mb-2">{product.category}</span>
          <h3 className="text-xl text-white mb-2">{product.title}</h3>
          <p className="text-gray-400 text-sm mb-6 grow">
            {product.description}
          </p>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-2xl font-bold text-white">
              {product.price}
            </span>
            <span className="text-gray-500 line-through text-base mb-0.5">
              {product.oldPrice}
            </span>
          </div>

          <button className="w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-4 rounded-full transition-colors mt-auto cursor-pointer">
            Add to Cart
          </button>
        </div>
      </Link>
    </div>
  );
}
