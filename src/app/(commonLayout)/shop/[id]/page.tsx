import ProductDetails from './_components/ProductDetails';

const page = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;

  return (
    <section>
      <ProductDetails productId={id} />
    </section>
  );
};

export default page;
