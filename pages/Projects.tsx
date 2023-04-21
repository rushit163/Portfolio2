import React, { useState } from 'react'
import back from '../back.png'
import front from '../front.png'
import AI from '../AI.png'
import Image from 'next/image'
import ProjectCard from '../components/projectCard'
import SingleProject from '../components/singleProject'
type Props = {
  key : Number,
  image: string,
  desc : string,
  Title : string
}

const projects = ({image,desc,Title}:Props) => {
  const [open,setOpnen] = useState(false);
  const openModel = ()=>{
    setOpnen(true);
  };
  const colseModel = ()=>{
    setOpnen(false);
  }
  return (
    <div className='bf'>
    <ProjectCard image={image} desc={desc} Title={Title} open={openModel}/>
    {open && 
    <div className='fixed flex flex-row align-center justify-center justify-content-center items-center top-0 left-0 bg-black h-[100vh] w-[100vw] bg-blur-sm z-[100] bg-opacity-70 backdrop-blur-sm' onClick={colseModel}>
          <SingleProject image={image} desc={desc} Title={Title} close={colseModel}/>
    </div>}
    
    </div>
  )
}

export default projects

