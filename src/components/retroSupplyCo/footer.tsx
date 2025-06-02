import { PT_Sans } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const ptSans = PT_Sans({ subsets: ['latin'], weight: '400' }); // For navbar & labels

const Footer = () => {
  return (
    <div className="border-t-2 border-[#cbcac9] ">
      {/* Main footer content */}
      <div className="flex flex-wrap justify-between items-start px-10 md:px-40 py-10 gap-y-10">
        {/* Email Subscription */}
        <div className="w-full md:w-[270px] text-left">
          <p className={`${ptSans.className} text-[18.06px] font-extrabold mb-4`}>
            20% OFF YOUR FIRST ORDER
          </p>
          <p className="text-[16px] font-serif mb-6">
            Want exclusive offers and first access to products? Sign up for email alerts.
          </p>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full h-[40px] px-3 mb-4 border border-[#cbcac9] hover:border-[#2c2c2d] rounded-[4px] focus:outline-none"
          />
          <button
            className={`${ptSans.className} w-full h-[40px] bg-[#f26547] text-white text-[14px] rounded-[3px] hover:bg-[#e2573c] transition`}
          >
            SUBSCRIBE
          </button>
        </div>

        <div className='flex justify-between'>
{/* Product Links */}
        <div className="w-full md:w-[270px] text-left">
          <p className={`${ptSans.className} text-[18.06px] font-extrabold mb-4`}>
            PRODUCTS
          </p>
          <div className="grid gap-3">
            {[
              'Procreate',
              'Photoshop',
              'Illustrator',
              'Clip Studio Paint',
              'Affinity',
              'Fonts',
              'Guides & Video Training',
              'The Secret Society',
            ].map((label, idx) => (
              <Link
                key={idx}
                href="#"
                className="font-serif text-[#f26547] hover:text-black transition-all duration-300 ease-in-out"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Links */}
        <div className="w-full md:w-[270px] text-left">
          <p className={`${ptSans.className} text-[18.06px] font-extrabold mb-4`}>
            ADDITIONAL LINKS
          </p>
          <div className="grid gap-3">
            {[
              'Refer a Friend',
              'Terms of Service',
              'License',
              'Guarantee',
              'Help Center',
              'Privacy Policy',
              'Become an Affiliate',
              'Contact',
            ].map((label, idx) => (
              <Link
                key={idx}
                href="#"
                className="font-serif text-[#f26547] hover:text-black transition-all duration-300 ease-in-out"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-b border-gray-200 w-[80%] mx-auto"></div>

      {/* Bottom footer bar */}
      <div className="px-10 md:px-40 py-6 gap-4">
        <select className="w-[130px] h-[36px] rounded-xl border border-[#f26547] text-[#f26547] px-2 focus:outline-none">
          <option>PKR Rs</option>
          <option>USD $</option>
          <option>EUR €</option>
          <option>GBP £</option>
        </select>
        <p className="text-[16px] font-light mt-3">
          © 2025
          <Link
            href="#"
            className={`font-serif ml-1 hover:underline hover:underline-offset-2 hover:text-[#f26547] duration-300`}
          >
            RetroSupply Co.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
