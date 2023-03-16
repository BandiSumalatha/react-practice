import React, { useState } from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import Shop2Icon from '@mui/icons-material/Shop2';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import { NavLink } from 'react-router-dom';
const Sidebar = ({children}) => {

    const [isOpen,setOpen]=useState(false)

const toggole=()=>{
    setOpen(!isOpen)
}
    const menuItem=[
         {
            path:"/",
            name:"Home",
            icon:<HomeIcon/>
         },
         {
            path:"/Dashboard",
            name:"Dashboard",
            icon:<DashboardIcon/>
         },
        
         {
            path:"/myorder",
            name:"myorder",
            icon:<Shop2Icon/>
         },
         {
            path:"/myschedule",
            name:"myschedule",
            icon:<ScheduleIcon/>
         },
         {
            path:"/logout",
            name:"Logout",
            icon:<LogoutIcon/>
         },
    ]
  return (
    <div className='container'>
    <div className={isOpen ? "sidebar":"sidenav"} >
        <div className='top-section'>
            <div className='bars'>
                <MenuIcon onClick={toggole} style={{cursor:"pointer"}}/>
            </div>
            <h1 className='logo'>Logo</h1>
        </div>
        {
        menuItem.map((item,index)=>(
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
                <div className='icon'>{item.icon}</div>
                {
                    isOpen ? <div className='link-text'>{item.name}</div>:null
                }
                
            </NavLink>

        ))
    }
   
    </div>
    <main>{children}</main>
    </div>
  )
}

export default Sidebar