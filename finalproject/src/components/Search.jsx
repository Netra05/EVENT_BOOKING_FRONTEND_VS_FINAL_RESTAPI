import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>Welcome to iDO Events – Your Gateway to Memorable Experiences!</h2>
          <p className='py-4'>
          We are a passionate team of event enthusiasts, tech wizards, and customer-centric professionals. 
          Our diverse backgrounds and collective expertise in event management, technology, and customer service enable us to create a platform that revolutionizes the way events are organized, booked, and enjoyed.
          Our vision is to empower people to create unforgettable moments and experiences.
           We envision a world where everyone can easily access and book the perfect venue, entertainment, catering, and more for any occasion, whether it's a birthday party, wedding, corporate conference, or community event.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>Expert Guidance</h3>
                <p className='py-1'>From venue selection to logistics, we've got your back every step of the way.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>Diverse Options</h3>
                <p className='py-1'>We provide you endless Choices for Every Occasion. Discover Your Perfect Event with Us.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center'>
              <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
              <p className='py-4'>12 HOURS LEFT</p>
              <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Venue</label>
                  <select className='border rounded-md p-2'>
                      <option>Wiilow Lawn</option>
                      <option>Garden Park</option>
                      <option>KeyWest</option>
                      <option>Cozumel</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Book-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Book-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Rates & Availabilities</button>
          </form>
      </div>
    </div>
  );
};

export default Search;
