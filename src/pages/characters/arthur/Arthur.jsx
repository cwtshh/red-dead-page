import React from 'react'
import arthur from '../../../assets/characters/arthur.png'

const Arthur = () => {
  return (
    <div className="bg-[url('src/assets/bg/char_bg.jpg')] bg-cover bg-[0_100%] flex items-center justify-center h-full">
        
        <div className='mt-[40em] ml-8 text-white flex flex-col gap-10'>
            <h1 className='font-bold text-8xl'>Arthur Morgan</h1>
            <p className='text-3xl'>"We're thieves in a world that don't want us no more."</p>
            <p className='text-4xl'>
            Dutch's most dependable and capable enforcer since he was a boy, the outlaw life is all Arthur has ever known. Sharp, cool-headed, and ruthless, but with his own sense of honor. A man who gets the job done.
            </p>
        </div>

        <div className='w-[135.2em]'>
            <img src={arthur} className='' />
        </div>
    </div>
  )
}

export default Arthur