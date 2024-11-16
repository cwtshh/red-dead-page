import React from 'react'
import hosea from '../../../assets/characters/hosea_2.png'

const Rosea = () => {
  return (
    <div className="bg-[url('src/assets/bg/char_bg.jpg')] bg-cover bg-[0_100%] flex items-center justify-center h-full">
        
        <div className='mt-[40em] ml-8 text-white flex flex-col gap-10'>
            <h1 className='font-bold text-8xl'>Hosea Matthews</h1>
            <p className='text-3xl'>"I wish I had acquired wisdom at less of a price."</p>
            <p className='text-4xl'>
                A master con artist, gentleman and thief, Hosea has been Dutch's closest friend and right-hand man for over twenty years. Intelligent and quick-witted, he can talk his way into, or out of, just about anything.
            </p>
        </div>

        <div className='w-[135.2em]'>
            <img src={hosea} className=' ' />
        </div>
    </div>
  )
}

export default Rosea