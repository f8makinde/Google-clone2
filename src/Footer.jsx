import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#F2F2F2] px-6 text-[#70757A]'>
        <div className='border-b py-3 border-[#70757A]/30'>Nigeria</div>
      
        <div className='flex justify-between'>
            <div className='flex gap-3'>
                <p>About</p>
                <p>Advertising</p>
                <p>Business</p>
                <p>How Search works</p>
            </div>
            
                <p>Carbon neutral since 2007</p>
        
            <div className='flex gap-3'>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
