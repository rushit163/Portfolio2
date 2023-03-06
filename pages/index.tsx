import type { NextPage } from 'next'
import Head from 'next/head'
import About from './About'
//marquee effect
const Home: NextPage = () => {
  return (
    <>
    <Head>
    <title>Rushit Patel</title>
    <meta property="og:title" content="My page title" key="title" />
    </Head>
    <About/>
  </>
  )
}

export default Home;