'use client'

import React, { useState } from 'react'
import { Montserrat, Solway } from 'next/font/google'
import Image from 'next/image'
import { RiEyeCloseLine } from 'react-icons/ri'

const text = Montserrat({ subsets: ['latin'], weight: '400' })
const varela = Solway({ subsets: ['latin'], weight: '700' })

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#4a2389] bg-[url('/bg-image.svg')] px-4 py-10">
      {/* Logo */}
      <div className="w-full flex justify-start max-w-7xl mb-20 -ml-52 -mt-20">
        <Image src="/logo.png" alt="Learning A-Z Logo" width={150} height={150} />
      </div>

      <div className="flex md:flex-row w-full max-w-7xl">
        {/* Left Box */}
        <div className="bg-white shadow-xl p-12 -ml-10 rounded-3xl w-full max-w-lg ">
          <h2 className={`${varela.className} text-[#2c3a84] text-[28px] font-bold mb-6`}>
            Member Login
          </h2>
          <form>
            <div className="mb-4">
              <label className={`${text.className} block text-[16px] text-[#000000]`} htmlFor="username">
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your username"
                className="w-full h-[56px] mt-1 px-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a1c9c]"
              />
            </div>

            <div className="mb-4 relative">
              <label className={`${text.className} block text-[16px] text-[#000000]`} htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full h-[56px] mt-1 px-3 pr-10 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4a1c9c]"
              />
              <div
                className="absolute right-3 bottom-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <Image
                    src="https://accounts.learninga-z.com/ng/assets/Visible.png"
                    alt="eye open"
                    height={20}
                    width={20}
                    className="h-[20px] w-[20px]"
                  />
                ) : (
                  <RiEyeCloseLine size={20} className="text-gray-400" />
                )}
              </div>
            </div>

            <div className="mb-4 flex items-center gap-2">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember" className={`${text.className} text-md text-gray-700`}>
                Remember Me
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-[48px] bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 rounded-3xl transition duration-200"
            >
              LOG IN
            </button>
          </form>

          <div className={`${text.className} mt-6 text-lg font-extralight text-[#2c3a84] space-y-2 text-center`}>
            <p className="underline cursor-pointer">Forgot your username?</p>
            <p className="underline cursor-pointer">Forgot your password?</p>
          </div>
        </div>

        {/* Right Box */}
        <div className="hidden md:flex flex-col justify-center items-center text-white text-center ml-10 mt-10">
          <p className={`${text.className} text-lg font-semibold`}>Don&apos;t have a Learning A-Z account?</p>
          <button className={`${text.className} w-[300px] border-2 border-white px-8 py-2 rounded-full font-bold hover:bg-white/35 hover:text-white hover:opacity-80 transition duration-200 mt-4`}>
            ORDER NOW
          </button>

          <div className="flex gap-14 mt-6 items-end">
            <Image
              src="/bear.png"
              alt="Bear in ship"
              width={231}
              height={208}
              className="w-[231px] h-[208px] mt-20"
            />
            <Image
              src="/astronaut.png"
              alt="Astronaut"
              width={231}
              height={208}
              className="w-[231px] h-[208px] mb-6 ml-20 -mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
