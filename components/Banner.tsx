import React from 'react'
import Bg from '../public/bg.jpg'
import Image from 'next/image'
import { BsArrowRightCircle } from 'react-icons/bs'
function Banner() {
  return (
    <div className={`w-full h-[20rem] md:h-[35rem] `}>
      <div className="relative h-full w-full">
        <Image src={Bg} alt="" className="absolute left-0 w-full h-full object-cover"/>
        <div className="relative py-10 px-4 md:p-0 md:mx-auto h-full w-full md:max-w-6xl grid place-content-center">
          <div className="absolute left-[50%] -translate-x-[50%] md:translate-x-0 md:right-10 px-4 py-4 md:p-6 w-[95%] md:min-h-48 md:w-2/5 backdrop-blur-sm border-4 md:border-8 border-t-0 md:border-t-0 border-white/60 rounded-bl-3xl rounded-br-3xl bg-[#086ecd] bg-opacity-80">
            <h1 className="py-4 text-sm md:text-xl font-extrabold text-white">GOD IS THE SAME, YESTERDAY, TOMORROW AND FOREVER</h1>
            <button className="px-4 py-2 md:px-6 md:h-14 w-full rounded shadow-xl shadow-[#020a75]/30 bg-slate-100 text-slate-900 flex items-center space-x-2 md:space-x-4">
              <span className="text-xs md:text-base text-[#020a75] font-extrabold">SOW A SEED FOR YOUR</span>
              <BsArrowRightCircle className="h-4 w-4 md:h-6 md:w-6 text-[#020a75]"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner