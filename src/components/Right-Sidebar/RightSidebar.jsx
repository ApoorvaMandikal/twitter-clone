import './rightSidebar.css'
import {RiHome7Fill} from 'react-icons/ri'
import { FaTwitter } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

const RightSidebar = () => {
  return (
    <div className='container-Rightsidebar'>

    <div className='sidebar-components'>

      <div className='top-half'>
      <div className='logo'><FaTwitter className='twitter-logo'/></div>
        
        
      <div className='home'>
        <a href='/'>
          <div className='home-button-sidebar'><RiHome7Fill className='home-logo'/>
          <span className='span-home'>Home</span></div>
        </a>
      </div>
        

      <div className='tweet-button'>
        <button className='tweet' />
      </div>
      </div>
      
    
      
      <div className='profile-info' >
        <div className='logout' >
          <CgProfile className='profile-picture' style={{ color: '#50b7f5'}}/>
          <div className= 'user-info' >
            <div className='user-name'>Hello</div>
            <div className='user-handle' style={{opacity: 0.5}}>@No</div>
          </div>
        </div>
      </div>

    </div>

  </div>
  )
}

export default RightSidebar
