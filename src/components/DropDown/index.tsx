import React, {useState, useContext} from 'react'
import { OutLinedButton } from '../BaseComponents/Button'
import { CurrUserContext } from '../../App'
import { Person } from '../../models/user.model'
import { useDeleteUserMutation } from '../../services/userApi'


const DropDown = ({text, data}:{text:string, data:Person}) => {
  const {currUser, setCurrUser, openModel,setOpenModel} = useContext(CurrUserContext)
  const [open, setOpen] = useState(false)
  let [deleteUser] = useDeleteUserMutation()

  const handleEditClick = ()=>{
    setCurrUser(data)
    setOpenModel(true)
  }

  const handleDeleteClick = ()=>{
      deleteUser(data._id)
  }
  return (
    <div className='relative'>
        <OutLinedButton onClick={()=>setOpen(!open)} text={text}/>
        {
          open && (<ul className='z-10 grid grid-columns-1 divide-y absolute top-[50px] left[0] w-[120px] h-auto bg-black rounded-xl p-2 text-white'>
            <li onClick={()=>handleEditClick()} className='text-center p-2 cursor-pointer'>Edit</li>
            <li onClick={()=>handleDeleteClick()} className='text-center p-2 cursor-pointer'>Delete</li>
          </ul>)
        }
    </div>
  )
}

export default DropDown