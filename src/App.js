import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { authentication } from './Firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticationPage from './components/Authentication/AuthenticationPage';
import Post from './components/Posts/Post';
import Home from './components/HomePage/Home';
//import RateReviewIcon from '@mui/icons-material/RateReview'; //tweet a new post icon for mobile responsive






function App() {
  // return (
  //   <div>
  //     {/* <Router>
  //      <Routes>
  //       <Route exact path="/" element = {<AuthenticationPage />}></Route>
  //       <Route exact path='/home' element={<Home/>}/>
  //     </Routes>
  // </Router> */}
  const [user] = useAuthState(authentication);

  return (
    user ? <Home/> : <AuthenticationPage/>
  );
  
}

export default App;
