'use client';

import {TProduct} from '@/types/product';
import {ProductCard} from '@/components/Shared/ProductCard';
import {useGetProductsQuery} from '@/redux/features/product.api';

export default function AllSupplements() {
  const {data: productsResponse, isLoading} = useGetProductsQuery({});
  const products = productsResponse?.data || [];

  return (
    <section className="container mx-auto px-6 py-10 md:py-16 max-w-7xl">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          All Supplements
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Explore our wide range of supplements to support your fitness goals.
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-96 bg-gray-100 animate-pulse rounded-2xl"
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
    </section>
  );
}
