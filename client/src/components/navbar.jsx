// eslint-disable-next-line 
import React, {useState} from 'react'
import Logo from './assets/GamersGuildLogo.png'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    
    <div className="sticky top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#27374D] text-[#DDE6ED] border-2 border-{white}">
      <div>
        <img src={Logo} alt="Gamers Guild Logo" style={{width: '120px'}} />
      </div>

      {/* NavBar Buttons */}
      <ul className='hidden md:flex'>
        <li className="mr-4"><Link to="/">Home</Link></li>
        <li><Link to="/">Log In</Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#27374D] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="/">Home</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="/">Log In</Link></li>
      </ul>
    </div>

  )
}

export default Navbar;

