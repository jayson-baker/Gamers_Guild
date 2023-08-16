import React, { useState } from "react";
import { ADD_USER } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

export default function SignupModal({visible, onClose}) {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
        console.log(formState)
        const mutationResponse = await addUser({
          variables: { username: formState.username, email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.addUser.token;
        console.log(token)
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      console.log(name, value)
      setFormState({
        ...formState,
        [name]: value,
      });
    }; 

    const handleOnClose = (e) => {
        if(e.target.id === "signupModal")
        onClose()
    }

    if(!visible) return null
    return (
      <div id="signupModal" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-white p-2 rounded w-72">
          <h1 className="font-semibold text-center text-xl text-gray-700">
          Become Part of the Guild
          </h1>
          <p className="text-center text-gray-700 mb-5">Sign up below!</p>

          <form onSubmit={handleFormSubmit} className="flex flex-col">
          <input
            name="username"
            type="text"
            className="border border-gray-700 p-2 rounded mb-5 text-black"
            placeholder="Username"
            onChange={handleChange}
          />
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
            <button type="submit" className="px-5 py-2 bg-gray-700 text-white rounded">
            Sign up
            </button>
          </div>
          </form>
        </div>
      </div>
    )
}