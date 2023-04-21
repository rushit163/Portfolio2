import React from 'react'

const Footer = () => {
  return (
    <footer className="footer py-4 h-[75px]">
  <div className="container mx-auto flex justify-between items-center">
    <p className="text-white text-sm">
      Copyright © {new Date().getFullYear()} Your Company
    </p>
    <div>
      <a href="/about" className="text-black text-xl mx-4 hover:text-slate-100">
        About Us
      </a>
      <a href="/contact" className="text-black text-xl mx-4 hover:text-slate-100">
        Contact Us
      </a>
      <a href="/projects" className="text-black text-xl mx-4 hover:text-slate-100">
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
