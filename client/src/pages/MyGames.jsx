import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import Placeholder from '../components/assets/Placeholder1.jpg'

export default function MyGames() {
    return (
    <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
   <div className="flex items-center justify-center h-48 mb-4 rounded bg-[#27374D] dark:bg-gray-800">
         <p className="text-4xl text-center font-bold inline text-[#DDE6ED]">
            Let's take a look at your favorited Games!
         </p>
      </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div style={{backgroundImage: `url(${Placeholder})`}} className="shadow-lg shadow-[#228B22] group container rounded-md flex justify-center items-center mx-auto card-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">Example Game Card</span>
                <div className="pt-8 text-center">
                    <a href="to game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Blog</button></a>
                    <a href="favorites game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Favorite</button></a>
                </div>
            </div>
        </div>
        <div style={{backgroundImage: `url(${Placeholder})`}} className="shadow-lg shadow-[#228B22] group container rounded-md flex justify-center items-center mx-auto card-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">Example Game Card</span>
                <div className="pt-8 text-center">
                    <a href="to game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Blog</button></a>
                    <a href="favorites game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Favorite</button></a>
                </div>
            </div>
        </div>
        <div style={{backgroundImage: `url(${Placeholder})`}} className="shadow-lg shadow-[#228B22] group container rounded-md flex justify-center items-center mx-auto card-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">Example Game Card</span>
                <div className="pt-8 text-center">
                    <a href="to game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Blog</button></a>
                    <a href="favorites game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Favorite</button></a>
                </div>
            </div>
        </div>
        <div style={{backgroundImage: `url(${Placeholder})`}} className="shadow-lg shadow-[#228B22] group container rounded-md flex justify-center items-center mx-auto card-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">Example Game Card</span>
                <div className="pt-8 text-center">
                    <a href="to game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Blog</button></a>
                    <a href="favorites game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Favorite</button></a>
                </div>
            </div>
        </div>
        <div style={{backgroundImage: `url(${Placeholder})`}} className="shadow-lg shadow-[#228B22] group container rounded-md flex justify-center items-center mx-auto card-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">Example Game Card</span>
                <div className="pt-8 text-center">
                    <a href="to game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Blog</button></a>
                    <a href="favorites game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Favorite</button></a>
                </div>
            </div>
        </div>
        <div style={{backgroundImage: `url(${Placeholder})`}} className="shadow-lg shadow-[#228B22] group container rounded-md flex justify-center items-center mx-auto card-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">Example Game Card</span>
                <div className="pt-8 text-center">
                    <a href="to game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Blog</button></a>
                    <a href="favorites game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Favorite</button></a>
                </div>
            </div>
        </div>
        <div style={{backgroundImage: `url(${Placeholder})`}} className="shadow-lg shadow-[#228B22] group container rounded-md flex justify-center items-center mx-auto card-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">Example Game Card</span>
                <div className="pt-8 text-center">
                    <a href="to game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Blog</button></a>
                    <a href="favorites game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Favorite</button></a>
                </div>
            </div>
        </div>
        <div style={{backgroundImage: `url(${Placeholder})`}} className="shadow-lg shadow-[#228B22] group container rounded-md flex justify-center items-center mx-auto card-div">
            <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">Example Game Card</span>
                <div className="pt-8 text-center">
                    <a href="to game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Blog</button></a>
                    <a href="favorites game"><button className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Favorite</button></a>
                </div>
            </div>
        </div>
      </div>
   </div>
</div>
    )
}