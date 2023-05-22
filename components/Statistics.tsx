import React from 'react'
import StatPill from './StatPill'
import { FaRegFlag, FaVoteYea } from 'react-icons/fa'
import { GiVote } from 'react-icons/gi'
import { BsPersonVcard } from 'react-icons/bs'
import { BiCalendarEvent } from 'react-icons/bi'

function Statistics() {
  return (
    <div className="w-full bg-[#16c193]">
        <div className="mx-auto px-6 h-24 w-full max-w-6xl grid grid-cols-4 gap-10 place-content-center">
            <StatPill title="SUNDAY SERVICE" value="8:30 AM" Icon={BiCalendarEvent} />
            <StatPill title="VOTING STATIONS" value="33,000" Icon={GiVote} />
            <StatPill title="POLITICAL PARTIES" value="33,000" Icon={FaRegFlag} />
            <StatPill title="REGISTERED VOTERS" value="33,000" Icon={BsPersonVcard} />
        </div>
    </div>
  )
}

export default Statistics