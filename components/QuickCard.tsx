import React from 'react'
import IntroPill from './IntroPill'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'
import { GoCalendar } from 'react-icons/go'
import { HiOutlineDocumentCheck } from 'react-icons/hi2'
import { FcDonate } from 'react-icons/fc'
import { VscOrganization } from 'react-icons/vsc'
import { BsCardChecklist } from 'react-icons/bs'
import { MdOutlineRememberMe } from 'react-icons/md'
import { BiDonateHeart } from 'react-icons/bi'

function QuickCard() {
  return (
    <div className="p-3 md:p-8 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 bg-slate-100">
        <IntroPill title="Become a Member" Icon={MdOutlineRememberMe} link="/register" />
        <IntroPill title="Festive Calendar" Icon={GoCalendar}  link="/calendar" />
        <IntroPill title="Our Projects" Icon={AiOutlineFundProjectionScreen}  link="/projects" />
        <IntroPill title="Make a Donation" Icon={BiDonateHeart}  link="/donate" />
        {/* <div className="col-span-2 p-6 flex items-center space-x-8 bg-white">
            <span>News Publications</span>
        </div> */}
    </div>
  )
}

export default QuickCard