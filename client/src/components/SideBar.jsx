import React, {useState} from 'react'
import Controller from './assets/game-controller.png'
import Comment from './assets/comments.png'
import Post from './assets/post.png'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
      <aside
        id="default-sidebar"
        className="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#9DB2BF]">
          <div className="container m-5">
            <div className="searchInput">
              <input className="p-1 rounded" type="text" placeholder="Search Games" />
              {/* we can put auto complete section in result box? */}
              <div className="resultBox"></div>
              
            </div>
          </div>

          <ul className="space-y-3 font-medium">
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
                />{" "}
                My Games
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={handleClick}
                to="/"
              >
                <img
                  src={Post}
                  alt="post"
                  style={{ width: "30px", marginRight: "10px" }}
                />{" "}
                My Posts
              </Link>
            </li>
            <li>
              <Link
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                onClick={handleClick}
                to="/"
              >
                <img
                  src={Comment}
                  alt="comment"
                  style={{ width: "30px", marginRight: "10px" }}
                />{" "}
                My Comments
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;