import { useState, useEffect } from 'react'
import {  useNavigate, useLocation } from 'react-router-dom'
import './displaytweet.css'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineFileGif, AiOutlineRetweet } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { RiGalleryFill } from 'react-icons/ri'
import { BsChat, BsEmojiSmile, BsArrowLeft } from 'react-icons/bs'
import Sidebar from '../Sidebar/Sidebar'
import { authentication } from "../../Firebase/firebase"
import RightSidebar from '../Right-Sidebar/RightSidebar'
import Comments from '../Comments/Comments'


const DisplayTweet = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }

    const [comments, setComments] = useState([])
    const [commentContent, setCommentContent] = useState('')

    
    const handleChange = (e) => {
        setCommentContent(e.target.value)
    }

    
    const onComment = async() => {
        try {
          const body = 
                {
                  "comment": commentContent,
                  "email": authentication.currentUser.email,
                  "timestamp": new Date().toISOString(),
                  "postId": location.state.post_details.id
                }
          const res = await fetch(`http://localhost:5000/comments`
          , {
            method: 'POST',
            headers: {  
              'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
          }
          )
          const data = await res.json()        
          setCommentContent('')
        }
        catch (e) {
          alert('Failed to add, please try again later')
          console.log(e);
        }
}

    useEffect(()=> {
        const getComments = async() => {
          const res = await fetch(`http://localhost:5000/comments/`)
          const data = await res.json()  
          const commentsFromServer = await fetchComments(location.state.post_details.id)
          setComments(commentsFromServer)
  
        }
        getComments()
        
      },[onComment])
    
      //Fetch Posts
      const fetchComments = async (id) => {
        const res = await fetch(`http://localhost:5000/comments?postId=${id}`)
        const data = await res.json()

        return data
      }

    return (
        <div className='container-displayTweetPage'>
            <Sidebar className="sidebar" id="sidebar" />

            <div className='displayTweets-withComments'>

                <div className='go-back'>
                    <BsArrowLeft className="goback-icon" onClick={handleClick} />
                </div>

                <div className='displayTweetPage'>
                    <div className='pic-userdeets'>
                        <div className='width-picUser'>
                            <div className='profilepicture'>
                                <CgProfile className='picture' style={{ color: '#50b7f5' }} />
                            </div>

                            <div className='user-deets'>
                                <div className='displayPage-user-name'> {authentication.currentUser.displayName} </div>
                                <div className='displayPage-user-handle' style={{ opacity: 0.5 }}>@{authentication.currentUser.email}</div>
                            </div>
                        </div>

                    </div>

                    <div className='post-content'>
                        <div className='tweet-content'>

                            <div className='tweet-wordings'>
                                {location.state.post_details.tweet}
                            </div>


                            <div className='timestamp-details'>
                                <div style={{ opacity: 0.5 }}>&bull;</div>
                                <div className='date-time' style={{ opacity: 0.5 }}>
                                    {/* {timestamp} */}14h
                                </div>
                            </div>


                            <div className='counter'>
                                <div className='counter-deets'>10 likes</div>
                            </div>



                            <div className='tweet-icons'>
                                <BsChat className='comment-icons' />
                                <FiHeart className='comment-icons' />
                                <AiOutlineRetweet className='comment-icons' />
                            </div>

                        </div>
                    </div>


                </div>

                <div className='compose-comment'>
                    <CgProfile className='picture' style={{ color: '#50b7f5' }} />
                    <div className='comment-content'>
                        <div className='textbox-comment'>
                            <textarea 
                                className="textbox" 
                                placeholder="Tweet your reply" 
                                value={commentContent}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>
                        <div className='additional-contents-reply'>
                            <div className='additions'>
                                <div><RiGalleryFill className='additional-icon' style={{ color: '#50b7f5' }} /> </div>
                                <div><BsEmojiSmile className='additional-icon' style={{ color: '#50b7f5' }} /></div>
                                <div><AiOutlineFileGif className='additional-icon' style={{ color: '#50b7f5' }} /></div>
                            </div>
                            <div className='reply-button'>
                                <button className='reply' onClick={onComment}>Reply</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Comments comments={comments}/>


            </div>

            <RightSidebar />
        </div>


    )
}

export default DisplayTweet
