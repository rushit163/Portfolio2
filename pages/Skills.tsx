import React from 'react'
import Link from 'next/link';
const Skills = () => {
  return (
    <div className='bg-slate-900'>
      {/* <div className="flex justify-center sticky">
          <Link href='/aboutme'><p className="font-bold  text-2xl mx-4 my-3 text-slate-400 rounded-lg hover:text-slate-50">About Me</p></Link>
          <Link href='/project'><p className="font-bold text-2xl  mx-4 my-3 text-slate-400 rounded-lg hover:text-slate-50">Project</p></Link>
          <Link href='/contactme'><p className="font-bold  text-2xl mx-4 my-3 text-slate-400 rounded-lg hover:text-slate-50">Skills</p></Link>
          <Link href='/contactme'><p className="font-bold  text-2xl mx-4 my-3 text-slate-400 rounded-lg hover:text-slate-50">Contact Me</p></Link>
      </div> */}
    <div className="flex flex-row justify-baseline align-center h-[100vh] w-[100vw] ">
      <div className='flex flex-row justify-center align-center w-[50vw] mx-9 my-9'>
          <div className='text-white text-lg'>
            MY TIMELINE
          </div>
      </div>
      <div className='flex flex-row justify-center align-center w-[50vw] mx-9 my-9'>
          <div className='text-white text-lg'>
            Skills
          </div>
      </div>
    </div>
    </div>
  )
}

export default Skills;
