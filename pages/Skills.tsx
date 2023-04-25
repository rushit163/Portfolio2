import React from 'react'
import Image from 'next/image';
import me from '../public/me.jpeg'
import macbtn from '../public/macbtn.png'
import SETS from '../data/Skillset';
import { Skillsettype } from '../data/Skillset';
import Skillset from '../components/Skillset';
const Skills = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-baseline align-center  max-h-full min-h-[100vh] w-[100vw] bg-black kuchbhi shadow-2xl shadow-black " id='about'>
      <div className='flex flex-col justify-baseline  w-[100vw] lg:w-[50vw]  lg:border-r-2   border-slate-200 p-3'>
            <div className='text-white text-4xl  p-3'>
              About Me
            </div>
            <hr/>
          <div className='flex flex-row align-center justify-center'>
            <div className='mt-2'>
            <Image
              src={me}
              height={250}
              width={250}
              alt = "My pic"
            />
            </div>
          </div>
            
          <div className='box borderColor flex flex-row align-center justify-center text-black text-2xl text-justify  mt-5 rounded-xl m-4'>
            <div className='border-r-2 w-[150px] border-black'>
            </div>
  
            <div className='flex flex-col '>
          <div className='flex flex-row items-center border-b-2 border-black h-[35px]'>
            <div className='h-[20px] w-[20px] rounded-full bg-red-600 ml-2 mr-1'></div>
            <div className='h-[20px] w-[20px] rounded-full bg-yellow-300 mx-1'></div>
            <div className='h-[20px] w-[20px] rounded-full bg-green-400 mx-1'></div>
          </div>
          <div className='p-6'>
              Hello World, I'm <span className='bg-yellow-300 p-1 text-slate-900'>Rushit</span> an Undergreaduate Student in SRM University of Scinece and Technology
              in Chennai, Tamil Nadu. I'm a Lerning <span className='bg-red-300 p-1 text-slate-900'>Web Development</span>. 
              I'm good at Frontend tasks as well as I can make UI/UX designs using Figma.
              I'm also looking forward to learn AI/ML Technology as my next target. 
              </div>
              </div>
          </div>
         
      </div>
      <div className='flex flex-col justify-baseline  w-[100vw] lg:w-[50vw] p-3'>
        <div className='text-white text-4xl p-3'>
              Things I'm Good At
        </div>
        <hr/>
        <div className='flex flex-col align-center justify-center text-white text-xl text-justify'>
        {SETS.map((skill:Skillsettype,index)=>{
              return (<Skillset image={skill.image}  desc={skill.desc} Title={skill.Title}  key={index}/>)
        })}
          </div>
      </div>
      <style jsx>{`
      .kuchbhi{
            background-color: #131313;
        }
        .box{
          background-color: #FFF0E5;
      }
    .borderColor{
      border-color: #0057FF;
    }
        `}
      </style>
    </div>
  )
}

export default Skills;
