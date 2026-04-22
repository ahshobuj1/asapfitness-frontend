'use client';

import React, { useState } from 'react';
import ClassDetails from './_components/ClassDetails';
import MoreClasses from './_components/MoreClasses';
import { useGetClassesByCategoryQuery } from '@/redux/features/lms.api';
import { useParams } from 'next/navigation';

function ProgramDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: classesData, isLoading } = useGetClassesByCategoryQuery(id);
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);

  const classes = classesData?.data || [];
  const initialClassId = (classes.find((c) => c.classOrder === 1) || classes[0])?.id;
  const activeClassId = selectedClassId || initialClassId;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <section>
      {activeClassId && (
        <ClassDetails 
          categoryId={id} 
          classId={activeClassId} 
          classes={classes}
        />
      )}
      <MoreClasses 
        categoryId={id} 
        onSelectClass={setSelectedClassId} 
      />
    </section>
  );
}

export default ProgramDetailsPage;
