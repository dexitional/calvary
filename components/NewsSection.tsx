import React from 'react'
import NewsPill from './NewsPill'

type Props = {}

function NewsSection({}: Props) {
  return (
    <div className="w-full bg-white font-poppins bg-pattern">
        <div className="py-4 md:py-10 mx-auto w-full max-w-6xl">
        <h1 className="my-4 text-xl md:text-3xl text-center font-bold">News</h1>
        <div className="px-4 grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-y-0 md:gap-x-2">
            <NewsPill />
            <NewsPill />
            <NewsPill />
            <NewsPill />
        </div>
        </div>
    </div>
  )
}

export default NewsSection