import React from 'react'

const Footer = () => {
  return (
    <footer className="footer py-4 h-[75px]">
  <div className="container mx-auto flex justify-between items-center">
    <a className="text-white  text-md cursor-pointer" href='rushitpatel163@gmail.com'>
      rushitpatel163@gmail.com
    </a>
    <div>
      <a href="#about" className="text-black text-xl mx-4 hover:text-slate-100">
        About Me
      </a>
      <a href="#home" className="text-black text-xl mx-4 hover:text-slate-100">
        Home
      </a>
      <a href="#projects" className="text-black text-xl mx-4 hover:text-slate-100">
        Projects
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
