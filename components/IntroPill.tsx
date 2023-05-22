import Link from 'next/link';
import React from 'react'
import { GiPublicSpeaker } from 'react-icons/gi'
import { IconType } from 'react-icons/lib';

type Props = {
    title: string;
    Icon: IconType;
    link?: any;
}

function IntroPill({ title, Icon, link }: Props) {
  return (
    <Link href={link}  className="p-6 flex items-center space-x-8 bg-white">
        <Icon className="h-20 w-20 text-[#7b7163]" />
        <span className="text-xl font-semibold text-[#4a4030]">{title}</span>
    </Link>
  )
}

export default IntroPill