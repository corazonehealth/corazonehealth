"use client";

import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import links from '../constants/links';

const Navbar = ({ containerStyles }: { containerStyles: string }) => {
  const pathname = usePathname();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        // If you're on the home page, use ScrollLink; otherwise, use Next.js Link for navigation
        return pathname === '/' ? (
          <ScrollLink
            key={index}
            to={link.target}
            smooth
            offset={link.offset}
            className='cursor-pointer hover:text-accent transition-all'
            activeClass='active'
          >
            {link.name}
          </ScrollLink>
        ) : (
          // Remove extra <a> and directly use the Link component without wrapping it in <a>
          <Link href={`/#${link.target}`} key={index} passHref className='cursor-pointer hover:text-accent transition-all'>
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
