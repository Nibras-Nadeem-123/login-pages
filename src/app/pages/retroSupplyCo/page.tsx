import Footer from '@/components/retroSupplyCo/footer'
import Header from '@/components/retroSupplyCo/header'
import { PT_Sans } from 'next/font/google'
import React from 'react'

const ptSans = PT_Sans({ subsets: ['latin'], weight: '700' }) // Use this for navbar font

const page = () => {
  return (
    <div>
      <Header />
      <div className='h-[429.594px] my-20 w-[424.891px] mx-auto'>
        <h1 style={{fontWeight: 900}} className={`${ptSans.className} text-[28px] font-extrabold text-center`}>LOGIN</h1>
        <p className={`${ptSans.className} text-[17px] mt-10`}>Email</p>
        <input type='email' placeholder='' className='w-[424.891px] h-[49.7969px] border-2 border-[#4d4d4d66]'/>
      </div>
      <Footer />
    </div>
  )
}

export default page
