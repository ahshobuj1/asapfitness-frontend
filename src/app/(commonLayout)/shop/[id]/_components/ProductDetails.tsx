/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {useState} from 'react';
import Image from 'next/image';
import {Plus, Minus, Loader2} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useGetSingleProductQuery} from '@/redux/features/product.api';

import {useAppSelector} from '@/redux/hooks';
import {useAddToCartMutation} from '@/redux/features/cart.api';
import {toast} from 'sonner';

export default function ProductDetails({productId}: {productId: string}) {
  const user = useAppSelector((state) => state.auth.user);
  const [addToCart, {isLoading: isAddingToCart}] = useAddToCartMutation();
  const [quantity, setQuantity] = useState(1);
  const {data: productResponse, isLoading} = useGetSingleProductQuery(productId);
  const product = productResponse?.data;

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = async () => {
    if (!user) {
      toast.error('Please login first', {
        duration: 2000,
      });
      return;
    }

    try {
      const res = await addToCart({
        productId: productId,
        quantity: quantity,
      }).unwrap();

      if (res.success) {
        toast.success('Added to cart successfully');
      }
    } catch (error: any) {
      toast.error(error?.data?.message || 'Failed to add to cart');
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-xl text-gray-500">Product not found</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row w-full border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-12 min-h-100 md:min-h-150 relative">
          <Image
            src='/images/home/product/product-1.png'
            // src={product.imageUrl}
            alt={product.title}
            fill
            className="object-contain p-12"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 bg-[#F8F9FA] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <span className="text-gray-500 text-sm font-medium mb-2">
            {product.category?.name}
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            {product.title}
          </h1>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-3xl font-bold text-slate-900">
              ${product.discountPrice}
            </span>
            <span className="text-gray-400 line-through text-lg mb-0.5">
              ${product.regularPrice}
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            {product.description || 'No description available for this product.'}
          </p>

          <div className="mb-8">
            <span
              className={`inline-block ${
                product.stockQuantity > 0 ? 'bg-[#151923]' : 'bg-red-500'
              } text-white text-xs font-bold tracking-wider px-4 py-2 rounded-full uppercase`}>
              {product.stockQuantity > 0 ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          <div className="flex flex-col gap-3 mb-10">
            <span className="text-sm font-medium text-slate-900">Quantity</span>
            <div className="flex items-center gap-4">
              <button
                onClick={decreaseQuantity}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-200 transition-colors text-slate-700 cursor-pointer">
                <Minus className="w-4 h-4" strokeWidth={2} />
              </button>

              <span className="text-xl font-bold text-slate-900 w-6 text-center">
                {quantity}
              </span>

              <button
                onClick={increaseQuantity}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-200 cursor-pointer transition-colors text-slate-700">
                <Plus className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              onClick={handleAddToCart}
              disabled={product.stockQuantity <= 0 || isAddingToCart}
              className="flex-1 rounded-full border-gray-400 text-slate-700 hover:bg-gray-100 hover:text-slate-900 py-6 text-base font-medium bg-transparent transition-colors cursor-pointer disabled:opacity-50">
              {isAddingToCart ? 'Adding...' : 'Add To Cart'}
            </Button>

            <Button
              onClick={handleAddToCart}
              disabled={product.stockQuantity <= 0 || isAddingToCart}
              className="flex-1 cursor-pointer rounded-full bg-primary hover:bg-primary/80 text-white py-6 text-base font-medium transition-colors disabled:opacity-50">
              Check Out
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
