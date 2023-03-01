import React from 'react'
import Typewriter from 'typewriter-effect';
const Typeeffect2 = () => {
    const strings = [
        "Designer.",'Developer.','Writer.'
    ];
  return (
    <Typewriter
    options={{
      autoStart: true,
      loop: true,
      devMode:true,
      cursorClassName:'Typewriter__cursor'
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString(strings[0])
        .pauseFor(2000)
        .deleteAll()
        .typeString(strings[1])
        .pauseFor(2000)
        .deleteAll()
        .typeString(strings[2])
        .pauseFor(2000)
        .deleteAll()
        .typeString(strings[3])
        .pauseFor(2000)
        .deleteAll()
        .start();
    }}
  />
  )
  
}

export default Typeeffect2;
