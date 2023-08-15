import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import Placeholder from '../components/assets/Placeholder1.jpg'

export default function HomePage() {
    return (
    <div className="p-4 md:ml-64">
   <div className="flex justify-center flex-wrap p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
   <div className="flex flex-wrap md:w-3/4 w-full items-center justify-center h-48 mb-4 rounded bg-[#27374D] dark:bg-gray-800">
         <p className="text-4xl w-full text-center font-bold inline text-[#DDE6ED]">
            Lets Talk Games!
         </p>         
      </div>
      
      <div className="flex md:w-3/4 w-full justify-center mb-6 w-fit rounded py-2.5 bg-[#27374D] flex-wrap md:flex-nowrap">
        <div className="mx-4 w-3/4 border-2 w-fit border-{#27374D}">
            <div className="border-b-2 text-center border-{#DDE6ED}">
            <p className="text-4xl font-bold inline text-[#DDE6ED]">Game title: </p>
                <p className="text-4xl font-bold inline text-[#DDE6ED]">title of post</p>
            </div>
      <p className="text-4xl font-bold inline text-[#DDE6ED]">
            This is a post about a game that I loved and wanted to share with the world of Gamers Guild
         </p>
         </div>
      </div>

      <div className="flex justify-center md:w-3/4 w-full mb-6 w-fit rounded py-2.5 bg-[#27374D] flex-wrap md:flex-nowrap">
        <div className="mx-4 border-2 w-fit border-{#27374D}">
            <div className="border-b-2 border-{#DDE6ED}">
                <p className="text-4xl font-bold inline text-[#DDE6ED]">title of post</p>
            </div>
      <p className="text-4xl font-bold inline text-[#DDE6ED]">
            Chat About Some of The Most Popular Games Here!
         </p>
         </div>
      </div>
      <div className="flex justify-center md:w-3/4 w-full mb-6 w-fit rounded py-2.5 bg-[#27374D] flex-wrap md:flex-nowrap">
        <div className="mx-4 border-2 w-fit border-{#27374D}">
            <div className="border-b-2 border-{#DDE6ED}">
                <p className="text-4xl font-bold inline text-[#DDE6ED]">title of post</p>
            </div>
      <p className="text-4xl font-bold inline text-[#DDE6ED]">
            Chat About Some of The Most Popular Games Here!
         </p>
         </div>
      </div>
   </div>
</div>
    )
}