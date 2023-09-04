import React, { useEffect, useState } from 'react'

const Details = () => {
  const [logindata,setLoginData]=useState([]);
  var today=new Date().toISOString().slice(0,10);
  console.log(today);
  const Birthday=()=>{
    const getuser=localStorage.getItem("user_login");
    if(getuser && getuser.length){
      const user=JSON.parse(getuser);
      setLoginData(user);
      
      const userbirth=logindata.map((el,k)=>{
        return el.date===today
      })
      if(userbirth){
        setTimeout(()=>{
          console.log("ok");
        },3000)
      }
    }
   

  }
  useEffect(()=>{
    Birthday();
  },[])
  return (
   <>
   {
    logindata.length===0 ? "error":<>
    <h1>detalis page </h1>
    </>
   }
   </>
  )
}

export default Details