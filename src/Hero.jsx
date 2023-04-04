import React, { useState } from 'react'
import googlePics from './assets/googleImg.png'
import BtnProps from './BtnProps'
import LangProps from './LangProps'
const Hero = () => {
    const [text, setText] = useState('')
    // const [frm, setFrm] = useState('')
    function handleSubmit (event) {
      event.preventDefault()
    //   console.log(text)
  setText({text})

    setText('')
 
    }
   
  return (
    <div className='h-full py-20'>
    <div className='flex flex-col items-center justify-center my-52'>
      <img src={googlePics} alt='google-img' />
      <div className='flex justify-center py-2 rounded-3xl border'>

   <form onSubmit={handleSubmit} className='flex items-center'><input type='text' className='px-48 outline-none' value={text} 
   onChange={(e) =>setText(e.target.value)}/>
      <svg className="goxjub w-8 mr-6"focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg>
 
      <h1>{text}</h1>
     </form>

      </div>
          <div>
      <h1 className='text-black'>{text}</h1>
      </div>
      <div className='flex gap-3 py-4'>
      <BtnProps btn='Google Search' type='submit'/>
      <BtnProps btn="I'm Feeling Lucky" />
      
      </div>
      <div className='flex gap-2'>
      <span className='text-[14px]'>Google offered in:</span>
        <LangProps lang='Hausa'/>
        <LangProps lang='Igbo'/>
        <LangProps lang='Ede Yoruba'/>
        <LangProps lang='Nigerian Pidgin'/>
      </div>
    </div>
    
    </div>

  )
}

export default Hero
