import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { authentication } from './Firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticationPage from './components/Authentication/AuthenticationPage';
import Post from './components/Posts/Post';
import Home from './components/HomePage/Home';
import DisplayTweet from './components/DisplayTweetPage/DisplayTweet';
import ProtectedRoute from './ProtectedRoute';





function App() {
  const [user] = useAuthState(authentication);

    // <div>    <DisplayTweet/> </div>



  return (
  <Router>
       <Routes>
         <Route path='/' element={<ProtectedRoute auth={true}/>} />
        <Route exact path="/login" element ={<AuthenticationPage />} />
      </Routes>
  </Router> )

  // return (
  //   user ? <DisplayTweet /> : <AuthenticationPage/>
  // );
  
}

export default App;
