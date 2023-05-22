import React from 'react'
import NavPill from './NavPill'
import { fetchMenus } from '@/utils/api';

async function MainMenu() {
  // const menus = await fetchMenus();
  const menus:any = [
     { title: 'Home', link: '', subMenu: null },
     { title: 'About Us', link: '', subMenu: [ { title: 'Our Family', link: '' },{ title: 'Calvary Bible School', link: '' }] },
     { title: 'Leadership', link: '', subMenu: [ { title: 'Our Founders', link: '' },{ title: 'Executive Council', link: '' }] },
     { title: 'Our Locations', link: '', subMenu: null },
     { title: 'News Media', link: '', subMenu: [ { title: 'News', link: '' },{ title: 'Daily Devotional 2023', link: '' },{ title: 'Gallery', link: '' } ] },
     { title: 'Podcast', link: '', subMenu: null },
     { title: 'Give', link: '', subMenu: null },
     { title: 'Contact Us', link: '', subMenu: null },
  ]

  return (
    <nav className="hidden md:flex items-center space-x-6 tracking-wider">
        { menus?.map((menu:any) => 
          menu.link 
          ? (<NavPill key={menu.title} title={menu.title?.toUpperCase()} link={menu.link} /> )
          : (<NavPill key={menu.title} title={menu.title?.toUpperCase()} link={menu.link} subMenu={menu.submenus}/>))}
    </nav>
  )
}

export default MainMenu