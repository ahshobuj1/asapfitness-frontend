/* eslint-disable @typescript-eslint/no-explicit-any */
import {TProduct} from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import {useAppSelector} from '@/redux/hooks';
import {useAddToCartMutation} from '@/redux/features/cart.api';
import {toast} from 'sonner';

export function ProductCard({product}: {product: TProduct}) {
  const user = useAppSelector((state) => state.auth.user);
  const [addToCart, {isLoading}] = useAddToCartMutation();

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast.error('Please login first', {
        duration: 2000,
      });
      return;
    }

    try {
      const res = await addToCart({
        productId: product.id,
        quantity: 1,
      }).unwrap();

      if (res.success) {
        toast.success('Added to cart successfully');
      }
    } catch (error: any) {
      toast.error(error?.data?.message || 'Failed to add to cart');
    }
  };

  return (
    <div className="flex flex-col rounded-2xl overflow-hidden drop-shadow-2xl group">
      <div className="bg-white h-90 relative p-8 flex justify-center items-center overflow-hidden">
        <Link href={`/shop/${product.id}`}>
          <Image
            src={'/images/home/product/product-1.png'}
            // src={product.imageUrl}
            alt={product.title}
            fill
            className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </Link>
      </div>

      <Link href={`/shop/${product.id}`}>
        <div className="bg-[#333B4A] p-6 flex flex-col grow">
          <span className="text-gray-400 text-sm mb-2">
            {product.category?.name}
          </span>
          <h3 className="text-xl text-white mb-2">{product.title}</h3>
          <p className="text-gray-400 text-sm mb-6 grow line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-2xl font-bold text-white">
              ${product.discountPrice}
            </span>
            <span className="text-gray-500 line-through text-base mb-0.5">
              ${product.regularPrice}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-4 rounded-full transition-colors mt-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? 'Adding...' : 'Add to Cart'}
          </button>
        </div>
      </Link>
    </div>
  );
}
