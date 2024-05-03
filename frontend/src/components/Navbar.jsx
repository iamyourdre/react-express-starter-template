import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { logo } from '../assets';
import { FaSpotify } from "react-icons/fa6";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { HiX } from "react-icons/hi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "",
      title: "First",
    },
    {
      id: "2",
      title: "Second",
    },
    {
      id: "3",
      title: "Third",
    },
    
  ];

  return (
    <div className="transition-all duration-100 px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] flex justify-center items-center z-50">
      <div className="w-full">
        <nav className="w-full flex justify-between items-center navbar p-0 h-[80px] font-playfair transition-all duration-1000 relative">
          
          <NavLink to={'/'} className="h-full">
            <img src={logo} className="h-12 xl:h-14 relative top-5 xl:top-4" />
          </NavLink>

          <ul className="list-none xl:flex hidden justify-end items-center w-full h-full">
            {navLinks.map((nav, index)=>(
              <li key={nav.id} className="h-full">

                <NavLink to={nav.id} className={
                  ({ isActive }) =>
                  isActive ? (`border-b-2 transition duration-300 ease-in-out font-normal cursor-pointer text-[16px] px-6 flex h-full bg-gradient-to-b from-blue-600 from-50% via-blue-500 via-80%  to-blue-300 to-100% ${index === navLinks.length - 1 ? 'mr-10':''}`)
                  :
                  (`hover:bg-gradient-to-b hover:from-blue-600 hover:from-80% hover:via-blue-500 hover:via-90%  hover:to-blue-300 hover:to-100% ease-in duration-200 font-normal cursor-pointer text-[16px] px-6 flex h-full
                  ${index === navLinks.length - 1 ? 'mr-10':''}`) }>
                  <span className="my-auto">
                    {nav.title}
                  </span>
                </NavLink>

              </li>
            ))}
            <li className="cursor-pointer float-right">
              <a href="https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d">
              <button type="button" className="py-2 px-3 pe-4 font-normal text-[15px] outline-none rounded-full ease-in duration-200 bg-neutral-200 text-blue-600 hover:text-neutral-200 hover:bg-transparent border-2">
                <FaSpotify className="inline relative bottom-0.5 text-xl me-1"/> Open Spotify!
              </button>
              </a>
            </li>
          </ul>

          <div className="xl:hidden flex justify-end items-center cursor-pointer">

            {toggle ? (
              <HiX alt="close"
              className="w-[33px] h-[33px] object-contain"
              onClick={() => setToggle((prev) => !prev)}/>
            ) : (
              <HiMiniBars3BottomRight alt="menu"
              className="w-[33px] h-[33px] object-contain"
              onClick={() => setToggle((prev) => !prev)}/>
            )}

            {/* Navbar Dropdrown */}
            <div className={`${toggle ? 'flex' : 'hidden'} px-[2rem] p-6 absolute top-16 right-0 mx-4 my-2 rounded-xl sidebar z-50 bg-neutral-50 text-blue-900 shadow-lg font-semibold`}>
              
              <ul className="list-none flex flex-col justify-end items-start flex-1">
                <li className="cursor-pointer text-[16px] mb-4">
                  <a href='https://open.spotify.com/artist/6HvZYsbFfjnjFrWF950C9d'>
                    <FaSpotify className="inline relative bottom-0.5 text-xl me-1"/> Spotify
                  </a>
                </li>
                {navLinks.map((nav, index)=>(
                  <li 
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0':'mb-4'}`}
                  >
                    <a href="#">
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        </nav>
        
      </div>
    </div>
  )
}

export default Navbar