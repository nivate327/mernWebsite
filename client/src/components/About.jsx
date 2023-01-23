import React from 'react';
import profile from "./img/profile.jpg";
import ro from "./img/rohanp.jpeg";
import { NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const About = () => {

  const navigate=useNavigate();
  const [userData, setUser]=useState({});

  const callUser = async () => {
    try {
      const res =await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }, 
        credentials:"include"
      });

      let data = await res.json();
      console.log(data);
      setUser(data);

      if (!res.status === 200) {
        const error=new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
      navigate("/login")
    }
  }

  useEffect(() => {
    callUser();
  }, [])

  return (
    <>
      <div className="about">
        <div className="container aboutPart">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
              <div className="profile">
                <img src={userData.name==="Rohan Nivate" ? ro : profile} alt="" />
              </div>

              <div className="abouthim">
                <p><NavLink to="/" className="nav-link">{userData.work}</NavLink> </p>
                <p><NavLink to="/" className="nav-link">Software Engineer</NavLink> </p>
                <p><NavLink to="/" className="nav-link">Front End Developer</NavLink> </p>
                <p><NavLink to="/https://github.com/nivate327/" className="nav-link">Github</NavLink> </p>
                <p><NavLink to="/" className="nav-link">Facebook</NavLink></p>
                <p><NavLink to="/" className="nav-link">Web Designer</NavLink></p>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12 pi">

              <div className="persnal-info">
                <div className="pinfo">
                  <h3 className="name">{userData.name}</h3>
                  <p className='skills'>{userData.work}</p>
                  <p className="rankigs">RANKINGS - 1/10</p>
                </div>

                <button className="btn edit signup">Edit</button>
              </div>

              <div className="toggleData">
                <ul class="nav nav-tabs aboutTab" id="myTab" role="tablist">
                  <li class="nav-item ">
                    <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">TimeLine</a>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <table className='table borderless'>
                      <tbody>
                        <tr>
                          <td>User Id</td>
                          <td>{userData._id}</td>
                        </tr>
                        <tr>
                          <td>Name</td>
                          <td>{userData.name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{userData.email}</td>
                        </tr>
                        <tr>
                          <td>Phone</td>
                          <td>{userData.phone}</td>
                        </tr>
                        <tr>
                          <td>Profession</td>
                          <td>{userData.work}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <table className='table borderless'>
                      <tbody>
                        <tr>
                          <td>Experience</td>
                          <td>Beginner</td>
                        </tr>
                        <tr>
                          <td>Monthly Rate</td>
                          <td>5$/hr</td>
                        </tr>
                        <tr>
                          <td>Total Projects</td>
                          <td>50</td>
                        </tr>
                        <tr>
                          <td>English Level</td>
                          <td>intermediate</td>
                        </tr>
                        <tr>
                          <td>Availbilty</td>
                          <td>50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

/*
<ol>
<li className='data'>User Id <span>unique_roh</span></li>
<li className='data'>Name <span>Rohan Nivate</span></li>
<li className='data'>Email <span>rohannivate2002@gmail.com</span></li>
<li className='data'>Phone <span>9307194158</span></li>
<li className='data'>Profession <span>Web Developer</span></li>
</ol>
*/