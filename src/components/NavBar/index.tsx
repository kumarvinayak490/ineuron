import React, {useContext} from 'react'
import Button from '../BaseComponents/Button'
import Input from '../BaseComponents/Input'
import { CurrUserContext } from '../../App'


const NavBar = () => {
  const {setCurrUser, setOpenModel}= useContext(CurrUserContext)
  return (
    <div className=' h-full flex items-center justify-between px-8 '>
        <div className='flex-1'>
            <Input/>
        </div>
        <div className='justify-self-start'>
            <Button onClick={()=>{
              setCurrUser(null)
              setOpenModel(true)
            }}  text={"Add User"}/>
        </div>
    </div>
  )
}

export default NavBar