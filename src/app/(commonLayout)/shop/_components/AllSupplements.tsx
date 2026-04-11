import {TProduct} from '@/types/product';
import {ProductCard} from '@/components/Shared/ProductCard';

export default function AllSupplements() {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allSupplements.map((product: TProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

const allSupplements: TProduct[] = [
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
  {
    id: 4,
    category: 'BCAA',
    title: 'BCAA Energy Plus',
    description: 'Enhance endurance and accelerate recovery during workouts.',
    price: '$29.99',
    oldPrice: '$39.99',
    image: '/images/home/product/product-1.png',
  },
  {
    id: 5,
    category: 'Creatine',
    title: 'Creatine Monohydrate',
    description: 'Increase muscle power, strength, and overall performance.',
    price: '$19.99',
    oldPrice: '$24.99',
    image: '/images/home/product/product-2.png',
  },
  {
    id: 6,
    category: 'Weight Loss',
    title: 'Fat Burner Pro',
    description: 'Thermogenic blend to support healthy metabolism and energy.',
    price: '$34.99',
    oldPrice: '$44.99',
    image: '/images/home/product/product-3.png',
  },
  {
    id: 7,
    category: 'Protein',
    title: 'Casein Protein',
    description: 'Slow-digesting protein ideal for nighttime muscle recovery.',
    price: '$49.99',
    oldPrice: '$59.99',
    image: '/images/home/product/product-1.png',
  },
  {
    id: 8,
    category: 'Recovery',
    title: 'Glutamine Powder',
    description: 'Support immune function and muscle recovery post-workout.',
    price: '$22.99',
    oldPrice: '$29.99',
    image: '/images/home/product/product-2.png',
  },
  {
    id: 9,
    category: 'Vitamins',
    title: 'Omega-3 Fish Oil',
    description: 'Essential fatty acids for heart, brain, and joint health.',
    price: '$18.99',
    oldPrice: '$25.99',
    image: '/images/home/product/product-3.png',
  },
];
