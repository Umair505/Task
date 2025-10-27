import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-purple-50 via-white to-white text-gray-800 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Side - Logo & Description */}
        <div className="md:w-2/5">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src={logo}
                alt="Easy Pay"
                width={40}
                height={100}
                className="object-contain"
                priority
              />
              <span className="text-xl font-bold">Easy Pay</span>
            </Link>
          </div>
          <p className="text-gray-600 leading-relaxed max-w-md">
            Easy Pay offers secure, seamless, and fee-free payments for
            effortless global transactions.
          </p>
        </div>

        {/* Right Side - Links */}
        <div className="md:w-3/5 flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24">
          {/* Short Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Short links
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Security
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Testimonial
                </a>
              </li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Other pages
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Terms & conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  404
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8">
        
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm">
        © 2025 <span className="font-medium text-gray-700">Easy Pay</span>. All
        rights reserved.{" "}
        <span className="text-gray-800 font-medium">Moinul</span>
      </div>
    </footer>
  );
};

export default Footer;
