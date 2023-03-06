import React from 'react'
import Link from 'next/link';
import Typeeffect from '../components/typeeffect';
import Typeeffect2 from '../components/typeeffect2';
import Skilss from '../components/skills';
const About = () => {
  return (
    <div>
      <div className="grid grid-cols-8 gap-4 bg-cover bg-my_bg_image h-[100vh] w-[100vw]">
      <div className='col-span-1 overflow-y-hidden h-[100vh] '> 
        <Skilss/>
      </div>  
      <div className='flex flex-col align-center col-span-6'>
        <div className="flex justify-center">
          <Link href='/aboutme'><p className="font-bold  text-2xl mx-4 my-3 text-slate-400 rounded-lg hover:text-slate-50">About Me</p></Link>
          <Link href='/project'><p className="font-bold text-2xl  mx-4 my-3 text-slate-400 rounded-lg hover:text-slate-50">Project</p></Link>
          <Link href='/contactme'><p className="font-bold  text-2xl mx-4 my-3 text-slate-400 rounded-lg hover:text-slate-50">Skills</p></Link>
          <Link href='/contactme'><p className="font-bold  text-2xl mx-4 my-3 text-slate-400 rounded-lg hover:text-slate-50">Contact Me</p></Link>
        </div>
        <div className='flex flex-col justify-center lg:mx-40 lg:my-40 md:mx-20 md:my-20 sm:mx-20 sm:my-20'>
          <div className='self-begin font-bold lg:text-5xl md:text-4xl sm:text-2xl text-blue-900'>Hey, I'm</div>
          <div className='self-begin lg:text-8xl md:text-7xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-blue-900 to-white-900 '
          >
          {Typeeffect()}
          </div>
          <div className='self-begin flex font-bold lg:text-5xl md:text-4xl sm:text-2xl text-sky-100'>I'm a&nbsp;<span className='text-red-300 typewritter'>{Typeeffect2()}</span>
          </div>
           <div className='self-begin flex font-medium lg:text-l md:text-sm sm:text-sm  my-2 w-5/6'>
            Undergraduate Student of Computer Science from India. Learning the ins and outs of web development currently,I'm Good at Frontend Development.But I'm also exploring AI/ML development.
          </div>
        </div> 
        </div>
    </div>
    </div>
  )
}

export default About
