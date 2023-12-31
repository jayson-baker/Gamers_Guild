// eslint-disable-next-line 
import React, {useState} from 'react'
import Logo from './assets/GamersGuildLogo.png'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'
import Auth from '../utils/auth'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const [showModal, setShowModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  const handleOnCloseSignup = () => setShowSignupModal(false);

  const isLoggedIn = localStorage.getItem('id_token');
  
  return (
    
    <div className="sticky top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#27374D] text-[#DDE6ED] border-2 border-{white}">
      <div>
        <img src={Logo} alt="Gamers Guild Logo" style={{width: '120px'}} />
      </div>

      {/* NavBar Buttons */}
      <ul className='hidden md:flex md:items-baseline'>
        <li className="btn mr-4"><Link to="/">Home</Link></li>
        {isLoggedIn ? <li><button onClick={Auth.logout} className="btn">Logout</button></li> : 
        <>
        <li>
          <button className="btn" onClick={()=> setShowModal(true)}>Login</button>      
        </li>
        <li>
          <button className="btn" onClick={()=> setShowSignupModal(true)}>Sign Up</button>      
        </li>
        </>}     
        
      </ul>

      <LoginModal onClose={handleOnClose} visible={showModal}/>
      <SignupModal onClose={handleOnCloseSignup} visible={showSignupModal}/>

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

