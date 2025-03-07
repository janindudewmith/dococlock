import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* -------- Left Section -------- */}
        <div>
          <img className='mb-2 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Doc o'clock makes booking doctor appointments simple and efficient. Browse trusted professionals, explore specialties, and schedule your appointments with ease for a seamless healthcare experience.</p>
        </div>

        {/* -------- Center Section -------- */}
        <div>
          <p className='text-lg font-medium mb-3'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <Link to='/' onClick={scrollToTop} className='hover:text-blue-600'><li>Home</li></Link>
            <Link to='/about' onClick={scrollToTop} className='hover:text-blue-600'><li>About us</li></Link>
            <Link to='/contact' onClick={scrollToTop} className='hover:text-blue-600'><li>Contact us</li></Link>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* -------- Right Section -------- */}
        <div>
          <p className='text-lg font-medium mb-3'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+1-216-437-7682</li>
            <li>info@dococlock.com</li>
          </ul>
        </div>
      </div>

      {/* -------- Copright Text --------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Doc o'clock - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer