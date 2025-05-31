'use client'

import { Inter, PT_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ChevronDown } from 'lucide-react'
import { IoSearchOutline } from 'react-icons/io5'
import { RiUserLine } from 'react-icons/ri'
import { PiShoppingCartLight } from 'react-icons/pi'

const inter = Inter({ subsets: ['latin'] })
const ptSans = PT_Sans({ subsets: ['latin'], weight: '700' }) // Use this for navbar font

const Header = () => {
    const navbar = [
        {
            text: 'NEW',
            src: '/new',
        },
        {
            text: 'SHOP',
            src: '/shop',
            dropdown: [
                { text: 'Brushes', href: '/shop/brushes' },
                { text: 'Textures', href: '/shop/textures' },
                { text: 'Toolkits', href: '/shop/toolkits' },
            ],
        },
        {
            text: 'FONTS',
            src: '/font',
            dropdown: [
                { text: 'Serif Fonts', href: '/font/serif' },
                { text: 'Sans Fonts', href: '/font/sans' },
            ],
        },
        {
            text: 'BUNDLES',
            src: '/bundles',
            dropdown: [
                { text: 'Mega Bundle', href: '/bundles/mega' },
                { text: 'Starter Bundle', href: '/bundles/starter' },
            ],
        },
    ]

    return (
        <header>
            {/* Top banner */}
            <div className="flex justify-center text-center items-center gap-7 h-[52px] w-full bg-[#1e1e20]">
                <p className={`${inter.className} text-[#f2ca80]`}>
                    Get everything we&apos;ve ever made in-house. Save 50% for a limited time.
                </p>
                <button
                    type="button"
                    className={`${inter.className} h-[28px] w-[100px] bg-[#ffbb00] rounded-[3.5px] font-light text-[14px]`}
                >
                    Learn More
                </button>
            </div>

            {/* Nav bar */}
            <nav className="h-[121.875px] w-full border-b-2 border-[#cbcac9]">
                <div className='bg-[#eae6da] w-full items-center pl-[48px] '>
                    <div className="flex gap-3 items-center h-[38px] w-11/12 mx-auto">
                        {['Tutorials', 'Articles', 'Free Goods'].map((label, index) => (
                            <Link
                                key={index}
                                href="#"
                                className={`${ptSans.className} text-[#333] hover:text-[#f2ca80]`}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Logo & menu */}
                <main className="flex items-center h-[81.3056px] w-full px-[48px] relative z-50 bg-white mx-auto">
                    <Image
                        src="https://www.retrosupply.co/cdn/shop/files/RetroSupply-Logo-Black_192x32.png?v=1640114376"
                        alt="logo"
                        height={29}
                        width={175}
                        className="h-[29.3056px] w-[175px] ml-[65px]"
                    />
                    <div className="flex items-center gap-6 ml-[24px] relative h-[45.5972px] w-[725.208px] mx-auto text-center justify-center">
                        {navbar.map((item, index) =>
                            item.dropdown ? (
                                <div key={index} className="relative group">
                                    <button
                                        className={`flex items-center gap-1 ${ptSans.className} text-[14.4px] text-[#333] hover:text-[#f26447] hover:underline hover:underline-offset-8`}
                                    >
                                        {item.text}
                                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                                    </button>
                                    <div className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-200">
                                        {item.dropdown.map((drop, i) => (
                                            <Link
                                                key={i}
                                                href={drop.href}
                                                className="block px-4 py-2 text-[14.4px] text-[#333] hover:bg-[#f26447] hover:text-white"
                                            >
                                                {drop.text}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    key={index}
                                    href={item.src}
                                    className={`${ptSans.className} text-[14.4px] text-[#333] hover:text-[#f26447] hover:underline hover:underline-offset-8`}
                                >
                                    {item.text}
                                </Link>
                            )
                        )}
                    </div>

                    <div className='flex justify-evenly gap-8 items-center mr-10'>
                        <IoSearchOutline size={24} className='hover:text-[#f26447] hover:underline hover:underline-offset-8' />
                        <RiUserLine size={24} className='hover:text-[#f26447] hover:underline hover:underline-offset-8' />
                        <button className='flex items-center justify-center text-center gap-3 h-[48px] w-[116.136px] bg-[#f26447] rounded-[4px]'>
                            <PiShoppingCartLight size={24} />
                            <p className={`${ptSans.className} text-[17px]`}>0 CART</p>
                        </button>
                    </div>
                </main>

            </nav>
        </header>
    )
}

export default Header
