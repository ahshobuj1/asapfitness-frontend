'use client';

import {ShoppingCart, X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import ShoppingCard from './ShoppingCard';
import {TShoppingCartItem} from '@/types/shoppingCart';

const cartItems: TShoppingCartItem[] = [
  {
    id: 1,
    category: 'Protein',
    title: 'Whey Protein Isolate',
    description: 'Pure and fast-absorbing protein for muscle recovery.',
    price: '$54.99',
    image: '/images/home/product/product-1.png',
    quantity: 1,
  },
  {
    id: 2,
    category: 'Pre-Workout',
    title: 'Pre-Workout Surge',
    description: 'Fuel your energy and boost endurance before every workout.',
    price: '$39.99',
    image: '/images/home/product/product-2.png',
    quantity: 1,
  },
];

export function CartModal() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-slate-800 hover:text-primary transition-colors cursor-pointer outline-none">
          <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </SheetTrigger>
      <SheetContent className="md:min-w-lg sm:max-w-md p-0 flex flex-col bg-white [&>button]:hidden">
        <SheetHeader className="p-8 pb-6 flex flex-row items-center justify-between">
          <SheetTitle className="text-2xl font-bold text-slate-900 m-0">
            Your Cart
          </SheetTitle>
          <SheetClose asChild>
            <button className="text-red-500 hover:text-red-600 transition-colors p-1 m-0 -mr-2 outline-none cursor-pointer">
              <X className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </SheetClose>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-8 flex flex-col hide-scrollbar">
          {cartItems.map((item, index) => (
            <div
              key={item.id}
              className={`${
                index !== cartItems.length - 1 ? 'border-b border-gray-200' : ''
              }`}>
              <ShoppingCard item={item} />
            </div>
          ))}
        </div>

        <div className="bg-[#EAECEF] p-8 mt-auto">
          <div className="flex justify-between items-center mb-6">
            <span className="text-lg font-semibold text-slate-900">
              Subtotal
            </span>
            <span className="text-xl font-bold text-slate-900">$94.98</span>
          </div>

          <Button className="w-full bg-primary hover:bg-primary text-white font-medium py-6 rounded-full transition-colors text-base cursor-pointer shadow-sm">
            check Out
          </Button>
        </div>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `,
          }}
        />
      </SheetContent>
    </Sheet>
  );
}
