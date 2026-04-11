import Image from 'next/image';

export default function ShopBanner() {
  return (
    <section className="container mx-auto px-6 py-10 max-w-7xl">
      <div className="relative w-full h-70 md:h-80 rounded-3xl overflow-hidden bg-[#151923]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/home/shop/shop-bg.png"
            alt="Gym Background"
            fill
            sizes="1280"
            className="object-cover object-right opacity-40 mix-blend-luminosity"
          />
        </div>

        <div className="absolute bottom-0 right-0 md:right-12 z-10 h-full w-[60%] md:w-[40%]">
          <Image
            src="/images/home/shop/shop-person.png"
            alt="Athlete"
            fill
            sizes="500"
            className="object-contain object-bottom"
          />
        </div>

        <div className="relative z-20 flex flex-col justify-center h-full w-full px-8 md:px-16 lg:px-20 max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Upgrade Your Gains
          </h2>
          <p className="text-gray-300 text-sm md:text-base font-medium">
            Massive Discounts on Top Gym Supplements
          </p>
        </div>
      </div>
    </section>
  );
}
