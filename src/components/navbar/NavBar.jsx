import React from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='fixed top-0 left-0 w-full z-50 bg-transparent p-4 h-36'>
      <div className='flex gap-5 items-center'>
        <img src={logo} className='h-28' />
        <div className='flex w-full gap-8 items-center justify-between'>
          <span className="h-[3px] w-[30em] bg-white my-4 rounded-lg"></span>
          <div>
            <li className='list-none flex gap-5 items-center justify-center text-4xl text-white s'>
              <ul role='button' className='hover:text-[#FFA305] ease-in-out'>
                Home
              </ul>

              <ul role='button' className='hover:text-[#FFA305] ease-in-out'>
                <Link to={'/vanderlindgang'}>
                  Vanderlind Gang
                </Link>
              </ul>

              <ul role='button' className='hover:text-[#FFA305] ease-in-out'>
                History
              </ul>

              <ul role='button' className='hover:text-[#FFA305] ease-in-out'>
                Cities
              </ul>
            </li>
          </div>
          <span className="h-[3px] w-[30em] bg-white my-4 rounded-lg"></span>
        </div>
      </div>
    </div>
  )
}

export default NavBar