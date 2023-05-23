import React from 'react'
import Logo from '../public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import NavPill from './NavPill';
import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';

function Navigation() {
  return (
    <div className="z-10 w-full shadow-xl shadow-black/20 text-gray-800">
        <div className="p-2 md:px-6 lg:mx-auto w-full sm:max-w-6xl md:h-[5.8rem] flex items-center justify-between space-x-8">
            <Link href="/" className="relative w-48 ">
                <Image src={Logo} alt="Logo" className="object-contain" />
            </Link>
            {/* <div className="py-1 px-2 md:rounded border-2 border-gray-700 flex flex-col md:-skew-x-12">
                <span className="justify-items-end text-[0.5rem] md:text-[0.6rem] text-orange-700 font-arial font-extrabold tracking-[0.2em]">HIS HOLINESS</span>
                <span className="text-base md:text-[1.35rem] text-black font-extrabold tracking-[0.28em]">B.T SWAMI</span>
                <span className="text-[0.4rem] md:text-[0.5rem] font-extrabold tracking-[0.18em]">DISCIPLES & WELL-WISHERS</span>
            </div> */}
            {/* @ts-ignore */}
            <MainMenu />
            <MobileMenu />

        </div>
    </div>
  )
}

export default Navigation