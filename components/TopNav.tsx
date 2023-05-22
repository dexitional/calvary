import React from 'react'
import TopNavPill from './TopNavPill'
import { MdMail, MdPhone } from 'react-icons/md'
import Socials from './Socials'

function TopNav() {
  return (
    <div className="w-full bg-[#153B50]">
        <div className="mx-auto px-4 w-full md:max-w-6xl h-12 md:h-14 flex flex-col md:flex-row items-center justify-center md:justify-between text-white">
           <div className="hidden md:flex flex-col md:flex-row space-x-12">
               <div className="text-xs font-medium">Transparency. Fairness. Integrity</div>
               <div className="flex items-center flex-col md:flex-row space-x-16">
                  <TopNavPill title="btswamidisciple@gmail.com" Icon={MdMail} />
                  <TopNavPill title="+233 (0) 30 000 0000" Icon={MdPhone} />
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