import Image from 'next/image'
import React from 'react'
import Logo from '../public/logo.png'
import Link from 'next/link'
import FootSection from './FootSection'
import Socials from './Socials'
import FootSocials from './FootSocials'
import { sanityClient }  from '../sanity'

const fetchSetting = async () => {
   const query = `*[_type == "setting"][0]{site_name,site_desc,site_footnote,link,mainmenu[]->{ title,link }}`
   const data = await sanityClient.fetch(query)
   return data;
}

async function Footer() {
  const setting = await fetchSetting();
  console.log(setting)
  return (
    <footer className="w-full">
      <section className="w-full md:h-96 bg-[#153B50E8] text-white">
         <div className="py-6 px-3 md:mx-auto h-full w-full md:max-w-6xl md:grid md:grid-cols-4 md:gap-x-20 md:place-items-center">
             <div className="md:col-span-1 flex flex-col items-center justify-center space-y-4 md:space-y-10">
                {/* <Image src={Logo} alt="" className="h-20 w-20 object-contain" /> */}
                <h3 className="text-sm md:text-xl uppercase text-center font-serif">{setting.site_name}</h3>
                <p className="text-[0.75rem] text-center font-medium">{setting.site_desc}</p>
             </div>
             <div className="pt-6 col-span-2 md:w-4/5 hidden md:grid md:grid-cols-2 gap-24">
                 <FootSection 
                    heading="Additional Links" 
                    links={
                     [
                      { title:'FAQ', link:'/faq'},
                      { title:'Festive Calendar', link:'/calendar'},
                     ]
                    } 
                 />
                 <FootSection 
                    heading="Miscellaneous" 
                    links={
                     [
                      { title:'Home', link:'/faq'},
                      { title:'About Us', link:'/voting'},
                      { title:'Contact Us', link:'/opinion'},
                      { title:'Events', link:'/events'},
                      { title:'Press Releases', link:'/press'},
                     ]
                    } 
                 />
             </div>
             <div className="pt-20 md:col-span-1 md:place-self-start">
                <FootSocials heading="Connect With Us" links={{ facebook:setting.facebookUrl,twitter:setting.twitterUrl,instagram:setting.instagramUrl,youtube:setting.youtubeUrl}} />
             </div>
         </div>
      </section>
      <section className="w-full md:h-14 bg-[#153b50] flex items-center">
         <div className="py-3 mx-3 md:py-0 md:mx-auto w-full md:max-w-6xl flex items-center">
            <p className="text-[0.65rem] text-white">© Copyright {new Date().getFullYear()} | {setting.site_name} | All Rights Reserved.</p>
         </div>
      </section>
   </footer>
  )
}

export default Footer