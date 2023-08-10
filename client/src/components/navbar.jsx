import React from "react";
import {Link} from "react-router-dom"
import Nav from "./UI/nav"

function Navbar(){
    return(
       <Nav links={[<Link className="" to="/">home</Link>]} />


    )
}

export default Navbar;
