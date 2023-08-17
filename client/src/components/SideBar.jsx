import React, { useState } from "react";
import Controller from "./assets/game-controller.png";
import Comment from "./assets/comments.png";
import Post from "./assets/post.png";
import ProfilePic from "./assets/user.png";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from 'react-icons/fa'
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import Auth from "../utils/auth";

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleClick = () => setSidebar(!sidebar);

  const [formState, setFormState] = useState({ title: "", text: "" });
  const [createPost, { error }] = useMutation(ADD_POST, {context: { headers: { authorization: Auth.getToken() } }});

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(formState);
      const mutationResponse = await createPost({
        variables: { title: formState.title, text: formState.text },
      });
      const token = mutationResponse.data.addPost.token;
      Auth.isTokenExpired(token);
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

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        onClick={handleClick}
        className={sidebar ? "hidden": "inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      {/* <div onClick={handleClick} className="md:hidden z-10">
      {!sidebar ? <FaBars/> : <FaTimes style={{width: '40px'}}/>}
      </div> */}
      <aside
        id="default-sidebar"
        className={!sidebar ? "hidden md:block md:fixed md:left-0 md:z-40 md:w-64 h-screen" :" fixed left-0 z-40 w-64 h-screen"}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#9DB2BF]">
          <div onClick={handleClick} className="md:hidden z-10">
      {sidebar ?  <FaTimes />: "hidden"}
      </div>
          
          <div className="container m-5">
            <div className="searchInput">
              <input
                className="p-1 rounded"
                type="text"
                placeholder="Search Games"
              />
              {/* we can put auto complete section in result box? */}
              <div className="resultBox"></div>
            </div>
          </div>

          <ul className="space-y-3 font-medium">
            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={handleClick}
                to="/ProfilePage"
              >
                <img
                  src={ProfilePic}
                  alt="controller"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                My Profile
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={handleClick}
                to="/MyGames"
              >
                <img
                  src={Controller}
                  alt="controller"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                My Games
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={handleClick}
                to="/ProfilePage"
              >
                <img
                  src={Post}
                  alt="post"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                My Posts
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={handleClick}
                to="/games"
              >
                <img
                  src={Comment}
                  alt="comment"
                  style={{ width: "30px", marginRight: "10px" }}
                />
                My Comments
              </Link>
            </li>
            <li>
              {/* You can open the modal using ID.showModal() method */}
              <button
                className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                onClick={() => window.my_modal_3.showModal()}
              >
                New Post
              </button>
              <dialog id="my_modal_3" className="modal">
                <form onSubmit={handleFormSubmit} method="dialog" className="modal-box">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                  <div>
                    <label
                      htmlFor="small-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Post title:
                    </label>
                    <input
                      name="title"
                      type="text"
                      id="small-input"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="large-input"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Post:
                    </label>
                    <input
                      name="text"
                      type="text"
                      id="large-input"
                      className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-outline btn-success"
                  >
                    Post
                  </button>
                </form>
              </dialog>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
