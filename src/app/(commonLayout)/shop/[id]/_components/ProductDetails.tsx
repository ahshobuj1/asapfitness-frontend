'use client';

import {useState} from 'react';
import Image from 'next/image';
import {Plus, Minus} from 'lucide-react';
import {Button} from '@/components/ui/button';

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <section className="container mx-auto px-6 py-12 max-w-6xl">
      <div className="flex flex-col md:flex-row w-full border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-12 min-h-100 md:min-h-150 relative">
          <Image
            src="/images/home/product/product-1.png"
            alt="Whey Protein Isolate"
            fill
            className="object-contain p-12"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 bg-[#F8F9FA] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <span className="text-gray-500 text-sm font-medium mb-2">
            Protein
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
            Whey Protein Isolate
          </h1>

          <div className="flex items-end gap-3 mb-6">
            <span className="text-3xl font-bold text-slate-900">$54.99</span>
            <span className="text-gray-400 line-through text-lg mb-0.5">
              $69.99
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Fuel your body with IsoBlast, our premium whey protein isolate
            meticulously crafted for athletes and fitness enthusiasts.
            Engineered for rapid absorption, IsoBlast delivers a surge of
            essential amino acids directly to your muscles, igniting recovery
            and stimulating lean muscle growth. Whether you&apos;re crushing a
            post-workout shake or seeking a convenient protein boost throughout
            the day, IsoBlast provides the nutritional support you need to
            achieve peak performance.
          </p>

          <div className="mb-8">
            <span className="inline-block bg-[#151923] text-white text-xs font-bold tracking-wider px-4 py-2 rounded-full uppercase">
              In Stock
            </span>
          </div>

          <div className="flex flex-col gap-3 mb-10">
            <span className="text-sm font-medium text-slate-900">Quantity</span>
            <div className="flex items-center gap-4">
              <button
                onClick={increaseQuantity}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-200 cursor-pointer transition-colors text-slate-700">
                <Plus className="w-4 h-4" strokeWidth={2} />
              </button>

              <span className="text-xl font-bold text-slate-900 w-6 text-center">
                {quantity}
              </span>

              <button
                onClick={decreaseQuantity}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-200 transition-colors text-slate-700 cursor-pointer">
                <Minus className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="outline"
              className="flex-1 rounded-full border-gray-400 text-slate-700 hover:bg-gray-100 hover:text-slate-900 py-6 text-base font-medium bg-transparent transition-colors cursor-pointer">
              Add To Cart
            </Button>

            <Button className="flex-1 cursor-pointer rounded-full bg-primary hover:bg-primary/80 text-white py-6 text-base font-medium transition-colors">
              check Out
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
