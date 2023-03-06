import type { NextPage } from 'next'
import Head from 'next/head'
import About from './About'
import Skills from './Skills'
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
//marquee effect
const Home: NextPage = () => {
  return (
    <>
    <Head>
    <title>Rushit Patel</title>
    <meta property="og:title" content="My page title" key="title" />
    </Head>
    <Parallax pages={2.5}>
    <ParallaxLayer  offset={0} speed={1} sticky={{ start: 0, end: 1 }}>
      <About/>
    </ParallaxLayer>
    <ParallaxLayer  offset={0.9999} speed={1} sticky={{ start: 1, end: 0 }}>
    <Skills/>
    </ParallaxLayer>
    </Parallax>
  </>
  )
}

export default Home;