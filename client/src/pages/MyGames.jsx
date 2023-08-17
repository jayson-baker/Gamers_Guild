import React from "react";
import { useState, useEffect } from "react";
import  FindGameModal from '../components/FindGameModal'
import { useQuery } from "@apollo/client";
import { QUERY_USER,QUERY_ALL_Games } from "../utils/queries.js";
import MyGameCards from "../components/MyGameCards.jsx";



export default function MyGames() {
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => setShowModal(false);
  const { data } = useQuery(QUERY_ALL_Games);
    let games;
    if(data) {
      games = data.user.games;
  }
  const addGame = async (event) => {
   
  ;
    if (response.ok) {
      console.log(response)
      console.log("Game Added");
    } else {
      alert("Failed to Find Game");
    }
  }
    return (
    <div className="p-4 md:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
   <div className="flex flex-wrap items-center justify-center h-48 mb-4 rounded bg-[#27374D] dark:bg-gray-800">
         <p className="text-4xl text-center font-bold inline text-[#DDE6ED]">
            Let's take a look at your favorited Games!
         </p>
          <button
                className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={()=> setShowModal(true)}>
                Add Game
              </button>
              <FindGameModal onClose={handleOnClose} visible={showModal} />
              
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {games ? (
        <>
    {games.map((game) => (
                <Cards game={game.name} key={game._id} ></Cards>
            ))};
            </>
            ): null}
      </div>
   </div>
</div>
    )
}