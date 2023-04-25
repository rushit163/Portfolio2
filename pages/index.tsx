import type { NextPage } from 'next'
import Head from 'next/head'
import About from './About'
import Skills from './Skills'
import Navbar from '../components/navbar';
import Projects from './Projects';
import { projectType } from '../data/Projects'
import myProjects from '../data/Projects';
import Experience from './experience';
import Footer from '../components/Footer';
const Home: NextPage = () => {
  return (
    <div className='scroll-smooth overflow-hidden '>
    <Head>
      <title>Rushit Patel</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
    
    <div className='overflow-y-hidden scroll-smooth'>
    <Navbar/>
    <About/>
    <Skills/> 
    <div className='min-w-[100vw] bg-gray-800 flex align-center justify-center text-white text-4xl p-3 bf ' id='projects'>Projects</div>
    <hr/>
    <div className='min-h-[100vh] w-[100vw] bg-gray-800 p-3 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex align-center justify-center gap-3 bf'>
      {
        myProjects.map((project:projectType,index)=>{
          return(<Projects image={project.image}  desc={project.desc} Title={project.Title} key={index}/>)
        })
      }
      </div>
    </div>
    <div className='min-w-[100vw] bg-gray-800 flex align-center justify-center text-white text-4xl p-3 bf' id='experience'>Experience</div>
    <hr/>
    <div className='scrollbar flex p-3 overflow-x-scroll bf pt-5'><Experience /></div>
    <Footer/>
    <style jsx>{`
      .bf{
            background-color: #131313;
        }
        `}
      </style>
    </div>
  );
}
export default Home;