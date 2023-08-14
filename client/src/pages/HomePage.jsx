import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import Placeholder from '../components/assets/Placeholder1.jpg'

export default function HomePage() {
    return (
    <div className="p-4 sm:ml-64">
   <div className="flex justify-center flex-wrap p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
   <div className="flex items-center justify-center h-48 mb-4 rounded bg-[#27374D] dark:bg-gray-800">
         <p className="text-4xl text-center font-bold inline text-[#DDE6ED]">
            Chat About Some of The Most Popular Games Here!
         </p>
      </div>
      
      <div className="flex justify-center mb-6 w-fit rounded py-2.5 bg-[#27374D] flex-wrap md:flex-nowrap">
      <div style={{backgroundImage: `url(${Placeholder})`}} className="my-2 md:my-0 w-fit shadow-lg shadow-[#228B22] group w-2/5 rounded-md flex justify-center items-center mx-auto post-cardDiv">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">Example Game Card</span>
                <div className="pt-8 text-center">
                    <a href="to game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Blog</button></a>
                    <a href="favorites game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Favorite</button></a>
                </div>
            </div>
        </div>
        <div className="mx-4 border-2 w-fit border-{#27374D}">
            <div className="border-b-2 border-{#DDE6ED}">
                <p className="text-4xl font-bold inline text-[#DDE6ED]">title of post</p>
            </div>
      <p className="text-4xl font-bold inline text-[#DDE6ED]">
            Chat About Some of The Most Popular Games Here!
         </p>
         </div>
      </div>

      <div className="flex justify-center mb-6 w-fit rounded py-2.5 bg-[#27374D] flex-wrap md:flex-nowrap">
        <div className="mx-4 border-2 w-fit border-{#27374D}">
            <div className="border-b-2 border-{#DDE6ED}">
                <p className="text-4xl font-bold inline text-[#DDE6ED]">title of post</p>
            </div>
      <p className="text-4xl font-bold inline text-[#DDE6ED]">
            Chat About Some of The Most Popular Games Here!
         </p>
         </div>
         <div style={{backgroundImage: `url(${Placeholder})`}} className="my-2 md:my-0 w-fit shadow-lg shadow-[#228B22] group w-2/5 rounded-md flex justify-center items-center mx-auto post-cardDiv">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">Example Game Card</span>
                <div className="pt-8 text-center">
                    <a href="to game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Blog</button></a>
                    <a href="favorites game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Favorite</button></a>
                </div>
            </div>
        </div>
      </div>
      <div className="flex justify-center mb-6 w-fit rounded py-2.5 bg-[#27374D] flex-wrap md:flex-nowrap">
      <div style={{backgroundImage: `url(${Placeholder})`}} className="my-2 md:my-0  w-fit shadow-lg shadow-[#228B22] group w-2/5 rounded-md flex justify-center items-center mx-auto post-cardDiv">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">Example Game Card</span>
                <div className="pt-8 text-center">
                    <a href="to game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Blog</button></a>
                    <a href="favorites game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Favorite</button></a>
                </div>
            </div>
        </div>
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