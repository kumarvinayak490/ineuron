import React, {ReactNode, ReactElement, useContext} from 'react'
import { CurrUserContext } from '../../App'
import { Person } from '../../models/user.model'
import DropDown from '../DropDown'
import { OutLinedButton } from '../BaseComponents/Button'

const Table = ({data}:{data:Person[] | undefined})=> {
  
  return (
    <div className='px-4 rounded-xl  h-full'>
      <div className='relative  bg-blue-600 top-[-30px] p-6 rounded-xl z-[99]'><h1 className='font-bold text-white text-xl'>User Management</h1></div>
      <div className='grid grid-cols-1 divide-y gap-6 overflow-auto h-[88%]'>
        <ul className='flex justify-between'>
          <li className='text-[#7b809a] text-base font-bold flex-1 text-start'>First Name</li>
          <li className='text-[#7b809a] text-base font-bold flex-1 text-start'>Last </li>
          <li className='text-[#7b809a] text-base font-bold flex-1 text-start'>Age </li>
          <li className='text-[#7b809a] text-base font-bold flex-1 text-start'>Phone Number</li>
          <li className='text-[#7b809a] text-base font-bold flex-1 text-start'>Action</li>
        </ul>
          
        {
          data?.map((item)=>{
            return <ul className='flex justify-between pt-4'>
            <li className='text-[#171717] text-sm font-bold text-start flex-1'>{item.firstName}</li>
            <li className='text-[#171717] text-sm font-bold flex-1'>{item.lastName} </li>
            <li className='text-[#171717] text-sm font-bold flex-1'>{item.age}</li>
            <li className='text-[#171717] text-sm font-bold flex-1'>{item.phoneNumber}</li>
            <li className='text-[#171717] text-sm font-bold flex-1'><DropDown data={item}  text="Action"/></li>
          </ul>
          })
        }
      </div>
    </div>
  )
}



export default Table