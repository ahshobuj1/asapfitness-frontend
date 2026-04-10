import Image from 'next/image';

const productsData = [
  {
    id: 1,
    category: 'Protein',
    title: 'Whey Protein Isolate',
    description: 'Pure and fast-absorbing protein for muscle recovery.',
    price: '$54.99',
    oldPrice: '$69.99',
    image: '/images/home/product/product-1.png',
  },
  {
    id: 2,
    category: 'Pre-Workout',
    title: 'Pre-Workout Surge',
    description: 'Fuel your energy and boost endurance before every workout.',
    price: '$39.99',
    oldPrice: '$49.99',
    image: '/images/home/product/product-2.png',
  },
  {
    id: 3,
    category: 'Vitamins',
    title: 'Multivitamin Elite',
    description:
      'Comprehensive daily nutrients to support your active lifestyle.',
    price: '$24.99',
    oldPrice: '$34.99',
    image: '/images/home/product/product-3.png',
  },
];

export default function FuelYourGainsSection() {
  return (
    <section className="w-full bg-[#151923] py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row justify-between items-end mb-10">
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Fuel Your
            </h2>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight">
              Gains
            </h2>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-8 rounded-full transition-colors cursor-pointer">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="flex flex-col rounded-2xl overflow-hidden shadow-lg group">
              <div className="bg-white h-90 relative p-8 flex justify-center items-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover p-8 transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="bg-[#333B4A] p-6 flex flex-col grow">
                <span className="text-gray-400 text-sm mb-2">
                  {product.category}
                </span>
                <h3 className="text-xl  text-white mb-2">{product.title}</h3>
                <p className="text-gray-400 text-sm mb-6 grow">
                  {product.description}
                </p>

                <div className="flex items-end gap-3 mb-6">
                  <span className="text-2xl font-bold text-white">
                    {product.price}
                  </span>
                  <span className="text-gray-500 line-through text-base mb-0.5">
                    {product.oldPrice}
                  </span>
                </div>

                <button className="w-full bg-primary hover:bg-primary/80 text-white font-medium py-3 px-4 rounded-full transition-colors mt-auto cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
