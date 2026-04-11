import {TShoppingCartItem} from '@/types/shoppingCart';
import Image from 'next/image';

const ShoppingCard = ({item}: {item: TShoppingCartItem}) => {
  return (
    <div className={`flex gap-4 py-6`}>
      <div className="w-24 h-24 rounded-2xl border border-gray-200 p-2 shrink-0 bg-white flex items-center justify-center">
        <Image
          src={item.image}
          alt={item.title}
          width={64}
          height={64}
          className="object-cover"
        />
      </div>

      <div className="flex-1 flex justify-between">
        <div className="flex flex-col pr-2">
          <span className="text-xs text-gray-500 font-medium mb-1.5">
            {item.category}
          </span>
          <h4 className="text-sm font-semibold text-slate-900 mb-1.5 leading-tight">
            {item.title}
          </h4>
          <p className="text-xs text-gray-500 leading-relaxed max-w-45">
            {item.description}
          </p>
        </div>

        <div className="flex flex-col items-end justify-between py-0.5">
          <button className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors cursor-pointer mt-1">
            Remove
          </button>
          <span className="text-sm font-bold text-slate-900 mb-1">
            {item.quantity} <span className="font-medium mx-0.5">×</span>{' '}
            {item.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
