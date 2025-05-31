import { PT_Sans } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const ptSans = PT_Sans({ subsets: ['latin'], weight: '400' }) // Use this for navbar font

const Footer = () => {
    return (
        <div>
            <div className='flex justify-between items-center text-center px-20 h-[483.469px] w-full border-t-2 border-[#cbcac9]'>
            <div className='h-[375.469px] w-[270px]'>
                <p style={{ fontWeight: 800 }} className={`${ptSans.className} text-[18.06px] mb-[16px]`}>20% OFF YOUR FIRST ORDER</p>
                <p className='text-[16px] font-serif mb-[24px]'>Want exclusive offers and first access to products? Sign up for email alerts.</p>
                <input type='email' placeholder='Enter your email address' className='w-full h-[40px] px-[10px] mb-[16px] border-[1px] border-[#cbcac9] hover:border-[#2c2c2d] rounded-[3.5px]' />
                <button className={`${ptSans.className} w-full h-[40px] bg-[#f26547] rounded-[2px] text-[14px] text-white font-light`}>SUBSCRIBE</button>
            </div>
            <div className='flex justify-between'>
                <div className='h-[375.469px] w-[270px] mt-[24px]'>
                    <p style={{ fontWeight: 800 }} className={`${ptSans.className} text-[18.06px] mb-[16px] text-left`}>PRODUCTS</p>
                    <div className='grid grid-cols-1 text-left gap-3'>
                        {['Procreate', 'Photoshop', 'Illustrator', 'Clip Studio Paint', 'Affinity', 'Fonts', 'Guides & Video Training', 'The Secret Society'].map((label, index) => (
                            <Link
                                key={index}
                                href="#"
                                className={`font-serif text-[#f26547] font-extralight hover:text-black hover:underline hover:underline-offset-4`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='h-[375.469px] w-[270px] mt-[24px]'>
                    <p style={{ fontWeight: 800 }} className={`${ptSans.className} text-[18.06px] mb-[16px] text-left`}>ADDITIONAL LINKS</p>
                    <div className='grid grid-cols-1 text-left gap-3'>
                        {['Refer a Friend', 'Terms of Service', 'License', 'Guarantee', 'Help Center', 'Privacy Policy', 'Become an Affiliate', 'Contact'].map((label, index) => (
                            <Link
                                key={index}
                                href="#"
                                className={`font-serif text-[#f26547] hover:text-black`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>


            </div>
        </div>
                <span className="border-b border-gray-200 w-full"></span>
                <div className='grid h-[100px] items-center px-20'>
                    <select className='w-[86.7812px] h-[36px] rounded-xl border-[1px] border-[#f26547] focus:border-[#f26547] text-[#f26547]'>
                        <option>PKR Rs</option>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                    <Link href={"#"} className='text-[16px] mb-3 font-bold hover:underline hover:underline-offset-2 hover:text-[#f26547] duration-700 '>© 2025 RetroSupply Co.</Link>
                </div>
        </div>
    )
}

export default Footer
