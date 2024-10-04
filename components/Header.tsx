"use client";

import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import MobileNav from './MobileNav';
import Link from 'next/link';
import Image from 'next/image';
import { MdMenu } from 'react-icons/md';
import { SignedIn, SignedOut, UserButton, SignInButton, useAuth } from '@clerk/nextjs';

const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [isClient, setIsClient] = useState(false); // Add a state to check if we're on the client
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    // This will ensure we are running on the client side
    setIsClient(true);

    const handleScroll = () => {
      setHeaderActive(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isLoaded) {
    return (
      <header className="fixed max-w-[1920px] top-0 w-full bg-primary-200 transition-all z-50 h-[140px]">
        <div className='container mx-auto flex items-center justify-between h-full'>
          <div className="animate-pulse h-10 w-40 bg-gray-300" />
        </div>
      </header>
    );
  }

  return (
    <header className={`${headerActive ? 'h-[100px]' : 'h-[140px]'} 
      fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[133px] transition-all z-50`}>
      <div className='container mx-auto flex items-center justify-between'>
        <Link href='/'>
          <Image className='mt-2' src={'/assets/logo.jpg'} width={150} height={150} alt='logo'/>
        </Link>

        <MobileNav containerStyles={`${headerActive ? 'top-[124px]' : 'top-[124px]'} 
          ${openNav ? "max-h-max pt-8 pb-10 border-t border-white/10" :
             "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"}
          flex flex-col text-center gap-8 
          fixed bg-primary-200 w-full left-0 text-base uppercase
          font-medium text-white transition-all xl:hidden`}/>

        <Navbar containerStyles='flex gap-4 text-white text-base uppercase font-medium transition-all hidden xl:flex'/>

        <div className='flex items-center gap-4 text-white text-base uppercase font-medium'>
          {isClient && isSignedIn ? ( // Ensure this runs only on the client
            <UserButton />
          ) : (
            isClient && (
              <SignedOut>
                <SignInButton>
                  Sign In
                </SignInButton>
              </SignedOut>
            )
          )}
          <button onClick={() => setOpenNav(!openNav)} className='text-white xl:hidden'>
            <MdMenu className='text-4xl' />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
