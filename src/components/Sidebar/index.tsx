import React from 'react'
import Container from '../BaseComponents/Container'

const SideBar = () => {
  return (
    <Container className='h-full' >
    <div className=' h-full rounded-xl bg-gradient-to-r from-cyan-800 to-blue-800 w-full py-12 shadow-2xl'>
        <ul>
            <li className='bg-purple-500 tracking-wider p-2 rounded text-center font-bold text-white text-sky-400 mx-12 cursor-pointer '>
                DashBoard
            </li>
            <li className='bg-purple-500 tracking-wider p-2 rounded text-center font-bold text-white mx-12 mt-8 cursor-pointer '>
                User
            </li>
        </ul>
    </div>
    </Container>
  )
}

export default SideBar