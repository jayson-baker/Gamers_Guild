import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_Games}  from "../utils/queries.js";

function MyGameCards({game}) {
    return (
                <>
                        <Link to={`/games/${game._id}`} key={game._id} value={game._id}>

                            <div style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWM0h8C2lULbDbSkzCd953B9sgcMnRwv57A&usqp=CAU)` }} className="shadow-lg shadow-[#228B22] group container rounded-md flex justify-center items-center mx-auto card-div">
                                <div className="opacity-0 group-hover:opacity-100">
                                    <span className="text-2xl font-bold text-[#DDE6ED] tracking-wider text-center">{game.name}</span>
                                    <div className="pt-8 text-center">
                                        <Link to={`/searchPost/${game._id}`} key={game._id} value={game._id}>
                                            <h3 className='text-center rounded-lg px-4 py-3 m-2 bg-[#526D82] text-[#DDE6ED] font-bold text-lg'>Posts For game</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                </>
    );
}

export default MyGameCards;