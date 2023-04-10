import React from 'react'
import Image from 'next/image';
import me from '../public/me.jpeg'
import SETS from '../data/Skillset';
import { Skillsettype } from '../data/Skillset';
import Skillset from '../components/Skillset';
const Skills = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-baseline align-center  max-h-full min-h-[100vh] w-[100vw] bg-slate-900 pt-12 ">
      <div className='flex flex-col justify-baseline  w-[100vw] lg:w-[50vw] p-3'>
            <div className='flex flex-row align-center justify-center text-white text-4xl lg:p-2 '>
              About Me
            </div>
          <div className='flex flex-row align-center justify-center py-6'>
            <div style={{borderRadius: '100%', overflow: 'hidden'}} >
            <Image
              src={me}
              height={250}
              width={250}
              alt = "My pic"
            />
            </div>
          </div>
          <div className='flex flex-row align-center justify-center text-white text-2xl text-justify'>
            <p>
          &emsp;&emsp;&emsp;&emsp;Hello World, I'm <span className='bg-yellow-300 p-1 text-slate-900'>Rushit</span> an Undergreaduate Student in SRM University of Scinece and Technology
              in Chennai, Tamil Nadu. I'm a Lerning <span className='bg-red-300 p-1 text-slate-900'>Web Development</span>. 
              I'm good at Frontend tasks as well as I can make UI/UX designs using Figma.
              I'm also looking forward to learn AI/ML Technology as my next target. 
              </p>
          </div>
          <div className='mt-3'>
          <button className="mr-2 bg-transparent hover:bg-slate-700 font-semibold text-white  border border-blue-500 hover:border-transparent rounded px-12 py-2">
          Projects
          </button>
          <button className="bg-transparent hover:bg-slate-700 font-semibold text-white border border-blue-500 hover:border-transparent rounded px-12 py-2">
          Contact Me
          </button>
          </div>
      </div>
      <div className='flex flex-col justify-baseline  w-[100vw] lg:w-[50vw] p-3  '>
        <div className='flex flex-row align-center justify-center text-white text-4xl lg:p-2 pb-5'>
              Things I'm Good At
        </div>
        <div className='flex flex-col align-center justify-center text-white text-xl text-justify'>
        {SETS.map((skill:Skillsettype,index)=>{
              return (<Skillset image={skill.image}  desc={skill.desc} Title={skill.Title}  key={index}/>)
        })}
          </div>
      </div>
    </div>
  )
}

export default Skills;
