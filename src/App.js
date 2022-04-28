import './App.css';
import { authentication } from './Firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticationPage from './components/Authentication/AuthenticationPage';
import DisplayTweet from './components/DisplayTweetPage/DisplayTweet';
import ProtectedRoute from './ProtectedRoute';





function App() {
  const [user] = useAuthState(authentication);

  return (
  <Router>
       <Routes>
         <Route path='/' element={<ProtectedRoute auth={user}/>} />
        <Route exact path="/login" element ={<AuthenticationPage />} />
        <Route exact path="/status/:id" element ={<DisplayTweet />} />
      </Routes>
  </Router> )

  // return (
  //   user ? <Home /> : <AuthenticationPage/>
  // );
  
}

export default App;
