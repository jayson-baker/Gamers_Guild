import React from "react";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import { QUERY_GETAPI } from "../../utils/queries";
import Auth from "../../utils/auth";



export default function LoginModal({visible, onClose}) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const [getKey, { erro }] = useQuery(QUERY_GETAPI)

  const stash=(idTwitch) =>{
    // Saves api token to localStorage
    localStorage.setItem('Twitch', idTwitch);
    console.log(idTwitch)
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const keys = await getKey();
      console.log(keys);
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      const twitch = keys.data.login.api
      console.log(mutationResponse);
      stash(twitch);
      Auth.login(token);
      
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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

          <form onSubmit={handleFormSubmit} className="flex flex-col">
            <input
            name="email"
            type="text"
            className="border border-gray-700 p-2 rounded mb-5 text-black"
            placeholder="email@example.com"
            onChange={handleChange}
            />
            <input
            name="password"
            type="password"
            className="border border-gray-700 p-2 rounded mb-5 text-black"
            placeholder="********"
            onChange={handleChange}
            />
          <div className="text-center">
          <button type="submit" className="loginSubmitBtn px-5 py-2 bg-gray-700 text-white rounded">
            Sign in
          </button>
          </div>
          </form>
        </div>
      </div>
    )
}