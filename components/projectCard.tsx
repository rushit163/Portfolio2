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
    <div className='flex flex-col max-w-[320px] min-h-[380px]  rounded-sm cursor-pointer bg-white bg-opacity-60 hover:bg-opacity-100' onClick={open}>
      <div className='w-full object-cover '>
      <Image src={`/${image}.png`} height={0} width={320} alt='FrontEnd' className=''/>
      </div>
      <div className='rounded'>
      <div className='text-2xl p-3 text-black'>
        {Title}
      </div>
      <div className='px-3 text-black hover'>
        {desc.slice(0,100)}......
      </div>
      </div>
      <style jsx>{`
      .project{
            background-color: #0B0B0B;
        }
        `}
      </style>
    </div>
  )
}

export default ProjectCard
