import React, {useEffect, useState} from 'react';
import { NavLink } from "react-router-dom";
import {UserContext} from "../App";
import { useContext } from 'react';
import { InfinitySpin } from 'react-loader-spinner';


const Navbar = () => {

    const {state, dispatch}=useContext(UserContext)
    const [loader, setLoader] = useState(false);


    useEffect(() => {
       
        setLoader(true);
    
        setInterval(() => {
          setLoader(false);
        }, 3000)
    
      }, []);


    if(state)
    {
        return(
            <>
            {loader ? 
                <div className="load">
                     <InfinitySpin
                       width='100'
                       height='100'
                       color="rgb(91, 241, 91)"
                       loader={loader}
                     />
                 </div>
                 
                 :(<nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a class="navbar-brand" href="#">mernapp</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-align-right"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/logout "><i class="fa-solid fa-user"/> LogOut </NavLink>
                            </li>

                        </ul>

                    </div>
                </div>

            </nav>)}
            </>
        );
    }else{
        return(
            <>
             {loader ? 
                <div className="load">
                     <InfinitySpin
                       width='100'
                       height='100'
                       color="rgb(91, 241, 91)"
                       loader={loader}
                     />
                 </div>
                 
                 :
            (<nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <a class="navbar-brand" href="#">mernapp</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-solid fa-align-right hamburger"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link"><i class="fa-solid fa-user"></i> Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link signup" to="/signup "> SIGNUP </NavLink>
                            </li>

                        </ul>

                    </div>
                </div>

            </nav>)}
            </>
        )
    }
   
}

export default Navbar
