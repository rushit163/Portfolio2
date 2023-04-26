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
        <div className='pt-7 lefthover'>
            <article className='flex flex-col items-center content-center relative min-h-[350px] min-w-[400px] max-w-[400px] expcard bg-zinc-800' key={index}>
                <div className='mt-2' key={index}>
                    <Image src={`https://res.cloudinary.com/dtaablkf5/image/upload/w_220,h_200,c_fill,q_100/gbmugfku5irx95ahwzlk.jpg`} width={50} height={50} alt='logo'/>
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
            box-shadow:  -20px 15px 20px -15px  rgb(255,255,255,0.4);
            transition: 0.2s;
        }
        .expcard:hover {
            transform: translateY(-1rem);
            box-shadow: -15px 15px 15px -15px rgb(255,255,255,0.4); 
        }
        .lefthover:hover ~ .lefthover {
            transform: translateX(25px);
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
