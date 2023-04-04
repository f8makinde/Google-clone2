import React from 'react'

const BtnProps = ({btn}) => {
  return (
    <div className='flex'>
        <button className='flex bg-gray-100 rounded py-2 px-3 text-base'>{btn}</button>
    </div>
  )
}

export default BtnProps
