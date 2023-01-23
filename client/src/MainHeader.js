import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from "./components/Navbar";

const MainHeader = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default MainHeader
