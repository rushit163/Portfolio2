import React from 'react'
import { experienceType,experinceSet } from '../data/experience'
import experience from '../data/experience'
import Image from 'next/image'
const Experience = () => {
  return (
    
    <>
      {
      experience.map((exp:experienceType,index)=>{
      return(
        <div className='pt-7'>
            <article className='flex flex-col items-center content-center relative min-h-[350px] min-w-[400px] max-w-[400px] expcard' key={index}>
                <div className='mt-2' key={index}>
                    <Image src={`/${exp.img}.png`} width={50} height={50} alt='logo'/>
                </div>
                <div className='mt-2 text-white text-2xl' key={index}>
                    {exp.title}
                </div>
                <div className='text-white text-lg' key={index}>
                    {exp.timeline}
                </div> 
                <ol className='mt-3 px-6 text-white text-lg list-disc'>
                    {exp.decriptio.map((des)=>{
                        return(
                            <li>{des}</li>
                        )
                    })}
                </ol>    
            </article>
        </div>
        )
    })}
    
      <style jsx>{`
        .expcard{
            background: #17141d;
            box-shadow:  -15px 0px 20px -15px  rgb(255,255,255,0.4);
            transition: 0.2s;
        }
        .expcard:hover {
            transform: translateY(-1rem);
            box-shadow: -15px 15px 10px -15px rgb(255,255,255,0.4); 
        
          }
          
          .expcard:hover ~ .expcard {
            transform: translateX(130px);
          }
        .bf{
            background-color: #131313;
        }
      `
      }
      </style>
    </>

  )
}

export default Experience
