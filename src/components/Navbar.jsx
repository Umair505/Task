"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../../public/images/logo.png'
import Link from 'next/link'

const MenuIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>;

const XIcon = ({
  className
}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Feature" },
    { href: "/", label: "Pricing" },
    { href: "/", label: "Security" },
    { href: "/", label: "Benefits" }
  ];

  return (
    <nav className="w-full  sticky top-0 z-50 mt-8 border-gray-200 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src={logo} 
                alt="Easy Pay" 
                width={40}
                height={100}
                className=" object-contain"
                priority
              />
              <span className="text-xl font-bold">Easy Pay</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-lg font-medium hover:text-blue-600 transition duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Contact Button & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Desktop Contact Button */}
            <button className="hidden md:inline-flex cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-3xl hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-300" 
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-lg font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="w-full mt-2 text-center cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-3xl hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}