import React,{useState, useEffect} from 'react'
import { useScrollDirection } from './useScroll';
const Navbar = () => {
    const scrollDirection = useScrollDirection(); 
  return (
    <>
    <nav className={` transition-all flex flex-row item-center justify-center bg-transperant  w-full  fixed ${ scrollDirection === "down" ? "-top-20" : "top-0"}  z-20 `}>
        <div className='bg-white rounded-sm bg-opacity-70 backdrop-blur-lg rounded-t-none'>
            <ul className="flex flex-row item-center justify-center  mt-2 mb-2">
            <li>
                <a href="#home" className="text-lg lg:text-xl px-1 font-semibold lg:px-3 md:px-3 sm:px-2  text-slate-500  hover:text-white">Home</a>
            </li>
            <li>
                <a href="#about" className="text-lg lg:text-xl px-1 font-semibold lg:px-3 md:px-3 sm:px-2  text-slate-500  hover:text-white">About</a>
            </li>
            <li>
                <a href="#projects" className="text-lg lg:text-xl px-1 font-semibold lg:px-3 md:px-3 sm:px-2  text-slate-500  hover:text-white" >Projects</a>
            </li>
            <li>
                <a href="#experience" className="text-lg lg:text-xl px-1 font-semibold lg:px-3  md:px-3 sm:px-2 text-slate-500  hover:text-white">Experience</a>
            </li>
            </ul>
        </div>
    </nav>

    </>
  )
}

export default Navbar;
