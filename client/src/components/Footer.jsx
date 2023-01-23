import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container footcon">
                   <h3 className="footlogo">mernapp.com</h3>

                   <ul className="footNav">
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
                                <NavLink to="/login" className="nav-link"> Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/signup" className="nav-link"> SignUp</NavLink>
                            </li>

                     </ul>
                    
                    <div className="social">
                    <a href="https://www.facebook.com/rohan.nivate.12/"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://twitter.com/RohanNivate"><i class="fa-brands fa-twitter"></i></a>
                    <a href="https://github.com/nivate327/"><i class="fa-brands fa-github"></i></a>
                    </div>

                    <p className='lastf'>copyright 2023 all rights reserved | This website made with ❤️ by rohan</p>

                </div>


            </div>
        </>
    )
}

export default Footer
