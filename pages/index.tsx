import type { NextPage } from 'next'
import Head from 'next/head'
import About from './About'
import Skills from './Skills'
import Navbar from '../components/navbar';
import Skillset from '../components/Skillset'
import { Skillsets } from '../data/Skillset';
import { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import SETS from '../data/Skillset';
import { Skillsettype } from '../data/Skillset';
const Home: NextPage = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });
  function useWindowSize() {
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []); 
    return windowSize;
  }
  let width = useWindowSize();


  let start = 2
  let end = 3
  if(width.width < 1024){
    start = 3
    end = 4
  }

  return (
    <div>
    <Head>
    <title>Rushit Patel</title>
    <meta property="og:title" content="My page title" key="title" />
    </Head>
    <Navbar/>
    <Parallax pages={1.3} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <About/>
      </ParallaxLayer>
    </Parallax>
    <Skills/> 
    
  </div>
  );
}
export default Home;