// import { useState, useEffect } from "react";
// import {Link} from 'react-router-dom'
import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import MyPosts from '../components/myPostsCards'

function Profile() {

    return (
    <div className="md:ml-64">
        <MyPosts/>
    </div> 
    )
}

export default Profile;