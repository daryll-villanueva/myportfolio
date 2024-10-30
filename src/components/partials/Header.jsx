import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";
import { Button } from '../ui/button';
import { HiOutlineMenu } from "react-icons/hi";

const Header = ({scrollToElement}) => {
  return (
    <header className='fixed top-0 left-0 w-screen z-20 h-14 flex items-center lg:justify-between border-b bg-card padding'>
        <button className='font-kodchasan_B text-primary text-3xl hidden lg:flex' onClick={() => scrollToElement("home")}>D/V</button>
        <nav className='lg:hidden flex items-center justify-between w-full'>
          <button className='font-kodchasan_M text-primary text-2xl' onClick={() => scrollToElement("home")}>daryll</button>
          <div className='flex items-center gap-2 sm:gap-3 font-kodchasan_R'>
            <Button variant="default" size="md" className="text-sm">Contact</Button>
            <Link target='_blank' to="https://github.com/daryllvillanueva">
              <Button variant="ghost" size="icon"><FaGithub className='text-primary header'/></Button>
            </Link>
            <Button variant="ghost" size="icon"><HiOutlineMenu className='text-primary header'/></Button>
          </div>
        </nav>
        <ul className='hidden lg:flex items-center gap-8 text-sm text-muted-foreground font-kodchasan_R'>
          <Navigation scrollToElement={scrollToElement}/>
          <div className='flex items-center gap-2'>
            <Button variant="default" size="md" className="text-sm">Contact</Button>
            <Link target='_blank' to="https://github.com/daryllvillanueva">
              <Button variant="ghost" size="icon"><FaGithub className='text-primary header'/></Button>
            </Link>
          </div>
        </ul>
    </header>
  )
}

export default Header