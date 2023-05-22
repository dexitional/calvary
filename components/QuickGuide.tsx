import React from 'react'
import ECMessage from './ECMessage'
import QuickCard from './QuickCard'

function QuickGuide() {
  return (
    <div className="py-2 md:py-14 w-full h-full bg-white grid grid-cols-1 md:grid-cols-3">
        <ECMessage />
        <QuickCard />
    </div>
  )
}

export default QuickGuide