import { Outlet } from "react-router-dom";
import Nav from './components/navbar'
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
    <Nav />
      <SideBar />
      <Outlet />
    </>
  )
}

export default App