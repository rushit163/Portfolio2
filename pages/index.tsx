import type { NextPage } from 'next'
import Head from 'next/head'
import About from './About'
import Skills from './Skills'
import Navbar from '../components/navbar';
import Projects from './Projects';
import { projectType } from '../data/Projects'
import myProjects from '../data/Projects';
const Home: NextPage = () => {
  return (
    <div className='scroll-smooth overflow-hidden'>
    <Head>
      <title>Rushit Patel</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
    <div className='overflow-y-hidden'>
    <Navbar/>
    <About/>
    <Skills/> 
    <div className='min-w-[100vw] bg-gray-800 flex align-center justify-center text-white text-4xl p-3'>Projects</div>
    <div className='min-h-[100vh] min-w-[100vw] bg-gray-800 p-3 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 flex align-center justify-center gap-3'>
      {
        myProjects.map((project:projectType,index)=>{
          return(<Projects image={project.image}  desc={project.desc} Title={project.Title} key={index}/>)
        })
      }
      </div>
    </div>
    </div>
  );
}
export default Home;