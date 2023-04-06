import type { NextPage } from 'next'
import Head from 'next/head'
import About from './About'
import Skills from './Skills'
import Navbar from '../components/navbar';
import Projects from './Projects';
const Home: NextPage = () => {
  return (
    <div className='scroll-smooth'>
    <Head>
      <title>Rushit Patel</title>
      <meta property="og:title" content="My page title" key="title" />
    </Head>
    <Navbar/>
    <About/>
    <Skills/> 
    <Projects/>
  </div>
  );
}
export default Home;