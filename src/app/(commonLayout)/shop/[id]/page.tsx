import ProductDetails from './_components/ProductDetails';

const page = async ({params}: {params: Promise<{id: string}>}) => {
  const {id} = await params;
  console.log(id);

  return (
    <section>
      <ProductDetails />
    </section>
  );
};

export default page;
