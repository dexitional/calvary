import React from 'react'
import UpcomingPill from './UpcomingPill'
import moment from 'moment'
import { fetchEvents } from '@/utils/api';

async function UpcomingSection() {
  const events = await fetchEvents();

  return (
    <div className="bg-white">
        <div className="py-10 flex flex-col items-center justify-center space-y-1">
            <h1 className="text-3xl font-medium tracking-widest">Events</h1>
        </div>
        <div className="px-3 pb-3 md:pb-6 md:px-6 w-full grid md:grid-cols-4 gap-2 md:gap-6">
          { events?.map((row: any) => (
              <UpcomingPill key={row._id} link={`/${row?.slug?.current }`} title={row.title?.toUpperCase()} date={moment(row._createdAt).format('MMM DD, YYYY')} />
            ))
          }
        </div>
    </div>
  )
}

export default UpcomingSection