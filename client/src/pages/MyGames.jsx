import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries.js";



export default function MyGames() {
    const { data } = useQuery(QUERY_USER);
    let games;
  if(data) {
    games = data.user.games;
  }


    return (
    <div className="p-4 md:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
   <div className="flex items-center justify-center h-48 mb-4 rounded bg-[#27374D] dark:bg-gray-800">
         <p className="text-4xl text-center font-bold inline text-[#DDE6ED]">
            Let's take a look at your favorited Games!
         </p>
         <button onClick={addGame} >Add Game</button>
      </div>
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
    {games.map((game) => (
                <Cards game={game.name} key={game._id} ></Cards>
            ))};
      </div>
   </div>
</div>
    )
}