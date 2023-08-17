import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useQuery } from "@apollo/client";
import { QUERY_ALL_Games}  from "../utils/queries.js";

function MyGameCards() {
    const { data } = useQuery(QUERY_ALL_Games);
    console.log(data)
    const games = data?.games
    console.log(games)
    return (
        <>
            {games ? (
                <>
                    {games.map((game) => (
                        <Link to={`/games/${games._id}`} key={games._id} value={games._id}>

                            <div style={{ backgroundImage: `url(${background})` }} className="shadow-lg shadow-[#228B22] group container rounded-md flex justify-center items-center mx-auto card-div">
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
                    ))}
                </>
            ) : null}

        </>
    );
}

export default MyGameCards;