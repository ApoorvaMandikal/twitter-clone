import Sidebar from '../Sidebar/Sidebar'
import './posts.css'
import {CgProfile} from 'react-icons/cg'
import {GrGallery} from 'react-icons/gr'
import {AiOutlineFileGif, AiOutlineRetweet} from 'react-icons/ai'
import {FiHeart} from 'react-icons/fi'
import {BsChat} from 'react-icons/bs'
import { authentication } from '../../Firebase/firebase'

//import {IoChatbubbleOutline} from 'react-icons/io5'


const Post = () => {

  const user = authentication.currentUser;

  return (
    <div className='container-postpage'>

      <div className='profile-picture'>
      <CgProfile className='profile-picture' style={{ color: '#50b7f5'}}/>
      </div>

      <div className='post-content'>
        <div className='user-dets'>
          <div className='user-name'>{user.displayName}</div>
          <div className='user-handle' style={{opacity: 0.5}}>@{user.email}</div>
          <div style={{opacity: 0.5}}>&bull;</div>
          <div className='date-time'style={{opacity: 0.5}}>14h</div>
        </div>
        <div className='content'>
          <div className='wordings'></div>
          <span></span>
          <div className='tweet-functionalities'>
            <BsChat className='icons'/>
            <FiHeart className='icons'/>
            <AiOutlineRetweet className='icons'/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Post
