import React,{useState, useEffect} from 'react'

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)
    
    const handleScroll = () => {
        const currentScrollPos = window.scrollY
    
        if(currentScrollPos > prevScrollPos){
            setVisible(false)
        }else{
            setVisible(true)
        }
    
        setPrevScrollPos(currentScrollPos)
    }
    
    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll)
    })
  return (
    
    <>
    <nav className={`flex flex-row item-center justify-center bg-transperant px-2  fixed w-full z-20 left-0" id='navbar`}>
        <div className=" w-full">
            <ul className="flex flex-row item-center justify-center p-4 mt-4 rounded-lg  ">
            <li>
                <a href="#" className=" py-2 pl-3 text-gray-700  rounded dark:text-white">Home</a>
            </li>
            <li>
                <a href="#" className=" py-2 pl-3 text-gray-700  rounded dark:text-white">About</a>
            </li>
            <li>
                <a href="#" className=" py-2 pl-3 text-gray-700  rounded dark:text-white">Services</a>
            </li>
            <li>
                <a href="#" className=" py-2 pl-3 text-gray-700  rounded dark:text-white">Contact</a>
            </li>
            </ul>
        </div>
    </nav>

    </>
  )
}

export default Navbar;
