import { useEffect, useState, Redirect } from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { authentication } from '../../Firebase/firebase';
import { signInWithPopup, GoogleAuthProvider, setPersistence, inMemoryPersistence, fetchSignInMethodsForEmail } from "firebase/auth";
import "./AuthenticationPage.css"
import { FaTwitter } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'
import Sidebar from '../Sidebar/Sidebar';
import Home from '../HomePage/Home'
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';


const AuthenticationPage = () => {

  const [isUserSignedIn, setIsUserSignedIn] = useState([]);

  const signInWithFirebase = async ()=>{
     await setPersistence(authentication, inMemoryPersistence)
    .then(()=>{
    const provider = new GoogleAuthProvider();
    return signInWithPopup(authentication, provider)
    }).catch((error) => {
      console.log(error.message)
    })
  }
  //   try{
  //     const signIn = await signInWithPopup(authentication, provider);     
  //     if(signIn.user.emailVerified === true){
  //       console.log(signIn);
  //       setIsUserSignedIn(true);
  //     } else
  //       {
  //         setIsUserSignedIn(false);
  //       }
  //   }
  //   catch(e) {
  //     alert(e);
  // }
  // useEffect(() => {
  
  
   
  

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
