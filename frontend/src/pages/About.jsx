import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='border px-8 md:px-4 py-6 sm:py-2 rounded-xl text-center text-2xl text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
        
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12 justify-center items-center'>
        <img className='w-full md:max-w-[380px] rounded-xl' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 text-justify'>
          <p>Welcome to Doc o'clock where, we're committed to make healthcare easier for you. Our mission is to connect you with trusted healthcare professionals who are ready to provide the best care you need. Whether you're looking for a routine check-up or specialized treatment, our platform is designed to offer you a seamless and stress-free experience. We believe in putting patients first, and that's why we've built a platform that makes it easy to browse, compare, and book appointments with just a few clicks.</p>
          <p><b>Your Health, Our Priority</b> We understand that your time and health are valuable, which is why we've worked hard to create a space where you can effortlessly find the right healthcare provider. From finding the perfect doctor to scheduling your appointment at your convenience, Doc O'Clock is here to support you every step of the way. With a team of dedicated professionals and an easy-to-use interface, we're committed to helping you manage your healthcare needs, so you can focus on what matters most: your well-being.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Our vision is to create a world where healthcare is accessible, convenient, and tailored to your needs. At Doc o'clock, we want to be your go-to partner in health, offering a platform where you can easily connect with doctors, explore a wide range of specialties, and make informed decisions about your care. We're committed to making healthcare a more positive, patient-centered experience, empowering individuals to take control of their health and well-being, one appointment at a time.</p>
        </div>
      </div>

      <hr />
      <div className='text-xl my-4 text-center'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20 gap-3 text-center'>

        <div className='border px-8 md:px-8 py-6 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all text-gray-600 cursor-pointer rounded-xl duration-500'>
          <b className='text-lg'>Expertise</b>
          <p>We connect you with qualified and experienced doctors, ensuring top-quality care for all your health needs.</p>
        </div>
          
        <div className='border px-8 md:px-8 py-6 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all text-gray-600 cursor-pointer rounded-xl duration-500'>
          <b className='text-lg'>Convenience</b>
          <p>Our platform offers an easy-to-use interface, allowing you to book appointments in just a few clicks without any hassle.</p>
        </div>

        <div className='border px-8 md:px-8 py-6 sm:py-8 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all text-gray-600 cursor-pointer rounded-xl duration-500'>
          <b className='text-lg'>Personalization</b>
          <p>We tailor our services to meet your specific needs, offering a wide range of specialties to ensure the best care for you.</p>
        </div>
      </div>
    </div>
  )
}

export default About