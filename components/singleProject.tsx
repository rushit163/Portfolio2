import React from 'react'
import Image from 'next/image'
import {motion} from 'framer-motion'
type Props = {
    close : ()=>void,
    image: string,
    desc : string,
    Title : string,
    github : string,
    Link : string
  }
  const styles = {
    backgroundColor : "#ffecbc"
  }
const SingleProject = ({github,Link,image,desc,Title,close}:Props) => {
  return (
    <motion.div className='flex flex-col align-center justify-center max-w-[70vw] rounded-md  p-0 bg-white cursor-pointer container min-h-[vh] p-2' >
      <div className='flex lg:flex-row xl:flex-row flex-col w-full  border-red-100 rounded-md'>
            <Image src={`/${image}.webp`} height={500} width={500} alt='FrontEnd' className='object-cover rounded-sm '/>
            <div className='px-3 flex flex-col align-center justify-center'>
            <a href='google.com' className='text-slate-600 hover:text-black text-3xl'>{Title}<br/></a>
                <div className='text-xl'>{desc}</div>
                <div className='flex flex-row mt-3'>
            <a href={github} className='border border-black-2 px-2 mr-3 rounded-xl hover:bg-red-900 hover:text-white'>Github</a>
            {Link && <a href={Link} className='border border-black-2 px-2 rounded-xl hover:bg-blue-900 hover:text-white'>Live</a>}
            </div>
            </div>
      </div>
      <style jsx>{`
      .container{
            background-color: #ffecbc;
        }
        `}
      </style>
    </motion.div>
  )
}

export default SingleProject
