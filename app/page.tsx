import { useState } from "react"
import Statistics from "@/components/Statistics";
import Banner from "@/components/Banner";
import BreakNews from "@/components/BreakNews";
import QuickGuide from "@/components/QuickGuide";
import ElectionSection from "@/components/ElectionSection";
import EventSection from "@/components/EventSection";
import NewsLetterBox from "@/components/NewsLetterBox";
import UpcomingSection from "@/components/UpcomingSection";
import NewsSection from "@/components/NewsSection";

export default function Home() {

  return (
    <main className="w-full">
       <Banner />
       <ElectionSection />
       <Statistics />
       <NewsSection />
       
       {/* @ts-ignore */}
       {/* <BreakNews /> */}
       {/* <QuickGuide /> */}
       {/* <EventSection /> */}
       {/* @ts-ignore */}
       {/* <UpcomingSection /> */}
       {/* <NewsLetterBox /> */}
    </main>
  )
}
