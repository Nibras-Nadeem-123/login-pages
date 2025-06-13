// app/page.tsx or pages/index.tsx depending on your Next.js structure

import Link from 'next/link'
import React from 'react'

const providers = [
  { name: 'Google', href: '/pages/google/sign-in' },
  { name: 'Duolingo', href: '/pages/duolingo' },
  { name: 'Learning A-Z', href: '/pages/learninga-z' },
  { name: 'Retro Supply Co', href: '/pages/retroSupplyCo' },
]

const HomePage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-slate-100 to-slate-200">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-12 text-center">
        Welcome to My App
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        {providers.map((provider) => (
          <Link
            key={provider.name}
            href={provider.href}
            className="bg-slate-800 text-white text-center py-3 px-4 rounded-lg shadow hover:bg-slate-700 transition duration-200"
          >
            Sign in with {provider.name}
          </Link>
        ))}
      </div>
    </main>
  )
}

export default HomePage
