'use client';

import {ProductCard} from '@/components/Shared/ProductCard';
import {TProduct} from '@/types/product';
import {useGetProductsQuery} from '@/redux/features/product.api';
import Link from 'next/link';

export default function FuelYourGainsSection() {
  const {data: productsResponse, isLoading} = useGetProductsQuery({});
  const products = productsResponse?.data?.slice(0, 3) || [];

  return (
    <section className="w-full bg-[#151923] py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row justify-between items-end mb-10">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-5xl font-extrabold text-white leading-tight">
              Fuel Your
            </h2>
            <h2 className="text-2xl md:text-5xl font-extrabold text-primary leading-tight">
              Gains
            </h2>
          </div>
          <Link href="/shop">
            <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-8 rounded-full transition-colors cursor-pointer">
              View All
            </button>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-96 bg-gray-800 animate-pulse rounded-2xl"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product: TProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
