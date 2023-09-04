import React,{ useState } from 'react'
import "../App.css";
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const history=useNavigate();
    const [data,setData]=useState([]);
    const [inpval, setInpval]=useState({
        email:"",
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
       const getuser=localStorage.getItem("useryoutube");
       console.log(getuser);
        const {email,password}=inpval;
       if(email===""){
            alert("email field is required");
        }
        else if(!email.includes("@")){
            alert("enter valied emaild id");
        }
       
        else if(password===""){
            alert("password field is required");
        }
        else if(password.length<5){
            alert("password is short");
        }
        else{
           if(getuser && getuser.length){
            const userdata=JSON.parse(getuser);
            const userlogin=userdata.filter((el,k)=>{
                return el.email===email && el.password===password
            })
            if(userlogin.length===0){
                alert("invlaid details");
            }
            else{
                console.log("user login succesfully");
                localStorage.setItem("user_login",JSON.stringify( userlogin))
                history("/details");
            }
           }
        }
    }

  return (
    <>
     <div className='box_1'>
        <h1>Sign In</h1>
        <div>
            <form>
             
                <input type='email' name='email' onChange={getdata} placeholder='Enter email Id'></input><br/>
                <input type='password'name='password' onChange={getdata} placeholder='Enter your password'></input><br/>
                <button onClick={addData}>Submit</button>
            </form>
            <p>Already Have an Accout <span>SignIn</span></p>
        </div>

    </div>
  )
    </>
  )
}

export default Login