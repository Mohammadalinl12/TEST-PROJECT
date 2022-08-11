import React from 'react'
import {HiArrowNarrowLeft} from 'react-icons/hi'
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='text-pink-600 text-5xl'>سلام</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'> من محمدعلی نعلبندی هستم</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>من یک فول استک دولوپر هستم</h2>
        <p className='text-[#8892b0] py-7 text-3xl max-w-[700px]'>من در حال حاظر رو ساخت سایت رسپانسیو فول استک تمرکز دارم</p>
        <div>
          
          <button  className='group text-white border-2 px-6 py-3 my-2  flex items-center hover:bg-pink-600 hover:border-pink-600'>
            <Link to="work" smooth={true} duration={500}>
              رزومه
            </Link>           
             <span className='group-hover:rotate-90 duration-300'>
            < HiArrowNarrowLeft className='mr-3'/>
              </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home