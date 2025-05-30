'use client';
import { Outfit, Roboto } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const text = Outfit({ subsets: ['latin'], weight: ['400'] });
const font = Roboto({ subsets: ['latin'] });

const Page = () => {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const isValidEmail = (email: string) => {
        // Simple email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleContinue = () => {
        if (isValidEmail(email)) {
            router.push('/pages/gimkit/password'); // Replace with your route
        }
    };

    return (
        <div className="relative bg-[url('/imagePattern.png')] bg-repeat min-h-screen">
            <div className="absolute inset-0 bg-[#000003] opacity-70 z-0" />

            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="h-[343.636px] w-[520px] bg-[#ffffff] shadow-lg rounded-lg px-5 py-3">
                    <div className="h-[70.8px] w-full border-b-2 border-gray-100 flex items-center px-4">
                        <Image src="/svgLogo.svg" alt="gimkit" height={42} width={168.812} className="mx-auto" />
                    </div>

                    <button className="h-[42.6px] w-[200.762px] flex items-center justify-evenly mx-auto border-2 border-[#d9d9d9] rounded-[6px] shadow-lg shadow-[rgba(0,0,0,0.02)] mt-[21px] transition duration-300 hover:bg-gray-100 hover:border-gray-300">
                        <Image src="https://www.gimkit.com/client/img/signup/google.svg" alt="Google icon" height={18} width={18} />
                        <p className={`${text.className} text-[14px]`}>Continue with Google</p>
                    </button>

                    <div className="flex items-center justify-center mt-5 mb-5">
                        <span className="border-b border-gray-200 w-1/2"></span>
                        <p className={`font-sans text-[16px] font-semibold mx-3`}>or</p>
                        <span className="border-b border-gray-200 w-1/2"></span>
                    </div>

                    <div>
                        <h1 style={{ fontWeight: 800 }} className={`${font.className} text-[18px]`}>Continue with email...</h1>
                        <input
                            type="email"
                            placeholder="Email Address..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-[39.6px] w-[480px] px-4 rounded-lg focus:outline-none border-[1px] mt-1 hover:border-[#1677ff] focus:shadow-sm focus:shadow-[#1677ff] focus:border-[#1677ff]"
                        />
                    </div>

                    <button
                        onClick={handleContinue}
                        disabled={!isValidEmail(email)}
                        className={`
              h-[38px] w-[480px] text-center rounded-lg mt-2 border-2 transition
              ${isValidEmail(email) ? 'bg-[#1677ff] text-white hover:opacity-80 cursor-pointer' : 'bg-[#ecebeb] text-gray-500 cursor-not-allowed'}
            `}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
