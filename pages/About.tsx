import React from 'react'
import Link from 'next/link';
import Typeeffect from '../components/typeeffect';
import Typeeffect2 from '../components/typeeffect2';
import Skilss from '../components/skills';
import { Parallax } from 'react-parallax';
const About = () => {
  return (
    
    <div>
      <div className="grid grid-cols-8 gap-4 bg-cover bg-my_bg_image h-[100vh] w-[100vw]">
      <div className='mr-3 col-span-2 md:col-span-2 lg:col-span-1 overflow-y-hidden h-[100vh] '> 
        <Skilss/>
      </div>  
      <div className='col-span-6 flex flex-col align-center md:col-span-6 lg:col-span-7'>
        <div className='flex flex-col justify-center py-40 lg:px-60 lg:py-60 md:px-30 md:py-40  sm:py-40  w-full'>
          <div className='self-begin text-3xl font-bold lg:text-5xl md:text-4xl sm:text-2xl text-blue-900'>Hey, I'm</div>
          <div className='block w-full text-5xl lg:text-8xl md:text-7xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-white-900'
          >
          {Typeeffect()}
          </div>
          <div className='self-begin flex font-bold text-xl lg:text-5xl md:text-4xl sm:text-2xl text-sky-100'>I'm a&nbsp;<span className='text-red-300 typewritter'>{Typeeffect2()}</span>
          </div>
          <div className='mt-4'>
          <button className="mr-2 bg-transparent hover:bg-slate-700 text-black font-semibold hover:text-white py-2 px-12 border border-blue-500 hover:border-transparent rounded">
          Projects
          </button>
          <button className="bg-transparent hover:bg-slate-700 text-black font-semibold hover:text-white py-2 px-12 border border-blue-500 hover:border-transparent rounded">
          Contact Me
          </button>
          </div>
        </div> 
        </div>
    </div>
    </div>
  )
}

export default About
