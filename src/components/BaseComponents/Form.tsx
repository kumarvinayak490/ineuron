import React, {useState, ChangeEventHandler, useContext, useMemo, useEffect} from 'react'
import Button from './Button'
import { useAddUserMutation, useUpdateUserMutation } from '../../services/userApi'
import { CurrUserContext } from '../../App'
import { Person } from '../../models/user.model'


const Form = () => {
  const { currUser, setOpenModel } =  useContext(CurrUserContext)
  let [addUser]=useAddUserMutation()
  let [updateUser] = useUpdateUserMutation()
  let initialState = {
    firstName:"",
    lastName:"",
    phoneNumber:"",
    age:0,
  } as Person
  useEffect(()=>{
    if(currUser){
      setState(currUser)
    }
  },[currUser])
  const [state, setState] = useState<Person>(initialState)
  const handleChange = (e:React.SyntheticEvent)=>{
    e.preventDefault();
      let value = (e.target as HTMLInputElement).value
      let name = (e.target as HTMLInputElement).name
      setState({...state, [name]:value})
  }

  const submitHandler = async(e:React.SyntheticEvent)=>{
      e.preventDefault()

      if(currUser){
        
          await updateUser(state)
      }else{
        
        await addUser(state)
      }

      setOpenModel(false)
  }

  return (
    <div className='w-full rounded'>
      <form className='w-full flex  flex-wrap bg-blue-500 p-8 rounded'>
        <FormInput onChange={handleChange} id="first_name" value={state.firstName}  name="firstName" type="text" label='First Name'/>
        <FormInput onChange={handleChange} id="last_name" value={state.lastName} name="lastName" type="text" label='Last Name'/>
        <FormInput onChange={handleChange} id="age" name="age" value={state.age} type="number" label='Age'/>
        <FormInput onChange={handleChange} id="phone_number" value={state.phoneNumber} name="phoneNumber" type="string" label='Phone Number'/>
        <div className='flex justify-center w-full mt-8'><Button onClick={submitHandler} text="Submit"/></div>
      </form>
    </div>
  )
}

export default Form

const FormInput = ({id,onChange,  type, name, label, value}:{id:string,value:string | number, type:string, name:string, label:string, onChange:ChangeEventHandler})=>{
  return <div className='w-1/2 flex flex-col p-2 '>
  <label className='p-2 text-white' htmlFor='first_name'>{label}</label>
  <input value={value} onChange={onChange} className='mt-2 p-2 bg-blue-100' type={type} name={name} id={id}/>
</div>
}