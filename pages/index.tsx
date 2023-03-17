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
    return windowSize;
  }
  let width = useWindowSize();
  // const [size , setSize] = useState({
  //   start:2,
  //   end : 3
  // })

  let start = 2
  let end = 3
  if(width.width < 1024){
    start = 3
    end = 4
  }
  // useEffect(()=>{
  //   console.log(width.width)
  //   console.log(size.start, size.end)
  //   if(width.width<=1024){
  //     setSize({
  //       start : 3,
  //       end : 4
  //     })
  //   }
  // },[width.width])
  // console.log(size.start, size.end)
  return (
    <>
    <Head>
    <title>Rushit Patel</title>
    <meta property="og:title" content="My page title" key="title" />
    </Head>
    <Navbar/>
    <Parallax pages={2}>
    <ParallaxLayer  id="hero" offset={0} speed={0.5} sticky={{ start: 0, end: 1 }}>
      <About/>
    </ParallaxLayer>
    <ParallaxLayer  id="bounties" offset={0.9999} speed={0.5} sticky={{start: 1, end: 2}}>
      <Skills/>
    </ParallaxLayer>
    <ParallaxLayer  id="leaderboard" offset={0.9999} speed={0.5} sticky={{ start: 2, end: 3}}>
      <div className='h-[100vh] lg:hidden bg-black mb-3'>
        <Techs/>
      </div>
    </ParallaxLayer>
    <ParallaxLayer  id="leaderboard" offset={0.9999} speed={0.5} sticky={{ start: start, end: end }}>
      <Demo/>
    </ParallaxLayer>
    </Parallax>

  </>
  );
}
export default Home;