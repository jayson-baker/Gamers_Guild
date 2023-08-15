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
      <ul className='hidden md:flex md:items-baseline'>
        <li className="mr-4"><Link to="/">Home</Link></li>
        <li>
          <button className="btn" onClick={()=>window.my_modal_3.showModal()}>Login</button>
          <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click on ✕ button to close</p>
            </form>
          </dialog>
      
        </li>
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

