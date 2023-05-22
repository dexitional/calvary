import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { TfiArrowCircleRight } from 'react-icons/tfi'

function ECMessage() {
  return (
    <div className="py-4 px-6 md:p-10 w-full md:max-h-[35rem] col-span-1 bg-[#4a4030] text-white text-xs md:text-sm leading-6 flex flex-col justify-center space-y-6">
        <h1 className="text-xl md:text-2xl">Message From The His Holines</h1>
        <p>On behalf of the B.T SWAMI Disciples, I am pleased to welcome you to our website of a community in Ghana.</p>
        <p>This website offers the us a channel to communicate directly with you. We value this opportunity immensely. We invite you to browse through our content, share the links across your networks, and return to us with your suggestions, questions, and comments.</p>
        <button className="pr-6 py-2 flex items-center space-x-4 group">
          <span className="group-hover:text-black">READ MORE</span>
          <TfiArrowCircleRight className="h-6 w-6 transition group-hover:hidden" />
          <CgArrowLongRight className="h-6 w-7 hidden transition group-hover:duration-700 group-hover:delay-500 group-hover:text-black group-hover:flex" />
        </button>
    </div>
  )
}

export default ECMessage