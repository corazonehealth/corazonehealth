import React, { Suspense } from 'react';
import CardDetails from '@/components/CardDetails';

const CardDetailsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardDetails />
    </Suspense>
  );
};

export default CardDetailsPage;