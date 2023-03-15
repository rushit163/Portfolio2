import React,{useState, useEffect} from 'react'
import { useScrollDirection } from './useScroll';
const Navbar = () => {
    const scrollDirection = useScrollDirection(); 
  return (
    <>
    <nav className={`flex flex-row item-center justify-center bg-transperant  w-full  fixed ${ scrollDirection === "down" ? "-top-20" : "top-0"}  z-20 `}>
        <div className='bg-white rounded-lg bg-opacity-50 rounded-t-none'>
            <ul className="flex flex-row item-center justify-center  mt-2 mb-2">
            <li>
                <a href="#" className="text-l lg:text-2xl px-2 font-semibold lg:px-5 md:px-3 sm:px-2  text-slate-300  hover:text-white">Home</a>
            </li>
            <li>
                <a href="#" className="text-l lg:text-2xl px-2 font-semibold lg:px-5 md:px-3 sm:px-2  text-slate-300  hover:text-white">About</a>
            </li>
            <li>
                <a href="#" className="text-l lg:text-2xl px-2 font-semibold lg:px-5 md:px-3 sm:px-2  text-slate-300  hover:text-white">Projects</a>
            </li>
            <li>
                <a href="#" className="text-l lg:text-2xl px-2 font-semibold lg:px-5  md:px-3 sm:px-2 text-slate-300  hover:text-white">Contact</a>
            </li>
            </ul>
        </div>
    </nav>

    </>
  )
}

export default Navbar;
