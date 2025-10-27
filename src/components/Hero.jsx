import Image from 'next/image'
import React from 'react'
import vector from '../../public/images/Vector.png'
import heroImg from '../../public/images/hero.png'
import PlayAppleStore from '../../public/images/app.png'
import avatar from '../../public/images/Avatars.png'

export default function Hero() {
  return (
    <div className='max-w-7xl mb-5 mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 lg:gap-0'>
        {/* Left Content Section */}
        <div className='flex flex-col gap-4 sm:gap-6 justify-center order-2 lg:order-1 md:order-1'>
          <p className='text-base sm:text-lg font-semibold text-[#787878]'>Easy Payment</p>
          <div>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>Pay fast and smarter</h1>
            <Image 
              src={vector} 
              className="ml-0 sm:ml-20 lg:ml-30 w-full sm:w-[400px] lg:w-[480px] h-auto" 
              alt="Hero Image" 
            />
          </div>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold'>from anywhere</h1>
          <p className='text-sm sm:text-base text-gray-600'>
            Experience the future of payments: fast, secure, and tailored for the next generation's convenience and trust.
          </p>
          <div className='w-full sm:w-auto'>
            <Image 
  src={PlayAppleStore} 
  alt="Play Store Image" 
  className='w-full max-w-[300px] sm:max-w-[250px] lg:max-w-[300px]'
/>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center items-center w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-0 order-1 lg:order-2 md:order-2">
          <Image
            src={heroImg}
            alt="Hero Illustration"
            className="w-full sm:w-[700px] lg:w-[950px] max-w-none h-auto object-contain"
            priority
          />

          {/* Payment Received Card */}
          <div
            className="absolute bottom-[40px] sm:bottom-[70px] left-[10px] sm:left-[30px] lg:left-[50px] bg-white rounded-xl shadow-lg p-3 sm:p-4 w-[180px] sm:w-[220px] py-6 sm:py-8 flex flex-col gap-1"
            style={{
              boxShadow: "-16px 20px 30px rgba(46, 104, 253, 0.3)",
            }}
          >
            <p className="text-gray-800 font-semibold text-sm sm:text-base">Payment Received</p>
            <p className="text-blue-600 text-lg sm:text-xl font-bold">+35,890.00</p>
            <div className="flex justify-between text-[10px] sm:text-xs text-gray-400">
              <span>9th Jan, 2024</span>
              <span className="text-green-500 font-semibold">3.09% ↑</span>
            </div>
          </div>

          {/* Active Users Card */}
          <div className="absolute top-[250px] sm:top-[270px] lg:top-[290px] right-[-20px] sm:right-[-50px] lg:right-[-115px] bg-white rounded-xl shadow-md flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 w-[160px] sm:w-[180px] lg:w-[200px]">
            <Image
              src={avatar}
              alt="Active Users"
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <div>
              <p className="text-xs sm:text-sm font-bold">120K+</p>
              <p className="text-gray-500 text-[10px] sm:text-xs">Active users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}