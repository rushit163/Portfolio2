import React from 'react'

const Footer = () => {
  return (
    <footer className="footer py-4 " id='footer'>
  <div className="container mx-auto flex lg:flex-row xl:flex-row md:flex.row flex-col justify-between items-center">
    <div className='flex flex-row lg:flex-col xl:flex-col md:flex-col items-center'>
      <a  href='mailto:rushitpatel163@gmail.com' className='text-lg font-semibold'>Contact Me:</a>
    <a className="text-white  text-sm cursor-pointer" href='mailto:rushitpatel163@gmail.com'>
    &nbsp;rushitpatel163@gmail.com
    </a>
    </div>
    <div className='lg:mt-0 xl:mt-0 md:mt-0 mt-5'>
      <a href="https://github.com/rushit163" className=" lg:text-xl text-md xl:text-xl  md:text.xl  text-black text-xl mx-4 hover:text-slate-100">
        github
      </a>
      <a href="https://www.linkedin.com/in/rushit-patel-61382b156/" className="  lg:text-xl text-md xl:text-xl md:text.xl  text-black text-xl mx-4 hover:text-slate-100">
        linkedIn
      </a>
      <a href="https://www.instagram.com/rushit__163/" className=" lg:text-xl text-md xl:text-xl  md:text.xl  text-black text-xl mx-4 hover:text-slate-100">
        Instagram
      </a>
      
    </div>
  </div>
  <style jsx>{`
  .footer{
    background-color : #d00000;
  }
  `
  }
  </style>
</footer>




  
  )
}

export default Footer
