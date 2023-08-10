import React from "react";
import PageNav from "./pageNav"

function Navbar(){
    return(
        <nav className="">
            <div className=''>
                <span className=''
                    onClick={() => { props.setCurrentPage(props.pages[0]) }}>
                    Gamers Guild
                </span>
    
                <PageNav {...props}></PageNav>
            </div>
        </nav>
    )
}

export default Navbar;
