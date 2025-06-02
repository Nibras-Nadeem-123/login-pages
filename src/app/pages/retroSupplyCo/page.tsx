'use client';

import Footer from '@/components/retroSupplyCo/footer';
import Header from '@/components/retroSupplyCo/header';
import { Poppins, PT_Sans } from 'next/font/google';
import Link from 'next/link';
import React, { useState } from 'react';


const poppins = Poppins({ subsets: ['latin'], weight: '500' });
const ptSans = PT_Sans({ subsets: ['latin'], weight: '700' }); // For navbar and form labels

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [success, setSuccess] = useState('');

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid.';
    if (!password) newErrors.password = 'Password is required.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess('');
    } else {
      // Mock success
      setErrors({});
      setSuccess('Logged in successfully!');
      // You can replace this with actual API login logic
      console.log('Email:', email, 'Password:', password);
    }
  };

  return (
    <div>
      <Header />
      <div className="max-w-[505.125px] w-full mx-auto my-14 px-4">
        <h1 style={{ fontWeight: 800 }} className={`${poppins.className} text-[28px] font-semibold text-center`}>
          LOGIN
        </h1>

        {success && (
          <div className="text-green-600 font-medium mt-4 text-center">{success}</div>
        )}

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Email Field */}
          <label htmlFor="email" className={`${ptSans.className} text-[17px] mt-6 block`}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[49.8px] border border-[#4d4d4d66] focus:border-black focus:outline-none pl-4"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

          {/* Password Field */}
          <label htmlFor="password" className={`${ptSans.className} text-[17px] mt-6 block`}>
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[49.8px] border border-[#4d4d4d66] focus:border-black focus:outline-none pl-4"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}

          {/* Forgot Password */}
          <Link
            href="/"
            style={{ fontWeight: 100 }}
            className={`${ptSans.className} block font-extralight mt-4 text-[14.875px] text-[#f26447] hover:text-[#3b3b3b] transition-all duration-300 ease-in-out`}
          >
            Forgot your password?
          </Link>


          {/* Login Button */}
          <button
            type="submit"
            className={`${poppins.className} w-full h-[49.8px] bg-[#f26447] text-white text-[17px] font-semibold mt-6 rounded-[4px] transition-all duration-300 ease-in-out hover:bg-[#f25847] hover:shadow-lg `}
          >
            LOGIN
          </button>
        </form>

        {/* Create Account */}
        <Link
          href="/signup"
          className="block mt-10 font-serif text-[17px] text-[#f26447] underline underline-offset-8 text-center hover:text-[#3b3b3b] transition-all duration-300 ease-in-out"
        >
          Create an account
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
