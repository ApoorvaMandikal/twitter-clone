//import TwitterIcon from "@material-ui/icons/Twitter";
//import LogoutIcon from '@mui/icons-material/Logout';
import './sidebar.css'
import { useState } from 'react'
import {RiHome7Fill} from 'react-icons/ri'
import { FaTwitter } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

const Sidebar = () => {

  const [showResults, setShowResults] = useState(false)
  const onClick  =()=>{
    setShowResults(wasOpened => !wasOpened);
  }

  return (
    <div className='container-sidebar'>

      <div className='sidebar-components'>
          <div className='logo'><FaTwitter className='twitter-logo'/></div>
          
          
            <div className='home'>
            <a href='/'><RiHome7Fill className='home-logo'/>
              <span className='span-home'>Home</span> </a>
            </div>
          

        <div className='tweet-button'>
          <button className='tweet'> Tweet </button>
        </div>
        
      </div>

      <div className='profile-info' onClick={onClick}>{ showResults ? <div className='slide-up-button'><button className='logout-button'> Logout </button></div> : null }
        <div className='logout' >
          <CgProfile className='profile-picture' style={{ color: '#50b7f5'}}/>
          <div className= 'user-info' >
            <div className='user-name'>Apoorva</div>
            <div className='user-handle' style={{opacity: 0.5}}>@apoorva_mandikal</div>
          </div>
        </div>
        
      </div>


    </div>
  )
}

export default Sidebar

