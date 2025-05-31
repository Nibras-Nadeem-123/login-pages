import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='flex gap-20 justify-center text-center items-center my-auto mx-auto'>
      <button className='bg-slate-800 text-white py-2 px-3'>
        <Link href={"/pages/google/sign-in"}>
          Sign in with Google
        </Link>
      </button>
      <button className='bg-slate-800 text-white py-2 px-3'>
        <Link href={"/pages/duolingo"}>
          Sign in with Duolingo
        </Link>
      </button>
      <button className='bg-slate-800 text-white py-2 px-3'>
        <Link href={"/pages/learninga-z"}>
          Sign in with Learning A-Z
        </Link>
      </button>
      <button className='bg-slate-800 text-white py-2 px-3'>
        <Link href={"/pages/gimkit"}>
          Sign in with Gimkit
        </Link>
      </button>
      <button className='bg-slate-800 text-white py-2 px-3'>
        <Link href={"/pages/retroSupplyCo"}>
          Sign in with Retro Supply Co
        </Link>
      </button>
    </div>
  )
}

export default Page

