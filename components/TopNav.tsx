import React from 'react'
import TopNavPill from './TopNavPill'
import { MdLocationOn, MdMail, MdPhone } from 'react-icons/md'
import Socials from './Socials'
import { FaMarker } from 'react-icons/fa'

function TopNav() {
  return (
    <div className="w-full bg-[#020a75]">
        <div className="mx-auto px-4 w-full md:max-w-6xl h-10 md:h-12 flex flex-col md:flex-row items-center justify-center md:justify-between text-white">
           <div className="hidden md:flex flex-col md:flex-row space-x-12">
               <div className="text-xs font-medium">The Prayer City | Worship with Us !</div>
               <div className="flex items-center flex-col md:flex-row space-x-6">
                  <TopNavPill title="crcdaban@gmail.com" Icon={MdMail} />
                  <TopNavPill title="+233 (0) 55 803 6694" Icon={MdPhone} />
                  <TopNavPill title="Daban-Kumasi, Ghana" Icon={MdLocationOn} />
               </div>
           </div>
           <div className="md:pr-8">
               <Socials />
           </div>
        </div>
    </div>
  )
}

export default TopNav