'use client';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react'; // Make sure to install lucide-react if not yet
import Link from 'next/link';

const font = Roboto({ subsets: ['latin'], weight: ['900'] });

const Page = () => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const isValidPassword = (password: string) => password.length >= 1;

    const handleContinue = () => {
        if (isValidPassword(password)) {
            router.push('/pages/gimkit/home'); // Adjust route
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

                    <p className={`${font.className} font-sans text-[24px] mt-10 font-extrabold`}>Enter your password</p>
                    
                    <div className="relative mt-1">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="h-[39.6px] w-[480px] px-4 pr-10 rounded-lg focus:outline-none border-[1px] hover:border-[#1677ff] focus:shadow-sm focus:shadow-[#1677ff] focus:border-[#1677ff]"
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>

                    <button
                        onClick={handleContinue}
                        disabled={!isValidPassword(password)}
                        className={`
                            h-[38px] w-[480px] text-center rounded-lg mt-2 border-2 transition
                            ${isValidPassword(password) ? 'bg-[#1677ff] text-white hover:opacity-80 cursor-pointer' : 'bg-[#ecebeb] text-gray-500 cursor-not-allowed'}
                        `}
                    >
                        Login
                    </button>


                    <span className="block border-b-2 border-gray-200 w-full h-[5px] mt-10"></span>
                    <div className="mt-4">
                        <Link href="/pages/gimkit" className="text-sm font-semibold hover:underline">
                            Forgot password?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
