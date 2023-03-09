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
    <nav className={`flex flex-row item-center justify-center bg-transperant   fixed w-full z-20 left-0" id='navbar`}>
        <div className=' rounded '>
            <ul className="flex flex-row item-center justify-center  mt-4 rounded-lg ">
            <li>
                <a href="#" className="text-l lg:text-2xl px-2 font-bold lg:px-5 md:px-3 sm:px-2  text-slate-400  hover:text-white">Home</a>
            </li>
            <li>
                <a href="#" className="text-l lg:text-2xl px-2 font-bold lg:px-5  md:px-3 sm:px-2  text-slate-400  hover:text-white">About</a>
            </li>
            <li>
                <a href="#" className="text-l lg:text-2xl font-bold lg:px-5 md:px-3 sm:px-2  text-slate-400  hover:text-white">Services</a>
            </li>
            <li>
                <a href="#" className="text-l lg:text-2xl px-2 font-bold lg:px-5  md:px-3 sm:px-2 text-slate-400  hover:text-white">Contact</a>
            </li>
            </ul>
        </div>
    </nav>

    </>
  )
}

export default Navbar;
