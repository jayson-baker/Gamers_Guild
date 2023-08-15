import React from "react";

export default function LoginModal({visible, onClose}) {
    const handleOnClose = (e) => {
        if(e.target.id === "loginModal")
        onClose()
    }

    if(!visible) return null
    return (
        <div id="loginModal" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white p-2 rounded w-72">
        <h1 className="font-semibold text-center text-xl text-gray-700">
          Welcome back to the Guild
        </h1>
        <p className="text-center text-gray-700 mb-5">Sign in</p>

        <div className="flex flex-col">
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5 text-black"
            placeholder="email@example.com"
          />
          <input
            type="password"
            className="border border-gray-700 p-2 rounded mb-5 text-black"
            placeholder="********"
          />
        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-gray-700 text-white rounded">
            Sign in
          </button>
        </div>
      </div>
            </div>
    )
}