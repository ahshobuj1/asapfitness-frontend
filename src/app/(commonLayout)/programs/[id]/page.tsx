import React from 'react';
import ClassDetails from './_components/ClassDetails';
import MoreClasses from './_components/MoreClasses';

async function page({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  console.log(id);

  return (
    <section>
      <ClassDetails />
      <MoreClasses />
    </section>
  );
}

export default page;
