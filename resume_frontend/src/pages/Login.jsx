import axios from 'axios';
import React from 'react';
import {useState,useEfffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword]=useState('')

 const handleLogin = () => {
   axios.post(`http://localhost:5000/user/login`,{
     email,password
   }).then((response)=>{
     if(response.status == 200) {
      
       toast.success(response.data.message);
       //localStorage.setItem('token',response.data.token)
     }
     console.log(response.data.message)
   }).catch((e)=> {
    //toast.error(e.response.data.message)
    toast.failure(e.response.data.message);
  })
 }


  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and create your resume</p>
      </section>
      <div className="signUp">
        <input type="email" name="email" id="" placeholder='email' onChange={(e)=> {setEmail(e.target.value)}}/>
        <input type="password" name="password" id="" placeholder='password' onChange={(e)=> {setPassword(e.target.value)}}/>
      </div>
      <div>
      <button onClick={handleLogin}>Logi-In</button>
      <ToastContainer />
      </div>
      
    </>
  )
}

export default Login