import React from 'react'
import back from '../back.png'
import front from '../front.png'
import AI from '../AI.png'
import Image from 'next/image'
import ProjectCard from '../components/projectCard'
type Props = {
  key : Number,
  image: string,
  desc : string,
  Title : string
}
const projects = ({image,desc,Title}:Props) => {
  return (
    <div>
    <ProjectCard image={image} desc={desc} Title={Title}/>
    </div>
  )
}

export default projects

