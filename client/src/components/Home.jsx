import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import hero from "./img/hero3.png";
import { useEffect, useState } from 'react';
import Homep1 from './Homep1';
import Contact from "./Contact"
import Latestwork from './Latestwork';
import Footer from './Footer';
import Loading from './Loading';
import { InfinitySpin } from 'react-loader-spinner';


const Home = () => {

  const [user, setUser]=useState("");
  const [show, setShow]=useState(false);
 // const [load, setLoad]=useState(false);
 const [loader, setLoader] = useState(false);





  const userContact = async () => {
    try {
      const res =await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        
      });

      let data = await res.json();
      console.log(data);
      setUser(data.name);
      setShow(true);

      if (!res.status === 200) {
        const error=new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    userContact();
   
    setLoader(true);

    setInterval(() => {
      setLoader(false);
    }, 3000)

  }, []);


  return (
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
      
      (
        <><div className="hero">
      
        <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-sm-12 col-12 col-md-6 heroSec">
            <h1>Welcome</h1>
            <h3 className='userskill'>{show ? `${user} are` :'We are the'} <span>MERN</span> Developer</h3>
            <p>MERN is a free and open-source JavaScript software stack <br /> for building dynamic web sites and <br /> web applications.</p>
            <NavLink to="/about"><button className='aboutme btn signup'>About Me</button></NavLink>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12 col-12 col-md-6 imgSec">
            <figure className='figureImg'>
              <img src={hero} alt="" className='heroImg'/>
            </figure>
          </div>
        </div>
        </div>
      </div>

      <Homep1/>
      
      <Contact/>

      <Latestwork/>

      <Footer/>
      </>
   )}

    </>
  )
}

export default Home
