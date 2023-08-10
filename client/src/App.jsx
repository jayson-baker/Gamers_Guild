import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar'
import Homepage from './components/homepage'
import Profile from './components/profile'
import MyGames from './components/myGames'
import MyPosts from './components/myPosts'
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
