<<<<<<< HEAD
import React from "react"
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <NavBar />
    </div>
=======
import { Outlet } from "react-router-dom";
import Nav from './components/Nav'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
>>>>>>> de6e2f536d9aba7dc0e11b629ef4aa54ff4bf64d
  )
}

export default App