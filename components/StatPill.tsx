import React from 'react'
import { IconType } from 'react-icons/lib';

type Props = {
    title: string;
    value: string;
    Icon: IconType
}

function StatPill({ title,value, Icon }: Props) {
  return (
    <div className="pt-6 md:pt-0 h-full flex items-center space-x-4 ">
    <Icon className="h-10 w-10 md:h-14 md:w-14 text-white" />
        <div className="flex flex-col md:space-y-2 font-medium text-white">
            <span className="text-lg md:text-3xl text-slate-50/30 md:text-white">{value}</span>
            <span className="text-xs tracking-widest font-semibold">{title}</span>
        </div>
    </div>
  )
}

export default StatPill