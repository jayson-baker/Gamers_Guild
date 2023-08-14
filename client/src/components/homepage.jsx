import React from "react";
import Placeholder from './assets/Placeholder1.jpg'

function HomePage(){


    
    return(
    <div className="w-full md:h-screen text-[#DDE6ED] bg-[#27374D]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline text-[#DDE6ED]">Chat About Some of The Most Popular Games Here!</p>
            </div>

            {/* Game Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div style={{backgroundImage: `url(${Placeholder})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto card-div">
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

export default HomePage