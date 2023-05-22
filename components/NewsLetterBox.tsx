import React from 'react'

function NewsLetterBox() {
  return (
    <div className="w-full min-h-fit bg-[#153b50]">
        <form className="md:mx-auto px-2 py-6 md:py-10 w-full md:max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-4 place-content-center text-white">
          <h1 className="px-4 w-full md:w-fit text-lg md:text-[1.65rem] font-serif text-center leading-1">Subscribe to our Newsletter</h1>
          <input type="text" placeholder="Name" className="h-12 w-full md:grid-flow-col rounded focus:ring-0 focus:outline-none text-gray-600" />
          <input type="email" placeholder="Email"className="h-12 md:grid-flow-col rounded focus:ring-0 focus:outline-none text-gray-600"  />
          <button type="submit" className="px-10 md:w-fit h-12 border border-white">SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox