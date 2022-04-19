import Sidebar from '../Sidebar/Sidebar'
import './posts.css'
import {CgProfile} from 'react-icons/cg'
import {GrGallery} from 'react-icons/gr'
import {AiOutlineFileGif, AiOutlineRetweet} from 'react-icons/ai'
import {FiHeart} from 'react-icons/fi'
import {BsChat} from 'react-icons/bs'
import { authentication } from '../../Firebase/firebase'
import { useState } from 'react'
import Tweet from '../Tweet/Tweet'
import {FaTimes} from 'react-icons/fa'

//import {IoChatbubbleOutline} from 'react-icons/io5'


const Post = ({post, onDelete}) => {

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   tweetContent(text);

  //   setText(text);
  // };

  const user = authentication.currentUser;

  return (
    
    <div className='display-post'>
    <div className='container-postpage'>

      <div className='post-profile-picture'>
      <CgProfile className='picture' style={{ color: '#50b7f5'}}/>
      </div>

      <div className='post-content'>

        <div className='first-line'>
          <div className='user-dets'>
          <div className='user-name'>{user.displayName}
          </div>
          <div className='user-handle' style={{opacity: 0.5}}>@{user.email}</div>
          <div style={{opacity: 0.5}}>&bull;</div>
          <div className='date-time'style={{opacity: 0.5}}>
            {/* {timestamp} */}14h
          </div>
          </div>
          <div><FaTimes className='delete-button' onClick={()=>{onDelete(post.id)}}/></div>
        </div>
      
        <div className='content'>
          <div className='wordings'>
          {post.tweet}
          </div>
          <div className='tweet-functionalities'>
            <BsChat className='icons'/>
            <FiHeart className='icons'/>
            <AiOutlineRetweet className='icons'/>
          </div>
        </div>
      </div>
      
      
    </div>
    </div>
   
  )
}

export default Post
