import React from 'react'

import SelectsCard from './SelectsCard';
import cater1 from '../assets/cater1.jpg';
import cater2 from '../assets/cater2.jpg';
import cater3 from '../assets/cater3.jpg';
import cater4 from '../assets/cater4.jpg';
import cater5 from '../assets/cater5.jpg';
import cater6 from '../assets/cater6.jpg';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    
    <SelectsCard bg={cater1} />
    <SelectsCard bg={cater2}  />
    <SelectsCard bg={cater3}  />
    <SelectsCard bg={cater4} />
    <SelectsCard bg={cater5} />
    <SelectsCard bg={cater6}  /> 
     
        
    </div>
  )
}

export default Selects