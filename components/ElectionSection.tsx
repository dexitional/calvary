import React from 'react'
import IntroVideoBox from './IntroVideoBox'
import EligibilityBox from './EligibilityBox'
import InstructBox from './InstructBox'
import Logo from '../public/bg.jpg'
import Image from 'next/image'

function ElectionSection() {
  return (
    <div className="pt-64 relative bg-white w-full">
        {/* <div className="py-10 flex flex-col items-center justify-center space-y-1">
            <h1 className="text-3xl font-medium tracking-widest">Every Vote Counts.</h1>
            <h2 className="text-xl font-medium">Take the Next Step Forward and Check Eligibility!</h2>
        </div> */}
        <div className="absolute -top-20 left-[50%] -translate-x-[50%] rounded-xl mx-auto w-4/5 grid grid-cols-3 overflow-hidden">
            <IntroVideoBox />
            <EligibilityBox />
            <InstructBox />
        </div>
        <div className="mb-6 mx-auto w-4/5 grid grid-cols-3 gap-x-14 rounded ">
            <div className="relative h-80 w-96 bg-red-100 col-span-1">
               <Image src={Logo} alt={`Leader`} className="object-cover" fill />
            </div>
            <article className="px-6 col-span-2 flex flex-col justify-center space-y-4 border-2 border-[#020a75]">
                <h1 className="text-slate-800 font-semibold text-3xl">Welcome to the Calvary Redemption Chapel !!</h1>
                <div className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit non eveniet ea cumque. Numquam provident soluta porro possimus impedit aperiam quas alias accusantium illo nam? Ipsam ratione ducimus dolor.
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, minus necessitatibus voluptatum cupiditate quaerat architecto cumque? Animi atque, ratione esse ea magnam facere, asperiores deserunt modi, obcaecati laudantium nihil voluptatibus.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis non omnis eos accusamus reiciendis eius quibusdam dolor, excepturi odio consectetur eveniet error architecto minus quisquam unde quas ullam saepe nisi?
                </div>
            </article>
        </div>
    </div>
  )
}

export default ElectionSection