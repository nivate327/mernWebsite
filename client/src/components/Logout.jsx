import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {UserContext} from "../App";
import { useContext } from 'react';


const Logout = () => {
  const {state, dispatch}=useContext(UserContext)
    let navigate=useNavigate();

    useEffect(()=>
    {
        fetch("/logout", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }, 
            credentials:"include"
          }).then((res)=>
        {
          dispatch({type:"user", payload:false});
            navigate("/login");
            if (res.status !== 200) {
                const error=new Error(res.error);
                throw error;
              }
        }).catch((err)=>
        {
            console.log(err);
        })
    })

  return (
    <div>
      <h1>Logout ka page !</h1>
    </div>
  )
}

export default Logout
