import React, {useState} from 'react'
import Logo from './assets/GamersGuildLogo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <nav className="bg-[#27374D] text-[#DDE6ED]">
  <div className=" flex flex-wrap items-center justify-between mx-auto">
    <a href="" className="flex items-center">
        <img src={Logo} className="" style={{width: '150px'}} alt="Logo" />
    </a>
    <div className="flex items-center mr-4">
            <div className="flex border border-black-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-[#27374D] border"
                    placeholder="Search..."
                />
                <button className="px-4 text-[#27374D] bg-[#9DB2BF] border-l rounded ">
                    Search
                </button>
            </div>
        </div>
  </div>
</nav>
  )
}

export default Navbar;
