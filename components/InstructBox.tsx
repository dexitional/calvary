import Image from 'next/image'
import React from 'react'
import Logo from '../public/logo.png'
import { BsArrowRightCircle } from 'react-icons/bs'

function InstructBox() {
  return (
    <div className="z-1 relative w-full h-72 overflow-hidden">
        <Image src={Logo} alt="BG" className="z-10 absolute h-96 object-contain opacity-30" />
        <div className="z-20 absolute h-full w-full flex flex-col items-center justify-center space-y-4 bg-blue-950/95 text-white"></div>
        <div className="z-30 h-full flex flex-col items-center justify-center">
          <span className="z-40 text-center text-sm text-white font-semibold"> <br/><span className="text-3xl font-extrabold border-white bg-gradient-to-r from-white via-green-50 to-white bg-clip-text text-transparent">HEALING</span></span>
          <p className="my-4 z-40 text-white">We cherish all moments about you</p>
        </div>
    </div>
  )
}

export default InstructBox