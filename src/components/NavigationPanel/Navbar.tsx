import React from 'react';
import {  Link } from "react-router-dom";
const Navbars= () =>{
  return (
    <header className='mt-0 py-4 bg-blue-600 py-4'>
        <nav className='flex justify-between items-center w-[92%]  mx-auto'>
        <div className="w-16 font-bold text-white">
                Geeks
            </div>
            <div className='nav-links duration-500 md:static 
                        absolute md:min-h-fit min-h-[60vh] 
                        left-0 top-[-100%] md:w-auto  w-full 
                        flex items-center px-5'>
                <ul className='flex md:flex-row flex-col 
                           md:items-center md:gap-[4vw] gap-8'>
                    <li className='text-white'>
                    <Link to="/home">Тесты</Link>
                    </li>
                    <li className='text-white'>
                    <Link to="/users">Пользователи</Link>
                    </li>
                    <li className='text-white'>
                    <Link to="/sheeps">Sheeps</Link>
                    </li>
                    <li className='text-white'>
                    <Link to="/goats">Goats</Link>
                    </li>
                </ul>
            </div>
        </nav>

    </header>
  
  );
}
export default Navbars;