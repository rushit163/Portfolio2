import React from 'react'
import Image from 'next/image'

type Props = {
  open : ()=>void,
  image: string,
  shortdesc : string,
  Title : string
}
const ProjectCard = ({image,shortdesc,Title,open}:Props) => {
  return (
    <div className='flex flex-col max-w-[320px] min-h-[380px]  rounded-sm cursor-pointer bg-white bg-opacity-60 hover:bg-opacity-100' onClick={open}>
      <div className='w-full object-cover'>
      <Image src={`/${image}.webp`} height={0} width={320} alt='FrontEnd' className=''/>
      </div>
      <div className='rounded'>
      <div className='text-2xl p-3 text-black'>
        {Title}
      </div>
      <div className='px-3 text-black hover'>
        {shortdesc}.....
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
