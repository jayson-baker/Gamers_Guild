import React from "react";
import { useState } from "react";

export default function FindGameModal({ visible, onClose }) {
    const [formState, setFormState] = useState({ gameInput: '' });
    const createGameCard = async () => {

    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const askedGame = formState.gameInput;
            console.log(askedGame);
            const response = await fetch("/MyGames/findGames", {
                method: "POST",
                body: { name: JSON.stringify(askedGame) },
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                console.log(response);
                createGameCard();
            } else {
                alert("Failed to Find Game");
                return
            }
        } catch (e) {
            console.log(e);
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleOnClose = (e) => {
        if (e.target.id === "gameModal")
            onClose()
    }

    if (!visible) return null
    return (
        <div onClick={handleOnClose} id="gameModal" className="modal">
            <form onSubmit={handleFormSubmit} className="modal-box">
                <button type="click" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
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
                        name="gameInput"
                        type="text"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Minecraft"
                        onChange={handleChange}
                    />
                </div>
                <button className="btn btn-outline btn-success" type="submit">
                    Search
                </button>
            </form>
        </div>
    )
};