import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css";
const Signup = () => {
    const [data,setData]=useState([]);
    const [inpval, setInpval]=useState({
        name:"",
        email:"",
        date:"",
        password:""
    })

    const getdata=(e)=>{
        const {name,value}=e.target;
setInpval(()=>{
    return {
        ...inpval,
        [name]:value
    }
})
    }

    const addData =(e)=>{
        e.preventDefault();
        // console.log(inpval);
        const {name,email,date,password}=inpval;
        if(name===""){
            alert("name field required");
        }
        else if(email===""){
            alert("email field is required");
        }
        else if(!email.includes("@")){
            alert("enter valied emaild id");
        }
        else if (date===""){
            alert("date filed is required");
        }
        else if(password===""){
            alert("password field is required");
        }
        else if(password.length<5){
            alert("password is short");
        }
        else{
            console.log("data add succesfully");
            localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
        }
    }

  return (
    <div className='box_1'>
        <h1>Sign Up</h1>
        <div>
            <form>
                <input type='text' name='name' onChange={getdata} placeholder='Enter your Name'></input><br/>
                <input type='email' name='email' onChange={getdata} placeholder='Enter email Id'></input><br/>
                <input type='date' name='date' onChange={getdata} ></input><br/>
                <input type='password'name='password' onChange={getdata} placeholder='Enter your password'></input><br/>
                <button onClick={addData}>Submit</button>
            </form>
            <p>Already Have an Accout <span><NavLink to="/login">SignIn</NavLink></span></p>
        </div>

    </div>
  )
}

export default Signup