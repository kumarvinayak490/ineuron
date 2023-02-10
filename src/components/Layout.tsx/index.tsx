import React, { ReactNode } from 'react'
import SideBar from '../Sidebar'
import NavBar from '../NavBar'

const Layout = ({children} : {children :ReactNode}) => {
  return (
    <div className='grid grid-cols-12 h-screen p-4  '>
        {/* Side Bar */}
        <div className=' col-span-3'>
             <SideBar/>
        </div>
        <div className='col-span-9 flex flex-col'>
        <div className='h-[25%]'>
        <NavBar/>
        </div>
        <div className='h-[70%] bg-white-100 shadow-xl'>
        {children}
        </div>
        </div>
    </div>
  )
}

export default Layout