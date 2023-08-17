// import { useState, useEffect } from "react";
// import {Link} from 'react-router-dom'
import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import MyPosts from '../components/MyPostsCards'

function Profile() {

    return (
    <div>
        <div className="bg-[#27374D] md:ml-64">
            Profile Div
        </div>
        <div>
        <MyPosts/>
        </div>
    </div> 
    )
}

export default Profile;