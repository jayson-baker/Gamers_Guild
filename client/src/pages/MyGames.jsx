import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import { useQuery } from "@apollo/client";
import { QUERY_USER,
          QUERY_ALL_Games } from "../utils/queries.js";



export default function MyGames() {
    const { data } = useQuery(QUERY_ALL_Games);
    let games;
    console.log(data)
  if(data) {
    games = data.user.games;
  }
  const addGame = async (event) => {
    event.preventDefault();
    const askedGame = document.querySelector("#gameinput").textContent.trim();
    const response = await fetch("/MyGames/findGames", {
      method: "POST",
      body: JSON.stringify(askedGame),
      headers: {
        "Content-Type": "application/json",
      },
    });
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
   <div className="flex items-center justify-center h-48 mb-4 rounded bg-[#27374D] dark:bg-gray-800">
         <p className="text-4xl text-center font-bold inline text-[#DDE6ED]">
            Let's take a look at your favorited Games!
         </p>
          <button
                className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => window.my_modal_5.showModal()}
              >
                Add Game
              </button>
              <dialog id="my_modal_5" className="modal">
                <form method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <div>
                    <label
                      htmlFor="small-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Game Name:
                    </label>
                    <input
                      type="text"
                      id="gameinput"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <button
                    className="btn btn-outline btn-success"
                    onClick={addGame}
                  >
                    Search
                  </button>
                </form>
              </dialog>
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