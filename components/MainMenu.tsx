import React from 'react'
import NavPill from './NavPill'
import { fetchMenus } from '@/utils/api';

async function MainMenu() {
  const menus = await fetchMenus();
   
  return (
    <nav className="hidden md:flex items-center space-x-10">
        { menus?.map((menu:any) => 
          menu.link 
          ? (<NavPill key={menu.title} title={menu.title?.toUpperCase()} link={menu.link} /> )
          : (<NavPill key={menu.title} title={menu.title?.toUpperCase()} link={menu.link} subMenu={menu.submenus}/>))}
    </nav>
  )
}

export default MainMenu