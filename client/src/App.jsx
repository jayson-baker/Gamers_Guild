import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Profile from './components/Profile'
import MyGames from './components/MyGames'
import MyPosts from './components/MyPosts'
import './App.css'

function App() {
  const [pages] = useState([
    {
      name:'home page'
    },
    {
      name: 'profile'
    },
    {
      name: 'my games'
    },
    {
      name: 'my posts'
    }
  ])
  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <>
      
        <Navbar />
          {/* pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage} */}
          {/* {(()=>{
            switch(currentPage.name){
              case 'profile':
                return<Profile />
              case 'my games':
                return <MyGames />
              case 'MyPosts':
                return <MyPosts />
              default:
                return <Homepage />
            }
          })} */}
          <Outlet />

    </>
  )
}

export default App
