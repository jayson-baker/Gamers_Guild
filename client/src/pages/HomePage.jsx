import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import Placeholder from '../components/assets/Placeholder1.jpg'
import UserPosts from "../components/HomePagePostCard";

export default function HomePage() {
    return (
    <div className="p-4 md:ml-64">
   <div className="flex justify-center flex-wrap p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
   <div className="flex flex-wrap md:w-3/4 w-full items-center justify-center h-48 mb-4 rounded bg-[#27374D] dark:bg-gray-800">
         <p className="text-4xl w-full text-center font-bold inline text-[#DDE6ED]">
            Welcome to Gamers Guild! Lets Talk Games!
         </p>         
    </div>
    <UserPosts />
   </div>
</div>
    )
}