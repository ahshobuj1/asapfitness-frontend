/* eslint-disable @typescript-eslint/no-explicit-any */
import {TShoppingCartItem} from '@/types/shoppingCart';
import Image from 'next/image';
import {useRemoveFromCartMutation} from '@/redux/features/cart.api';
import {toast} from 'sonner';
import {Loader2} from 'lucide-react';

const ShoppingCard = ({item}: {item: TShoppingCartItem}) => {
  const [removeFromCart, {isLoading}] = useRemoveFromCartMutation();

  const handleRemove = async () => {
    try {
      const res = await removeFromCart(item.id).unwrap();
      if (res.success) {
        toast.success('Item removed from cart');
      }
    } catch (error: any) {
      toast.error(error?.data?.message || 'Failed to remove item');
    }
  };

  const {product} = item;

  return (
    <div className={`flex gap-4 py-6`}>
      <div className="w-24 h-24 rounded-2xl border border-gray-200 p-2 shrink-0 bg-white flex items-center justify-center">
        <Image
          src={"/images/home/product/product-1.png"}
          // src={product.imageUrl}
          alt={product.title}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>

      <div className="flex-1 flex justify-between">
        <div className="flex flex-col pr-2">
          <span className="text-xs text-gray-500 font-medium mb-1.5">
            {product.category?.name}
          </span>
          <h4 className="text-sm font-semibold text-slate-900 mb-1.5 leading-tight">
            {product.title}
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed max-w-45 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col items-end justify-between py-0.5">
          <button
            onClick={handleRemove}
            disabled={isLoading}
            className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors cursor-pointer mt-1 disabled:opacity-50">
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Remove'}
          </button>
          <span className="text-sm font-bold text-slate-900 mb-1">
            {item.quantity} <span className="font-medium mx-0.5">×</span> $
            {product.discountPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
