import React from 'react'
import Bg from '../public/bg1.jpg'
import Image from 'next/image'
import { BsArrowRightCircle } from 'react-icons/bs'
function Banner() {
  return (
    <div className={`w-full md:h-[24rem] bg-[url('../public/bg.avif')]`}>
      {/* <Image src={Bg} alt="" className="hidden absolute left-0 w-full h-full object-contain"/> */}
      <div className="relative py-10 px-4 md:p-0 md:mx-auto h-full w-full md:max-w-6xl grid place-content-center">
        <div className="">
          <h1 className="py-4 md:w-1/2 text-2xl md:text-5xl md:leading-[3.5rem] font-bugee font-extrabold border-orange-50  bg-gradient-to-r from-gray-700 via-orange-800 to-gray-800 bg-clip-text text-transparent">2023 CALENDAR FOR THE FESTIVE SEASON</h1>
          <button className="px-4 py-2 md:px-6 md:h-14 md:min-w-md rounded shadow-xl shadow-orange-500/30 bg-orange-900 text-orange-50 flex items-center space-x-2 md:space-x-4">
            <span className="text-xs md:text-inherit">KNOW MORE</span>
            <BsArrowRightCircle className="h-4 w-4 md:h-6 md:w-6"/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner