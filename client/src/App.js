import React, { createContext } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {
  Route,
  Routes
} from "react-router-dom"
import Signup from './components/Signup'
import MainHeader from './MainHeader';
import Contact from './components/Contact'
import About from './components/About'
import Login from './components/Login'
import "./scss/App.css";
import "./scss/Responsive.css";
import ErrorPage from './components/Error';
import Logout from './components/Logout';
import { useReducer } from 'react';
import {initialData, reducer} from './reducer/UserReducer';


//create Context
export const UserContext=createContext();

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHeader />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>

    </Routes>
  );
}

const App = () => { 
  const [state, dispatch]=useReducer(reducer, initialData);

  return (
    <>
      <UserContext.Provider value={{state, dispatch}}>
          <Routing/>
      </UserContext.Provider>
    </>
  )
}

export default App
