import React, { Suspense } from 'react';

import PersonDetails from '@/components/PersonDetails';

const CardDetailsPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PersonDetails />
    </Suspense>
  );
};

// export const runtime = 'edge';

export default CardDetailsPage;