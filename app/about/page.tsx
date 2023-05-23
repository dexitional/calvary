import { useState } from "react"
import Image from 'next/image'
import Logo from '../public/logo.png'
import { GiVote } from 'react-icons/gi';


export default function Home() {

  return (
    <main className="py-10 px-4 md:py-14  md:mx-auto w-full md:max-w-6xl space-y-6">
        <h1 className="font-bold text-lg md:text-2xl">PAGE TITLE</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus sapiente dolor asperiores deleniti ullam consequuntur incidunt. Sed, omnis necessitatibus excepturi harum dolores repellendus voluptatum quaerat dolorum cupiditate et, quam repudiandae!</p>
    </main>
  )
}
