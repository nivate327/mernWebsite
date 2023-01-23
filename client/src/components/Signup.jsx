import React from 'react'
import ragisterIcon from "./img/ragisterPng.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from 'react';

const Signup = () => {

  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [time, setTime] = useState("display:none");
  let [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  });

  let name, value;

  let userInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  let postData = async (e) => {
    e.preventDefault();

    let { name, email, phone, work, password, cpassword } = user;
    console.log(name, email, phone, work, password, cpassword);

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    console.log(res);
    const data = await res.json();
    console.log(data);

    if (data.status === 422 || !data) {
      alert("Invalid Credientials !");
      console.log("Invalid");
      
    } else {
      alert("Signup Success !");
      console.log("success");
      setTimeout(() => {
        navigate("/login")
      }, 1000);
      
    }

  }

  return (
    <>
       { msg=="" ? null : 
     <div class="alert alert-success" role="alert">
        {msg}
     </div>
     } 
      <div className="signUpform signupdata container">
        <div className="ragister">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <h3 className="signupHead">SIGNUP FORM</h3>
              <form className='form signForm' method='POST'>
                <div className="form-group r-form">
                  <i className="fa-solid fa-user iconS"></i>
                  <input type="text" className="form-control" autocomplete="off" value={user.name} onChange={userInput} id="inp1" aria-describedby="emailHelp" placeholder='Your Name' name="name" />
                </div>

                <div className="form-group r-form">
                  <i class="fa-solid fa-envelope iconS"></i>
                  <input type="text" className="form-control" autocomplete="off" value={user.email} onChange={userInput} id="inp2" aria-describedby="emailHelp" placeholder='Your Email' name="email" />
                </div>

                <div className="form-group r-form">
                  <i class="fa-solid fa-mobile iconS"></i>
                  <input type="number" className="form-control" autocomplete="off" value={user.phone} onChange={userInput} id="inp3" aria-describedby="emailHelp" placeholder='Mobile Number' name="phone" />
                </div>

                <div className="form-group r-form">
                  <i class="fa-solid fa-envelope iconS"></i>
                  <input type="text" className="form-control" autocomplete="off" value={user.work} onChange={userInput} id="inp6" aria-describedby="emailHelp" placeholder='Your Work' name="work" />
                </div>

                <div className="form-group r-form">
                  <i class="fa-solid fa-lock iconS"></i>
                  <input type="password" className="form-control" autocomplete="off" value={user.password} onChange={userInput} id="inp4" aria-describedby="emailHelp" placeholder='Password' name="password" />
                </div>

                <div className="form-group r-form">
                  <i class="fa-solid fa-lock iconS"></i>
                  <input type="password" className="form-control" autocomplete="off" value={user.cpassword} onChange={userInput} id="inp5" aria-describedby="emailHelp" placeholder='Confirm Password' name="cpassword" />
                </div>

                <button className='btn signup btnR' type="submit" onClick={postData}> SUBMIT </button>
              </form>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 r-img">
              <img src={ragisterIcon} alt="" className='img-fluid rIcon' />

              <NavLink to="/login" className="gologin">I am already ragister</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
