import Image from 'next/image'
import React from 'react'
import Logo from '../public/logo.png'


type Props = {}

function NewsPill({}: Props) {
  return (
    <div className="col-span-1 bg-slate-50/50 space-y-4 shadow-lg shadow-[#020a75]/10">
        <div className="relative h-36 md:h-64 w-full">
            <Image src={Logo} alt="" className="object-cover" fill />
        </div>
        <div className="px-4 py-6 space-y-4">
            <h1 className="text-[0.94rem] font-extrabold text-gray-800">Ghost (Nonexistent) Projects Listed By Rev.Dr. Amoah ’s Delivery Tracker As Achievements</h1>
            <div className="font-inter uppercase tracking-widest text-xs">AUGUST 24, 2020</div>
            <p className="text-sm md:text-base">lorem160 is coming to school at …</p>
            <div className="px-4 py-2 w-fit bg-[#020a75] text-sm text-white font-semibold">Read More</div>
        </div>
    </div>
  )
}

export default NewsPill