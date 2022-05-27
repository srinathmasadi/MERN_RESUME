import React from 'react';
import {useState,useEfffect} from 'react'
import {FaSortAlphaDownAlt, FaUser} from 'react-icons/fa';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [phone,setPhone] = useState();
  const [confirmPassword,setConfirmPassword] = useState("");
  
  const handelRegister = () => {
    axios.post(`http://localhost:5000/user/register`, {
      email,name,phone,password,confirmPassword
    }).then((response)=> {
      if(response.status === 200) {
        toast.success(response.data.message);
        localStorage.setItem('token',response.data.token)
      } 
      console.log(response.data);
    }).catch((e)=> {
      toast.error(e.response.data.message)
    })
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      
       <div className="signUp">
       <input type="text" name="email" id=""  placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
          <input type="email" name="email" id=""  placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="number" name="phone" id="" placeholder='phone' onChange={(e)=>{setPhone(e.target.value)}}/>
          <input type="password" name="password" id=""  placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
          <input type="password" name="cPassword" id=""  placeholder='Re-enter password'onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
       </div>
       <div className='button'>
          <button onClick={handelRegister}>Sign-In</button>
          <ToastContainer position="bottom-left"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover />
       </div>
        
      
    </>
  )
}

export default Register