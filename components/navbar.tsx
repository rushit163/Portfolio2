import React from 'react'

const Navbar = () => {
  return (
      
<nav className="flex flex-row item-center justify-center bg-transperant px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0">
  <div className=" w-full">
    <ul className="flex flex-row item-center justify-center p-4 mt-4 rounded-lg  ">
      <li>
        <a href="#" className=" py-2 pl-3 pr-4 text-gray-700  rounded dark:text-white">Home</a>
      </li>
      <li>
        <a href="#" className=" py-2 pl-3 pr-4 text-gray-700  rounded dark:text-white">About</a>
      </li>
      <li>
        <a href="#" className=" py-2 pl-3 pr-4 text-gray-700  rounded dark:text-white">Services</a>
      </li>
      <li>
        <a href="#" className=" py-2 pl-3 pr-4 text-gray-700  rounded dark:text-white">Contact</a>
      </li>
    </ul>
  </div>
</nav>


  )
}

export default Navbar;
