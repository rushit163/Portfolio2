import React from 'react'
import Image from 'next/image'

type Props = {
  open : ()=>void,
  image: string,
  desc : string,
  Title : string
}
const ProjectCard = ({image,desc,Title,open}:Props) => {
  return (
    <div className='flex flex-col max-w-[320px]  min-h-[380px] rounded-md  p-0 bg-red-100 cursor-pointer' onClick={open}>
      <div className='w-full object-cover border-2 border-red-100 rounded-md'>
      <Image src={`/${image}.png`} height={0} width={320} alt='FrontEnd' className='rounded-md'/>
      </div>
      <div className='text-2xl p-3 '>
        <a href='google.com' className='text-slate-600 hover:text-black'>{Title}</a>
      </div>
      <div className='px-3'>
        {desc.slice(0,100)}......
      </div>
      <div className='flex px-2 py-3'>
        <a><Image src={'/Github.png'} height={35} width={35} alt='Github'/></a>
        <a><Image src={'/link.png'} height={35} width={35} alt='Github' className='mx-3'/></a>
      </div>
    </div>
  )
}

export default ProjectCard
