'use client';

import {ShoppingCart, X, ShoppingBag, Loader2} from 'lucide-react';
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
import {useGetCartQuery} from '@/redux/features/cart.api';
import {useAppSelector} from '@/redux/hooks';

export function CartModal() {
  const user = useAppSelector((state) => state.auth.user);
  const {data: cartResponse, isLoading} = useGetCartQuery(undefined, {
    skip: !user,
  });

  const cart = cartResponse?.data;
  const cartItems: TShoppingCartItem[] = cart?.items || [];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="text-slate-800 hover:text-primary transition-colors cursor-pointer outline-none relative">
          <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
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
          {!user ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
              <p className="text-gray-500 font-medium">
                Please login to see your cart
              </p>
            </div>
          ) : isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
              <ShoppingBag className="w-16 h-16 text-gray-200 mb-4" />
              <p className="text-gray-500 font-medium">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div
                key={item.id}
                className={`${
                  index !== cartItems.length - 1
                    ? 'border-b border-gray-200'
                    : ''
                }`}>
                <ShoppingCard item={item} />
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="bg-[#EAECEF] p-8 mt-auto">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-slate-900">
                Subtotal
              </span>
              <span className="text-xl font-bold text-slate-900">
                ${cart?.subtotal?.toFixed(2)}
              </span>
            </div>

            <Button className="w-full bg-primary hover:bg-primary text-white font-medium py-6 rounded-full transition-colors text-base cursor-pointer shadow-sm">
              Check Out
            </Button>
          </div>
        )}

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
