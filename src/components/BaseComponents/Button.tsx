import React, {MouseEventHandler} from 'react'

const Button = ({text, onClick}:{text:string, onClick?:MouseEventHandler}) => {
  return (
    <button onClick={onClick} className='px-8 py-4 bg-purple-600 rounded-xl text-white font-bold '>{text}</button>
  )
}


export const OutLinedButton = ({text, onClick}:{text:string, onClick?:MouseEventHandler}) =>{
  return (
    <button onClick={onClick} className='px-4 py-2 bg-transparent rounded-xl text-black font-bold border-solid border-2 border-black-100'>{text}</button>
  )
}

export default Button