import React from 'react'
import Image from 'next/image';
import me from '../public/me.jpeg'
import Techs from './techs';
const Skills = () => {
  return (
    
    <div className="flex flex-col lg:flex-row justify-baseline align-center h-[300vh] lg:h-[100vh] w-[100vw] bg-slate-900 overflow-x-scroll">
      <div className='flex flex-col justify-baseline  w-[100vw] lg:w-[50vw] mt-9 pt-4'>
            <div className='flex flex-row align-center justify-center text-white text-4xl'>
              About Me
            </div>
          <div className='flex flex-row align-center justify-center my-5'>
            <div style={{borderRadius: '100%', overflow: 'hidden'}} >
            <Image
              src={me}
              height={250}
              width={250}
              alt = "My pic"
            />
            </div>
          </div>
          <div className='flex flex-row align-center justify-center text-white text-xl mx-5 text-justify'>
          &emsp;&emsp;&emsp;&emsp;Hello World, I'm Rushit an Undergreaduate Student in SRM university of Scinece and Technology
              in Chennai, Tamil Nadu. I'm a Lerning web development. 
              I'm good at Frontend tasks as well as I can make UI/UX designs using Figma.
              I'm also looking forward to learn AI/ML Technology as my next target.
              
          </div>
      </div>
      <div className='hidden lg:flex flex-col justify-baseline align-center w-[50vw] p-4'>
          <Techs/>
      </div>
    </div>
  )
}

export default Skills;
