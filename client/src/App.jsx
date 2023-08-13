import { Outlet } from "react-router-dom";
import Nav from './components/navbar'
import SideBar from "./components/SideBar";
import HomePage from "./components/homepage";

function App() {
  return (
    <>
    <Nav />
      <SideBar />
      <Outlet />
     <HomePage />

    </>
  )
}

export default App