import React from 'react'
import dutch from '../../../assets/characters/dutch.png'

const Dutch = () => {
  return (
    <div className="bg-[url('src/assets/bg/char_bg.jpg')] bg-cover bg-[0_100%] flex items-center justify-center h-full">
        
        <div className='mt-[40em] ml-8 text-white flex flex-col gap-10'>
            <h1 className='font-bold text-8xl'>Dutch Van Der Linde</h1>
            <p className='text-3xl'>"They're chasing us hard, because we represent everything that they fear."</p>
            <p className='text-4xl'>
                The leader of a sizeable gang of outlaws and misfits. Idealistic, anarchic, charismatic, well-read, well-lived, but possibly starting to unravel under the pressures of the encroaching modern world.
            </p>
        </div>

        <div className='w-[135.2em]'>
            <img src={dutch} className='' />
        </div>
    </div>
  )
}

export default Dutch