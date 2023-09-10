import React,{useState} from 'react';
import videoBg from '../assets/videoBg.mp4';
import { Link } from 'react-router-dom';



function Hero() {
  return (
    <div className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover'
        src={videoBg}
        autoPlay
        loop
        muted
      />
      {/* <Link to="/join">Click here to Register Your Events !</Link> */}
      <Link to="/join" style={{ fontWeight: 'bold' }}>
  Click here to Register Your Events!
</Link>


    </div>
  );
}

export default Hero;


