import React from 'react'
import back from '../back.png'
import front from '../front.png'
import AI from '../AI.png'
import Image from 'next/image'  
type Props = {
  image: string,
  desc : string,
  Title : string
}
const Skillset = ({image,desc,Title}:Props ) => {
  return ( 
    <div className='border-2 min-h-[20vh] rounded flex flex-col bg-slate-900 m-3'>
        <div className='flex flex-row items-center border-b-2'>
            <div className='self-start p-2 border-r-2 '><Image src={`/${image}.png`} height={40} width={40} alt='FrontEnd'/></div>
            <div className='self-center px-2 text-white text-2xl'>{Title}</div>
        </div>
        <div className='text-white text-md p-2'>
          {desc}
        </div>
    </div>
  )
}

export default Skillset