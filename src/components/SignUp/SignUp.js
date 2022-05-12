import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./SignUp.css"
import SocialLogin from './SocialLogin/SocialLogin';

const SignUp = () => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [error,setError]=useState('');
    const navigate= useNavigate();

    const [CreateUserWithEmailAndPassword,user,loading]= useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const handleEmailBlur=event=>{
        setEmail(event.target.value);
    }
    const handlePasswordBlur=event=>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur=event=>{
        setConfirmPassword(event.target.value)
    }
    if(user){
       
        navigate("/Home");
        
    }
    const handleCreateUser=event=>{
      event.preventDefault();
      if(password !== confirmPassword ){
          setError("Your two passwords didn't match");
          return;
      }
      if(password.length<6){
          setError("Password must be 6 characters or longer")
      }
      CreateUserWithEmailAndPassword(email,password);
    }




    return (
        <div>
            <div style={{marginTop:"100px"}} className='register-form'>
            <h2 className="text-primary" style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleCreateUser}>

                <input onBlur={ handleEmailBlur} type="email" name="email" id="" placeholder='Email Address' required />

                <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" placeholder='Confirm Password' required />
                <p style={{color:'red'}}>
             {error}
             {
             loading &&  <Spinner animation="border" variant="success" />
         }
         </p>
             
                <input
                 
                    className='w-50 mx-auto btn btn-info fw-bolder mt-2'
                    type="submit"
                    value="SignUp" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
           <SocialLogin></SocialLogin>
        </div>
        </div>
    );
};

export default SignUp;