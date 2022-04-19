import { useState } from "react"
import { authentication, signOut } from '../../Firebase/firebase'
import Tweet from "../Tweet/Tweet"
import { FaTimes } from 'react-icons/fa'
import './mobilsidebar.css'
import {RiHome7Fill, RiHashtag} from 'react-icons/ri'
import {AiOutlineBell} from 'react-icons/ai'
import {BiEnvelope,BiBookmark} from 'react-icons/bi'
import BsListCheck from 'react-icons/bs'
import { FaTwitter, FaList } from 'react-icons/fa'
import { CgProfile, CgMoreO } from 'react-icons/cg'


const MobileSidebar = (props) => {

  const [show, setShow] = useState(false);

  const logout = () => {
    authentication.signOut();
  }

  return (
    <div className={`onClick-sidebar ${props.open ? 'open' : ''}`} onClick={props.onClose}>
      <div className="mobile-sidebar" onClick={e => e.stopPropagation()}>

        <div className="close-button-mobile">
          <FaTimes onClick={props.onClose} className="close-button"/> 
        </div>

        <div className="mobile-components">
          <div className='component-mobile'>
            <div className='button-mobile'><RiHome7Fill className='logo-mobile'/>
            <span className='span-home-mobile'>Home</span></div>
        </div>
        <div className='component-mobile'>
            <div className='button-mobile'><RiHashtag className='logo-mobile'/>
            <span className='span-home-mobile'>Explore</span></div>
        </div>
        <div className='component-mobile'>
            <div className='button-mobile'><AiOutlineBell className='logo-mobile'/>
            <span className='span-home-mobile'>Notifications</span></div>
        </div>
        <div className='component-mobile'>
            <div className='button-mobile'><BiEnvelope className='logo-mobile'/>
            <span className='span-home-mobile'>Messages</span></div>
        </div>
        <div className='component-mobile'>
            <div className='button-mobile'><BiBookmark className='logo-mobile'/>
            <span className='span-home-mobile'>
              bookmark</span></div>
        </div>
        <div className='component-mobile'>
            <div className='button-mobile'><FaList className='logo-mobile'/>
            <span className='span-home-mobile'>Lists</span></div>
        </div>
        <div className='component-mobile'>
            <div className='button-mobile'><CgProfile className='logo-mobile'/>
            <span className='span-home-mobile'>Profile</span></div>
        </div>
        <div className='component-mobile'>
          <a href='/'>
            <div className='button-mobile'><CgMoreO className='logo-mobile'/>
            <span className='span-home-mobile'>More</span></div>
          </a>
        </div>
        </div>


        <div className="tweet-button-mobile">
        <div className='tweet-button'>
          <button className='tweetButton' onClick={() => setShow(true)}> Tweet </button>
          <Tweet onClose={() => setShow(false)} show={show} />
        </div>
        </div>

        <div className="logout-button-mobile">
          <button onClick={logout} className='logoutButton'> Logout </button>
        </div>

      </div>
    </div>

  )
}

export default MobileSidebar
