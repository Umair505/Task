'use client';

import React from 'react';
import Image from 'next/image';
import { Download, CreditCard, Wallet } from 'lucide-react'; // icons
import manImg from '../../public/images/man.jpg';

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
<div className="mb-10 grid grid-cols-1 md:grid-cols-2 items-center">
  <div className="text-center md:text-left">
    <p className="text-sm font-semibold text-indigo-700 mb-2">HOW IT WORKS</p>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Make payments, transfers, and <br className="hidden md:block" /> more in 3 simple steps
    </h2>
  </div>

  <div className="flex justify-center md:justify-end mt-4 md:mt-0">
    <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-4 cursor-pointer px-5 rounded-full transition">
      Get Started Now
    </button>
  </div>
</div>


        <div className="bg-white rounded-2xl shadow-sm p-8 grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 mb-10">
      
     

     {/* Step 1 */}
<div className="relative px-6 py-10">
  <span className="absolute text-[80px] font-extrabold text-gray-100 -top-4 left-4 select-none -z-0">
    01
  </span>
  <div className="relative z-10">
    <Download className="w-10 h-10 text-blue-600 mb-4" />
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">
      Download Easy Pay
    </h3>
    <p className="text-sm text-gray-500 leading-relaxed">
      Get the Easy Pay app today from the App Store or Google Play hassle free.
    </p>
  </div>
</div>

{/* Step 2 */}
<div className="relative px-6 py-10">
  <span className="absolute text-[80px] font-extrabold text-gray-100 -top-4 left-4 select-none -z-0">
    02
  </span>
  <div className="relative z-10">
    <CreditCard className="w-10 h-10 text-blue-600 mb-4" />
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">
      Link your bank or card
    </h3>
    <p className="text-sm text-gray-500 leading-relaxed">
      Easily connect your account in seconds with advanced security for peace of mind.
    </p>
  </div>
</div>

{/* Step 3 */}
<div className="relative px-6 py-10">
  <span className="absolute text-[80px] font-extrabold text-gray-100 -top-4 left-4 select-none -z-0">
    03
  </span>
  <div className="relative z-10">
    <Wallet className="w-10 h-10 text-blue-600 mb-4" />
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">
      Start paying
    </h3>
    <p className="text-sm text-gray-500 leading-relaxed">
      Easily split bills, send money to friends, and make smooth online payments instantly.
    </p>
  </div>
</div>


    </div>

        {/* Image Section */}
        <div className="rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={manImg}
            alt="man using laptop"
            className="w-[1170px] h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
