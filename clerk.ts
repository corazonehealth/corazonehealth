import React from 'react';
import { ClerkProvider, RedirectToSignIn, useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';

// Define the type for the component props
interface ClerkProviderWrapperProps {
  children: React.ReactNode;
}

const ClerkProviderWrapper: React.FC<ClerkProviderWrapperProps> = ({ children }) => {
  const { pathname } = useRouter();
  const { isSignedIn } = useAuth();

  // Redirect to sign-in if the user is not authenticated
  if (pathname === '/card-details' && !isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || ''}
      navigate={(to) => window.location.assign(to)}
    >
      {children}
    </ClerkProvider>
  );
};

export default ClerkProviderWrapper;
