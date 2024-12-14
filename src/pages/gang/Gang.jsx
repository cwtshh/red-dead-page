import React, { useState } from 'react'
import MegaScroll from 'react-mega-scroll'
import Arthur from '../characters/arthur/Arthur'
import John from '../characters/john/John'
import Dutch from '../characters/dutch/Dutch'
import Rosea from '../characters/rosea/Rosea'
import vanderlind_gang from '../../assets/bg/vanderlind_gang.jpg'

const Gang = () => {      
  return (
    <div className="w-screen h-screen object-fill animate-ease-in-page">
      
      <MegaScroll>

        <div style={{
          backgroundImage: `url(${vanderlind_gang})`
          }} 
          className={`bg-cover bg-[0_100%] flex flex-col items-center justify-center h-full`}>
          <h1 className="text-8xl text-white">Van Der Linde Gang</h1>
        </div>

        <Arthur />
        <John />
        <Dutch />
        <Rosea />
      </MegaScroll>

    </div>
  )
}

export default Gang