import React from 'react'
import Bg from '../public/bg.jpg'
import Image from 'next/image'
import { BsArrowRightCircle } from 'react-icons/bs'
function Banner() {
  return (
    <div className={`w-full md:h-[35rem] `}>
      <div className="relative h-full w-full">
        <Image src={Bg} alt="" className="absolute left-0 w-full h-full object-cover"/>
        <div className="relative py-10 px-4 md:p-0 md:mx-auto h-full w-full md:max-w-6xl grid place-content-center">
          <div className="absolute right-10 p-6 min-h-48 w-2/5 backdrop-blur-sm  border-8 border-t-0 border-white/60 rounded-bl-3xl rounded-br-3xl bg-[#086ecd] bg-opacity-60">
            <h1 className="py-4 md:w-1/2 text-lg md:text-xl font-bugee font-extrabold text-white">2023 CALENDAR FOR THE FESTIVE SEASON</h1>
            <button className="px-4 py-2 md:px-6 md:h-14 md:min-w-md rounded shadow-xl shadow-orange-500/30 bg-slate-100 text-slate-900 flex items-center space-x-2 md:space-x-4">
              <span className="text-xs md:text-inherit">Visit us @ dana-Kumasi</span>
              <BsArrowRightCircle className="h-4 w-4 md:h-6 md:w-6"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner