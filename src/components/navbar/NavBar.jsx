import React from 'react';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const page_location = useLocation();

  console.log(page_location.pathname);

  const isActive = (path) => {
    return path === page_location.pathname ? 'text-[#FFA305]' : 'text-white';
  };

  return (
    <div className='font-custom fixed top-0 left-0 w-full z-50 bg-transparent p-4 h-36'>
      <div className='flex gap-5 items-center'>
        <img src={logo} className='h-28' alt='Logo' />
        <div className='flex w-full gap-8 items-center justify-between'>
          <span className="h-[3px] w-[30em] bg-white my-4 rounded-lg"></span>
          <div>
            <li className='list-none flex gap-5 items-center justify-center text-4xl'>
              <ul role='button'>
                <Link 
                  to={'/'} 
                  className={`${isActive('/')} hover:text-[#FFA305] ease-in-out`}
                >
                  Home
                </Link>
              </ul>

              <ul role='button'>
                <Link 
                  to={'/vanderlindgang'} 
                  className={`${isActive('/vanderlindgang')} hover:text-[#FFA305] ease-in-out`}
                >
                  Vanderlind Gang
                </Link>
              </ul>

              <ul role='button'>
                <Link 
                  to={'/history'} 
                  className={`${isActive('/history')} hover:text-[#FFA305] ease-in-out`}
                >
                  History
                </Link>
              </ul>

              <ul role='button'>
                <Link 
                  to={'/cities'} 
                  className={`${isActive('/cities')} hover:text-[#FFA305] ease-in-out`}
                >
                  Cities
                </Link>
              </ul>
            </li>
          </div>
          <span className="h-[3px] w-[30em] bg-white my-4 rounded-lg"></span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
