import React from 'react'
import back from '../back.png'
import front from '../front.png'
import AI from '../AI.png'
import Image from 'next/image'  
type Props = {
  key : Number,
  image: string,
  desc : string,
  Title : string
}
const Skillset = ({image,desc,Title}:Props ) => {
  return ( 
    <div className='border-2 borderColor bg-white min-h-[20vh] rounded flex flex-col m-3 bg-opacity-50 backdrop-blur-xl bg-slate-700'>
        <div className='flex flex-row items-center border-b-2 borderColor'>
            <div className='self-start p-2 border-r-2 borderColor'><Image src={`/${image}.png`} height={35} width={35} alt='FrontEnd'/></div>
            <div className='self-center  px-2 text-black text-xl'>{Title}</div>
        </div>
        <div className='text-black text-md p-2'>
          {desc}
        </div>
        <style jsx>{`
      .box{
            background-color: #323131;
        }
      .borderColor{
        border-color: #0057FF;
      }
        `}
      </style>
    </div>

  )
}

export default Skillset
