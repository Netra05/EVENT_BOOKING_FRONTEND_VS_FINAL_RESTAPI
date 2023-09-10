import React from 'react'

import event from '../assets/event.jpg';
import projectimage1 from '../assets/projectimage1.jpg';
import projectimage2 from '../assets/projectimage2.jpg';
import projectimage3 from '../assets/projectimage3.jpg';
import projectimage4 from '../assets/projectimage4.jpg';

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>All-Inclusive Events</h1>
        <p className='py-4'>People make events into stories. Stories give events meaning</p>
        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={event} alt="/" />
            <img className='w-full h-full object-cover' src={projectimage1} alt="/" />
            <img className='w-full h-full object-cover' src={projectimage2} alt="/" />
            <img className='w-full h-full object-cover' src={projectimage3} alt="/" />
            <img className='w-full h-full object-cover' src={projectimage4} alt="/" />
        </div>
    </div>
  )
} 

export default Destinations