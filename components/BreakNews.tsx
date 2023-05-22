import Link from 'next/link'
import React from 'react'
import { fetchNews } from '@/utils/api';


async function BreakNews() {
  //const news = await fetchNews();
  const news:any = []
  return (
    <div className="w-full bg-[#086ecd]">
        <div className="mx-auto px-2 md:px-6 w-full h-8 md:h-14 md:max-w-6xl flex space-x-1 divide-x-4 md:divide-x-8 divide-white/20">
            <div className="px-2 w-fit md:w-48 h-full flex items-center text-white text-xs md:text-inherit font-semibold border-r-4 md:border-r-8 border-red-900/40"><span className="mr-2 hidden md:flex">LATEST</span> NEWS</div>
            <div className="flex-1 h-full flex items-center">
              {/* @ts-ignore */}
              <marquee loop="false" scrollamount="2" behavior="sliding" className="text-xs md:text-sm text-slate-100 flex items-center space-x-20" >
                { news?.map((row: any) => (
                  <Link key={row._id} href={`/${row?.slug?.current }`}>
                    <span>{row.title?.toUpperCase()}</span>
                  </Link>
                  ))
                }
              {/* @ts-ignore */}
              </marquee>
            </div>
        </div>
    </div>
    
  )
}

export default BreakNews