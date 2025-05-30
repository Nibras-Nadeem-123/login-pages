/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import GoogleStyleInput from '@/components/input'
import { Roboto } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const text = Roboto({ subsets: ['latin'], weight: '400' })

const SignInPage = () => {
    const router = useRouter()
    const [showOptions, setShowOptions] = useState(false)

    const toggleDropdown = () => setShowOptions(!showOptions)

    const options = [
        { text: "Afrikaans" }, { text: "azərbaycan" }, { text: "bosanski" }, { text: "català" }, { text: "Čeština" }, { text: "Cymraeg" }, { text: "Dansk" }, { text: "Deutsch" }, { text: "eesti" }, { text: "English (United Kingdom)" }, { text: "English (United States)" }, { text: "Español (España)" }, { text: "Español (Latinoamérica)" }, { text: "euskara" }, { text: "Filipino" }, { text: "Français (Canada)" }, { text: "Français (France)" }, { text: "Gaeilge" }, { text: "galego" }, { text: "Hrvatski" }, { text: "Indonesia" }, { text: "isiZulu" }, { text: "íslenska" }, { text: "Italiano" }, { text: "Kiswahili" }, { text: "latviešu" }, { text: "lietuvių" }, { text: "magyar" }, { text: "Melayu" }, { text: "Nederlands" }, { text: "norsk" }, { text: "o‘zbek" }, { text: "polski" }, { text: "Português (Brasil)" }, { text: "Português (Portugal)" }, { text: "română" }, { text: "shqip" }, { text: "Slovenčina" }, { text: "slovenščina" }, { text: "srpski (latinica)" }, { text: "Suomi" }, { text: "Svenska" }, { text: "Tiếng Việt" }, { text: "Türkçe" }, { text: "Ελληνικά" }, { text: "беларуская" }, { text: "български" }, { text: "кыргызча" }, { text: "қазақ тілі" }, { text: "македонски" }, { text: "монгол" }, { text: "Русский" }, { text: "српски (ћирилица)" }, { text: "Українська" }, { text: "ქართული" }, { text: "հայերեն" }, { text: "עברית" }, { text: "اردو" }, { text: "العربية" }, { text: "فارسی" }, { text: "አማርኛ" }, { text: "नेपाली" }, { text: "मराठी" }, { text: "हिन्दी" }, { text: "অসমীয়া" }, { text: "বাংলা" }, { text: "ਪੰਜਾਬੀ" }, { text: "ગુજરાતી" }, { text: "ଓଡ଼ିଆ" }, { text: "தமிழ்" }, { text: "తెలుగు" }, { text: "ಕನ್ನಡ" }, { text: "മലയാളം" }, { text: "සිංහල" }, { text: "ไทย" }, { text: "ລາວ" }, { text: "မြန်မာ" }, { text: "ខ្មែរ" }, { text: "한국어" }, { text: "中文（香港）" }, { text: "日本語" }, { text: "简体中文" }, { text: "繁體中文" },
    ]
const handleNavigation = (path: string) => {

        router.push(path)
    }


    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f2f2f2] px-4">
            <div className="h-[402px] w-[1072.42px] flex justify-between mx-auto bg-white rounded-[28px] shadow-lg shadow-[#ebeff3] p-[36px]">
                <div className="flex flex-col gap-[18px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 40 48" aria-hidden="true">
                        <path fill="#4285F4" d="M39.2 24.45c0-1.55-.16-3.04-.43-4.45H20v8h10.73c-.45 2.53-1.86 4.68-4 6.11v5.05h6.5c3.78-3.48 5.97-8.62 5.97-14.71z"></path>
                        <path fill="#34A853" d="M20 44c5.4 0 9.92-1.79 13.24-4.84l-6.5-5.05C24.95 35.3 22.67 36 20 36c-5.19 0-9.59-3.51-11.15-8.23h-6.7v5.2C5.43 39.51 12.18 44 20 44z"></path>
                        <path fill="#FABB05" d="M8.85 27.77c-.4-1.19-.62-2.46-.62-3.77s.22-2.58.62-3.77v-5.2h-6.7C.78 17.73 0 20.77 0 24s.78 6.27 2.14 8.97l6.71-5.2z"></path>
                        <path fill="#E94235" d="M20 12c2.93 0 5.55 1.01 7.62 2.98l5.76-5.76C29.92 5.98 25.39 4 20 4 12.18 4 5.43 8.49 2.14 15.03l6.7 5.2C10.41 15.51 14.81 12 20 12z"></path>
                    </svg>
                    <h1 className={`${text.className} text-[#1f1f1f] text-[36px] font-semibold text-left`}>Sign in</h1>
                    <p className={`${text.className} text-[#1f1f1f] text-[16px] text-left`}>Use your Google Account</p>
                </div>

                <div className="h-[402px] w-[500px] flex flex-col justify-evenly">
                    <div className="mt-[28px] flex flex-col gap-2">
                        <GoogleStyleInput value={""} text={"Email or Phone"}/>
                        <Link
                            href="/pages/forgot-email"
                            className={`${text.className} w-fit h-[18.6px] my-auto px-1 rounded-[8px] text-[#0b57d0] text-left text-[14px] hover:bg-slate-100`}
                        >
                            Forgot email?
                        </Link>
                    </div>

                    <div className="text-left">
                        <p className={`${text.className} text-[14px] text-[#444746]`}>
                            Not your computer? Use Guest mode to sign in privately.
                        </p>
                        <Link href="" className={`${text.className} text-[15px] font-bold text-[#0b57d0] hover:underline`}>
                            Learn more about using Guest mode
                        </Link>
                    </div>

                    <div className="flex gap-7 h-[52px] ml-64 mb-5">
                        <button className="h-[38px] w-[133.05px] hover:bg-slate-100 rounded-full">
                            <p className={`${text.className} font-bold text-[14px] text-[#0b57d0]`} onClick={() => handleNavigation('/pages/google/for-myself')}>Create account</p>
                        </button>
                        {/* {showOptions && (
                            <div className="absolute grid grid-cols-1 gap-3 z-10 mt-10 w-[180.7px] h-[154px] bg-white shadow-md shadow-[#858484] rounded-3xl border border-gray-200">
                                <button className={`${text.className} w-full text-left text-[14px] focus:bg-slate-200 hover:bg-slate-100 px-[16px] py-2 rounded-t-3xl`}>
                                    <Link href={"/pages/for-myself"} className=' w-full h-full'>For myself</Link>
                                </button>
                                <button className={`${text.className} w-full text-left text-[14px] focus:bg-slate-200 hover:bg-slate-100 px-[16px] py-2`}>
                                    For my child
                                </button>
                                <button className={`${text.className} w-full text-left text-[14px] focus:bg-slate-200 hover:bg-slate-100 px-[16px] py-2 rounded-b-3xl`}>
                                    For work or business
                                </button>
                            </div>
                        )} */}
                        <button className="h-[38px] w-[78.45px] bg-[#0b57d0] hover:bg-[#0b39d0] hover:shadow transition-transform duration-700 hover:shadow-gray-400 rounded-full">
                            <p className={`${text.className} text-[14px] text-white`} onClick={() => handleNavigation('/pages/google/sign-in/password')}>Next</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="h-[50px] w-[1072.42px] flex justify-between mx-auto mt-5">
                <select className='w-[200px] h-[38px] p-3 bg-[#f2f2f2] text-[14px] hover:bg-[#e7e6e6] cursor-pointer focus:outline-none focus:border-2 focus:border-[#0b57d0] rounded-xl'>
                    {
                        options.map((opt, i) => {
                            return (
                                <option key={i}>{opt.text}</option>
                            )
                        })
                    }
                </select>
                <div className='flex gap-10 mr-5'>
                    <Link href={""}>Help</Link>
                    <Link href={""}>Privacy</Link>
                    <Link href={""}>Terms</Link>
                </div>
            </div>
        </div>
    )
}

export default SignInPage
