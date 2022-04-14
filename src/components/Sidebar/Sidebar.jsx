
import './sidebar.css'
import { useState } from 'react'
import {RiHome7Fill} from 'react-icons/ri'
import { FaTwitter } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { authentication, signOut } from '../../Firebase/firebase'
import Tweet from '../Tweet/Tweet'

const Sidebar = () => {

  const [showResults, setShowResults] = useState(false)
  const onClick  =()=>{
    setShowResults(wasOpened => !wasOpened);
  }

  const logout = () => {
    authentication.signOut();
}
const [show, setShow] = useState(false);
  

  return (
    <div className='container-sidebar'>

      <div className='sidebar-components'>

        <div className='top-half'>
        <div className='logo'><FaTwitter className='twitter-logo'/></div>
          
          
        <div className='home'>
          <a href='/'><RiHome7Fill className='home-logo'/>
          <span className='span-home'>Home</span> </a>
        </div>
          

        <div className='tweet-button'>
          <button className='tweet' onClick={()=>setShow(true)}> Tweet </button>
          <Tweet onClose={()=> setShow(false)} show={show}/>
        </div>
        </div>
        
      
        
        <div className='profile-info' onClick={onClick}>{ showResults ? <div className='slide-up-button'><div className='div-button'><button onClick={logout} className='logout-button'> Logout </button></div></div> : null }
          <div className='logout' >
            <CgProfile className='profile-picture' style={{ color: '#50b7f5'}}/>
            <div className= 'user-info' >
              <div className='user-name'>{authentication.currentUser.displayName}</div>
              <div className='user-handle' style={{opacity: 0.5}}>@{authentication.currentUser.email}</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Sidebar

