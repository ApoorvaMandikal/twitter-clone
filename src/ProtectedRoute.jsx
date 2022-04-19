import { Navigate, Redirect, Route } from "react-router-dom";
import { authentication } from './Firebase/firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Home from "./components/HomePage/Home";

const ProtectedRoute = ({auth, ...restOfProps}) => {
    const [user] = useAuthState(authentication);

  return (

        auth ? <Home user={user}/>: <Navigate to="/login" />
      
  )
}

export default ProtectedRoute
