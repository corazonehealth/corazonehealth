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
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
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
          {/* Placeholder for logo */}
          <div className="animate-pulse h-10 w-40 bg-gray-300" />
        </div>
      </header>
    );
  }

  return (
    <header className={` ${headerActive ? 'h-[100px]' : 'h-[140px]'} 
      fixed max-w-[1920px] top-0 w-full bg-primary-200 h-[133px] transition-all z-50`}>
    <div className='container mx-auto flex items-center justify-between' >
      {/* logo */}
      <Link href='/'>
        <Image className='mt-2' src={'/assets/logo.jpg'} width={150} height={150} alt='logo'/>
      </Link>
      {/* mobile nav - hidden on large devices */}
      <MobileNav containerStyles={`${headerActive ? 'top-[124px]' : 'top-[124px]'} 
        ${openNav ? "max-h-max pt-8 pb-10 border-t border-white/10" :
           "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"}
        flex flex-col text-center gap-8 
        fixed bg-primary-200 w-full left-0 text-base uppercase
        font-medium text-white transition-all xl:hidden`}/>
      {/* desktop nav - hiiden on small devices */}
      <Navbar containerStyles='flex gap-4 text-white text-base uppercase font-medium transition-all hidden xl:flex'/>

        {/* User Buttons */}
        <div className='flex items-center gap-4 text-white text-base uppercase font-medium'>
          {isSignedIn ? (
            <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            </div>
          ) : (
            <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            </div>
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
