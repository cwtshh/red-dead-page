import React from 'react'
import john from '../../../assets/characters/john.png'
import char_bg from '../../../assets/bg/char_bg.jpg'

const John = () => {
  return (
    <div style={{ backgroundImage: `url(${char_bg})`}} className="bg-cover bg-[0_100%] flex items-center justify-center h-full">
        
        <div className='mt-[40em] ml-8 text-white flex flex-col gap-10'>
            <h1 className='font-bold text-8xl'>John Marston</h1>
            <p className='text-3xl'>"Guess about all I got left now is doubts. Doubts and scars."</p>
            <p className='text-4xl'>
                Once an orphaned street kid taken under Dutch's wing at the age of twelve, John has always had to live by his wits. Shrewd, fearless and strong-willed, he and Arthur are Dutch’s proudest protégés.
            </p>
        </div>

        <div className='w-[135.2em]'>
            <img src={john} className='' />
        </div>
    </div>
  )
}

export default John