import React from 'react';
import loginIcon from "./img/loginPng.png";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { UserContext } from "../App";
import { useContext } from 'react';

const Login = () => {

  const { state, dispatch } = useContext(UserContext)

  const [msg, setMsg] = useState("");
  const [bg, setBg] = useState("");
  const navigate = useNavigate();
  const [logUser, setUser] = useState({
    email: "",
    password: ""
  });

  let name, value;
  const loginUser = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...logUser, [name]: value });
  }

  const postLogin = async (e) => {
    e.preventDefault();

    let { email, password } = logUser;

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })


    console.log(res);
    const data = res.json();

    console.log(email, password);
    console.log(data);

    if (res.status === 400 || !data) {
      alert("Invalid Credentials !");
      console.log("Invalid Credentials !");
     

    } else {
      alert("Signup Success !");
      console.log("Login Success !");
      dispatch({ type: "user", payload: true });
        navigate("/")
    

    }

  }


  return (
    <>

      <div className="signUpform container">
        <div className="login">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12">
              <form method="POST" className='form loginForm'>
                <h3 className="loginHead">LOGIN FORM</h3>

                <div className="form-group r-form">
                  <i class="fa-solid fa-envelope em iconS"></i>
                  <input type="text" className="form-control" value={logUser.email} name="email" onChange={loginUser} autocomplete="off" id="Email" aria-describedby="emailHelp" placeholder='Your Email' />
                </div>

                <div className="form-group r-form">
                  <i class="fa-solid fa-lock iconS"></i>
                  <input type="password" className="form-control" value={logUser.password} name="password" onChange={loginUser} autocomplete="off" id="pass" aria-describedby="emailHelp" placeholder='Password' />
                </div>


                <button className='btn signup btnR' onClick={postLogin}> SUBMIT </button>
              </form>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-12 col-md-6 col-12 r-img">
              <img src={loginIcon} alt="" className='img-fluid rIcon' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
