import React from 'react'
import Image from 'next/image'

type Props = {
    close : ()=>void,
    image: string,
    desc : string,
    Title : string
  }
  const styles = {
    backgroundColor : "#ffecbc"
  }
const SingleProject = ({image,desc,Title,close}:Props) => {
  return (
    <div className='flex flex-col align-center justify-center max-w-[70vw] rounded-md  p-0 bg-white cursor-pointer container min-h-[vh] p-2' >
      <div className='flex lg:flex-row xl:flex-row flex-col w-full  border-red-100 rounded-md'>
            <Image src={`/${image}.png`} height={500} width={500} alt='FrontEnd' className='object-cover rounded-sm '/>
            <div className='px-3 flex flex-col align-center justify-center'>
            <a href='google.com' className='text-slate-600 hover:text-black text-3xl'>{Title}<br/></a>
                <div className='text-xl'>{desc}</div>
                <div className='flex flex-row mt-3'>
            <a><Image src={'/Github.png'} height={35} width={35} alt='Github'/></a>
            <a><Image src={'/link.png'} height={35} width={35} alt='Github' className='mx-3'/></a>
            </div>
            </div>
      </div>
      <style jsx>{`
      .container{
            background-color: #ffecbc;
        }
        `}
      </style>
    </div>
  )
}

export default SingleProject
