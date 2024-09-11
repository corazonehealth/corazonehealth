"use client"
import { useMediaQuery } from 'react-responsive'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import links from '@/constants/links'


const MobileNav = ({containerStyles} : {containerStyles: string}) => {
  const pathname = usePathname()
  const isMobile = useMediaQuery({
    query: '(max-width: 640px)'
  })
  return (
    <nav className={`${containerStyles}`}>{links.map((link, index) => {
      return pathname === '/' ?(<ScrollLink offset={link.offset} to={link.target} smooth spy
        activeClass={`${!isMobile && 'active'}`}
        key={index}
        className='cursor-pointer hover:text-accent transition-all'
      >{link.name}</ScrollLink>) :(
        <Link href={`/#${link.target}`} key={index} passHref 
        className='cursor-pointer hover:text-accent transition-all'
        >{link.name}</Link>
      )
    })}</nav>
  )
}

export default MobileNav