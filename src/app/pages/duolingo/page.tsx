'use client';

import { Varela_Round } from 'next/font/google';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { IoIosCloseCircle } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { RiFacebookFill } from 'react-icons/ri';

const text = Varela_Round({ subsets: ["latin"], weight: "400" });

const Page = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputPassword, setInputpassword] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const clearInput = () => {
        setInputValue('');
        inputRef.current?.focus();
    };



    return (
        <div className='w-full h-screen '>
            <div className={`${text.className} flex justify-center text-[#494848] ml-10`}>
                <IoClose size={25} className='w-[30px] h-[30px] text-[#5b5a5ada] mt-8 ' />
                <button className={`${text.className} flex ml-[90%] mt-8 mr-8 text-[#1cb0f6] h-[48.4px] w-[96.225px] border-2 hover:border-2 border-[#e5e5e5] hover:border-[#c8c7c7da] border-b-4 hover:border-b-4 rounded-2xl hover:bg-[#c3c3c360]`}>
                    <p style={{ fontWeight: 800 }} className={`${text.className} text-[15px] text-center mx-auto my-auto`}>SIGN UP</p>
                </button>
            </div>
            <div className="w-[371.8px] mx-auto flex flex-col items-center justify-center mt-10">
                <h1 className={`${text.className} text-[24px] text-center text-[#3c3c3c]`} style={{ fontWeight: 900 }}>
                    Log in
                </h1>

                <div className="relative mt-7">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Email or username"
                        value={inputValue}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => setInputValue(e.target.value)}
                        className={`${text.className} h-[48px] w-[371.8px] text-[20px] text-[#313131] bg-[#f7f7f7] border-2 border-[#e5e5e5] focus:outline-none p-2 focus:border-[#1cb0f6] rounded-xl`}
                    />

                    {isFocused && (
                        <IoIosCloseCircle
                            size={25}
                            onClick={clearInput}
                            className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
                        />
                    )}
                </div>
                <div className="relative mt-5">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Password"
                        value={inputPassword}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChange={(e) => setInputpassword(e.target.value)}
                        className={`${text.className} h-[48px] w-[371.8px] text-[20px] text-[#313131] bg-[#f7f7f7] border-2 border-[#e5e5e5] focus:outline-none p-2 focus:border-[#1cb0f6] rounded-xl`}
                    />

                    <Link style={{ fontWeight: 1000 }} href={"/pages/duolingo/forgot-password"} className={`${text.className} absolute top-1/2 right-3 -translate-y-1/2 text-[15px] text-gray-400 font-bold`}>
                        FORGOT?
                    </Link>
                </div>
                <button style={{ fontWeight: 600 }} className={`${text.className} mt-5 h-[48px] w-[371.8px] bg-[#1cb0f6] text-white text-[15px] font-bold rounded-xl border-b-4 border-[#1899d6] hover:bg-[#4cc2f9] transition-colors duration-300`}>
                    LOG IN
                </button>
                <div className='flex justify-between gap-3 h-[44px] w-[371.8px]'>
                    <span className='w-full h-full border-b-4 border-[#e5e5e5] -mt-3'></span>
                    <p style={{ fontWeight: 600 }} className={`${text.className} mt-5 text-[15px] text-[#aeadad]`}>OR</p>
                    <span className='w-full h-full border-b-4 border-[#e5e5e5] -mt-3'></span>
                </div>
                <div className='mt-5 flex gap-4'>
                    <button className={`${text.className} flex text-center items-center pl-5 text-[#3b5998] h-[48.4px] w-[180.8px] border-2 hover:border-2 border-[#e5e5e5] hover:border-[#c8c7c7da] border-b-4 hover:border-b-4 rounded-2xl hover:bg-[#c3c3c360]`}>
                        <RiFacebookFill size={25} className='inline-block mr-1' />
                        <p style={{ fontWeight: 800 }} className={`${text.className} text-[15px]`}>FACEBOOK</p>
                    </button>
                    <button className={`${text.className} flex text-center items-center pl-5 text-blue-500 h-[48.4px] w-[180.8px] border-2 hover:border-2 border-[#e5e5e5] hover:border-[#c8c7c7da] border-b-4 hover:border-b-4 rounded-2xl hover:bg-[#c3c3c360]`}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-[20px] w-[20px] mr-1">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                            <path fill="none" d="M0 0h48v48H0z"></path>
                        </svg>
                        <p style={{ fontWeight: 800 }} className={`${text.className} text-[16px]`}>GOOGLE</p>
                    </button>
                </div>
                <p style={{ fontWeight: 500 }} className={`${text.className} text-[14px] text-[#afafaf] mt-7 text-center`}>By signing in to Duolingo, you agree to our <b>Terms</b> and <b>Privacy Policy</b>.</p>
                <p style={{ fontWeight: 500 }} className={`${text.className} text-[14px] text-[#afafaf] mt-5 text-center`}>This site is protected by reCAPTCHA Enterprise and the Google <b>Privacy Policy </b>and <b>Terms of Service</b> apply.</p>
            </div>
        </div>
    );
};

export default Page;
