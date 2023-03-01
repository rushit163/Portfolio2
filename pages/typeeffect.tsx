import React from 'react'
import Typewriter from 'typewriter-effect';
const Typeeffect = () => {
    const strings = [
        'Rushit Patel'
    ];
  return (
    <Typewriter
    options={{
      autoStart: true,
      loop: false,
      devMode:true,
      cursor:"",
      delay:75,
      cursorClassName:'Typewriter__cursor'
    }}
    onInit={(typewriter) => {
      typewriter
        .typeString(strings[0])
        .pauseFor(4000)
        .start();
    }}
  />
  )
}

export default Typeeffect;
