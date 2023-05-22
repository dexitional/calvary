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
        <div className="mx-auto px-6 h-24 w-full max-w-6xl grid grid-cols-4 gap-10 place-content-center">
            <StatPill title="SUNDAY SERVICE" value="8:30 AM" Icon={BiCalendarEvent} />
            <StatPill title="WEDNESDAY SERVICE" value="8:00 PM" Icon={BiCalendarEvent} />
            <StatPill title="DAILY PODCAST" value="8:00 PM" Icon={GiAudioCassette} />
            <StatPill title="WORSHIP DESTINATION" value="Daban - Ksi" Icon={MdLocationOn} />
        </div>
    </div>
  )
}

export default Statistics