import React, {ReactNode, MouseEventHandler} from 'react'
import ReactDom from "react-dom"

const Modal = ({children, open, onClose} : {children:ReactNode, open:boolean,onClose:MouseEventHandler }) => {
    const el = document.getElementById("portal") as Element
  return (
    <>
    {open ? ReactDom.createPortal(<>
      <div className='h-screen w-screen fixed  flex justify-center items-center backdrop-blur-sm   z-[100]'>
      <button className='absolute right-[100px] top-[100px] text-4xl font-bold  cursor-pointer' onClick={onClose}>X</button>
      <div className='z-[20] w-[50%]'>
        {children}
      </div>
    </div>
    </>,  el): null}
    </>
  )
}

export default Modal