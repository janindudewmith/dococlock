import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/* -------- Left Side -------- */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
          Book Appointments <br /> With Trusted Doctors</p>

        <div className='flex flex-col md:flex-row items-center gap-3 text-white font-light mt-6'>
          <img className='w-28' src={assets.group_profiles} alt="" />
          <p className='text-sm md:text-base'>Simply browse through our extensive list of expert professionals, <br className='hidden sm:block' /> schedule your appointments hassle-free.</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-grey-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 mt-4'>Book appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
      </div>

      {/* -------- Right Side -------- */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header