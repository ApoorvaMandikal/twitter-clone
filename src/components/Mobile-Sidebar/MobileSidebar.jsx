import { useState } from "react"
import { authentication, signOut } from '../../Firebase/firebase'
import Tweet from "../Tweet/Tweet"
import { FaTimes } from 'react-icons/fa'
import './mobilsidebar.css'


const MobileSidebar = (props) => {

  const [show, setShow] = useState(false);

  const logout = () => {
    authentication.signOut();
  }

  return (
    <div className={`onClick-sidebar ${props.open ? 'open' : ''}`} onClick={props.onClose}>
      <div className="mobile-sidebar" onClick={e => e.stopPropagation()}>

        <div>
          <FaTimes onClick={props.onClose} className="close-button"/> 
        </div>

        <div className="tweet-button-mobile">
        <div className='tweet-button'>
          <button className='tweet' onClick={() => setShow(true)}> Tweet </button>
          <Tweet onClose={() => setShow(false)} show={show} />
        </div>
        </div>

        <div className="logout-button-mobile">
          <button onClick={logout} className='logout-button'> Logout </button>
        </div>

      </div>
    </div>

  )
}

export default MobileSidebar
