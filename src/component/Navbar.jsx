import React from 'react'
import './Navbar.css'
import { IoMenuOutline } from "react-icons/io5";
const Navbar = () => {
  return (
   <nav className='navbar  w-full'>
    <div className='flex items-center gap-3'>
<IoMenuOutline className='text-[#D8D8D9] text-2xl  menuIcon'/>
<span className='     items-center  logostyle'>startups.com</span>
</div>
<ul className='flex items-center gap-8 text-white font-black cursor-pointer text-sm'>
    <li className='abc'> <a href="">HOME</a></li>
    <li className='abc'> <a href="">TOUR</a></li>
    <li className='abc'> <a href="">DISCUSSION</a></li>
    <li className='abc'><a href="">CHAT</a></li>
    <li className='abc'> <a href="">EVENTS</a></li>
    <li className='abc'><a href="">EDUCTION</a></li>
    <li className='abc'> <a href="">MEMBERS</a></li>
    <li className='abc'> <a href="">INVESTORS</a></li>
    <li className='abc'><a href=""></a>PERKS</li>
  
</ul>
<ul className='flex items-center gap-6 text-white font-black cursor-pointer  responsive1'>
    <li className='abcd'>ABOUT</li>
    <li className='abcd'>LOGIN</li>
    <li className='signupStyle  px-4 py-2 bg-yellow-600 text-black rounded-full'>Signup</li>
</ul>
   </nav>
  )
}

export default Navbar