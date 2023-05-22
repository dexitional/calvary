import React from 'react'
import StatPill from './StatPill'
import { FaRegFlag, FaVoteYea } from 'react-icons/fa'
import { GiAudioCassette, GiVote } from 'react-icons/gi'
import { BsPersonVcard } from 'react-icons/bs'
import { BiCalendarEvent } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'

function Statistics() {
  return (
    <div className="w-full bg-[#086ecd]">
        <div className="mx-auto py-6 md:py-0 px-6 md:h-24 w-full max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10 place-content-center divide md:divide-y-0 divide-y-2 divide-dashed divide-opacity-30">
            <StatPill title="SUNDAY SERVICE" value="8:30 AM" Icon={BiCalendarEvent} />
            <StatPill title="WEDNESDAY SERVICE" value="8:00 PM" Icon={BiCalendarEvent} />
            <StatPill title="DAILY PODCAST" value="8:00 PM" Icon={GiAudioCassette} />
            <StatPill title="WORSHIP DESTINATION" value="Daban - Ksi" Icon={MdLocationOn} />
        </div>
    </div>
  )
}

export default Statistics