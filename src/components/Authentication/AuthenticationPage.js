import { useEffect, useState, Redirect } from "react"
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import { authentication } from '../../Firebase/firebase';
import { signInWithPopup, GoogleAuthProvider, setPersistence, inMemoryPersistence, fetchSignInMethodsForEmail,browserSessionPersistence } from "firebase/auth";
import "./AuthenticationPage.css"
import { FaTwitter } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import Sidebar from '../Sidebar/Sidebar';
import Home from '../HomePage/Home'
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';
import { useAuthState } from "react-firebase-hooks/auth";


const AuthenticationPage = () => {

  const [isUserSignedIn, setIsUserSignedIn] = useState([]);
  const [user] = useAuthState(authentication)

  const signInWithFirebase = async (navigate)=>{
     await setPersistence(authentication, browserSessionPersistence)
    .then(()=>{
    const provider = new GoogleAuthProvider();
    return (
      signInWithPopup(authentication, provider).then((result)=>{

        if (result) {
          navigate("/", { replace: true });
        }
      }).catch((error)=>{
        alert('unable to find user')
        console.log(error.message)
      })
      )
   
    }).catch((error) => {
      alert('Error signing in, please try later')
      console.log(error.message)
    })
  }

  let navigate = useNavigate();


  return (
    
    <div className='loginPage'>
      <div className='image-logo'>
        <FaTwitter className= 'left-logo'/>
      </div>
      <div className='signIn-creds'>
        <div className='login-form'>
          <FaTwitter className='right-logo'/>
          <div className='p1'><p className='p1'>Happening now</p></div>
          <div className='p2'><p className='p2'>Join Tweeter today.</p></div>
          <button
            onClick={() => signInWithFirebase(navigate)}
            className='google-signin'>
             <FaGoogle class="google-icon"/> {/* {isUserSignedIn ? <Sidebar /> : <Redirect to="/" />} */}
            Sign in with Google
          </button>
          {/* <Routes>
          <Route path = '/' 
              element={( 
                <>
                    {isUserSignedIn ? <Sidebar /> : <Redirect to="/" />}
                </>
              )}/>
          </Routes> */}
        </div>
       
      </div>
    </div>
    
  )
}

//useEffect(()=> {
 // const checkLoggedIn = async() => {
 //   const isLoggedin = localStorage.getItem("accessToken");
 //   )
 // }





export default AuthenticationPage
