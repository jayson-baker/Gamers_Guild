import React, {useState, useEffect} from "react";
import axios from 'axios'

function MyGames(){

const [games, setGames] = useState([]);
const url = 'http://localhost:3000/';

useEffect(() => {
    const getGames = async () => {
        try {
        const response = await axios.get(`${url}past`);
        const allGames = response.data.games.allGames;
        setGames(allGames)
        } catch (error) {
            console.error('Error getting games', error);
        }
    };

    getGames();
}, [])

}


export default MyGames;