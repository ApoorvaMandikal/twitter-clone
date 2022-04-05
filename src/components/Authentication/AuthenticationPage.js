import ReactDOM from 'react-dom';
import { useEffect, useState } from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { authentication } from '../../Firebase/firebase';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import "./AuthenticationPage.css"
import { FaTwitter } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import Post from '../Posts/Post'; 


const AuthenticationPage = () => {

  const signInWithFirebase = ()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
    .then((result) => { 
      console.log(result);
  })
  .catch((error) => {
    console.log(error)
  })
}

const [isUserSignedIn, setIsUserSignedIn] = useState(true);



  return (
    <div className='loginPage'>
      <div className='image-logo'>
        <center><FaTwitter className= 'left-logo'/></center>
      </div>
      <div className='signIn-creds'>
        <div className='login-form'>
          <FaTwitter className='right-logo'/>
          <div className='p1'><p className='p1'>Happening now</p></div>
          <div className='p2'><p className='p2'>Join Tweeter today.</p></div>
          <button
            onClick={signInWithFirebase}
            className='google-signin'>
            <FaGoogle class="google-icon"/>
            Sign in with Google
          </button>
        </div>
       
      </div>
    </div>
  )
}

export default AuthenticationPage
