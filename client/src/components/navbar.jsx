import React, {useState} from 'react'
import Logo from './assets/GamersGuildLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#27374D] text-[#DDE6ED]">
      <div>
        <img src={Logo} alt="Gamers Guild Logo" style={{width: '120px'}} />
      </div>
    </div>
  )
}

export default Navbar;