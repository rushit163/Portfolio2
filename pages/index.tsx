import type { NextPage } from 'next'
import Head from 'next/head'
import About from './About'
import Skills from './Skills'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from '../components/navbar';
import Demo from './demo';
import Techs from './techs';
import { useEffect, useState } from 'react';
//marquee effect
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
    return windowSize.width;
  }
  let width = useWindowSize();
  let start1 = 2
  let end1 = 3
  let start2 = 3
  let end2 = 4
  if(width>=1024){
    start2 = start1
    end2 = end1
  }
  return (
    <>
    <Head>
    <title>Rushit Patel</title>
    <meta property="og:title" content="My page title" key="title" />
    </Head>
    <Navbar/>
    <Parallax pages={2.5}>
    <ParallaxLayer  id="hero" offset={0} speed={1} sticky={{ start: 0, end: 1 }}>
      <About/>
    </ParallaxLayer>
    <ParallaxLayer  id="bounties" offset={0.9999} speed={1} sticky={{start: 1, end: 2}}>
      <Skills/>
    </ParallaxLayer>
    <ParallaxLayer  id="leaderboard" offset={0.9999} speed={1} sticky={{ start: start1, end: end1 }}>
      <div className='h-[100vh] lg:hidden bg-black mb-3'>
        <Techs/>
      </div>
    </ParallaxLayer>
    <ParallaxLayer  id="leaderboard" offset={0.99999} speed={1} sticky={{ start: start2, end: end2 }}>
      <Demo/>
    </ParallaxLayer>
    </Parallax>
  </>
  );
}
export default Home;