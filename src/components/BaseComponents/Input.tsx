import React from 'react'

const Input = () => {
  return (
    <div>
      <div className='w-1/2 bg-blue-100 rounded '>
      <input placeholder='Search' className='w-full outline-none border-none bg-transparent text-base p-3 rounded-xl' type="search" name="search" id="search"/>
      </div>
    </div>
  )
}

export default Input