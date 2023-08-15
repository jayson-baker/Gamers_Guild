import { useState, useEffect } from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function Profile() {
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
                    console.error('Error getting games', error)
                }
            }
            
            getGames();
        }, [])
    }

    return (
        <div className="bg-[#27374D]">
            Profile Div
        </div>
    )
}