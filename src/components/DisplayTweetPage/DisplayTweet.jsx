import { useState } from 'react'
import { useMatch, useNavigate } from 'react-router-dom'
import Post from '../Posts/Post'
import './displaytweet.css'
import { CgProfile } from 'react-icons/cg'
import { GrGallery } from 'react-icons/gr'
import { AiOutlineFileGif, AiOutlineRetweet } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import { RiGalleryFill } from 'react-icons/ri'
import { BsChat, BsEmojiSmile, BsArrowLeft } from 'react-icons/bs'
import Sidebar from '../Sidebar/Sidebar'
import { authentication } from "../../Firebase/firebase"
import RightSidebar from '../Right-Sidebar/RightSidebar'
import Comment from '../Comment/Comment'


const DisplayTweet = () => {

    const [comment, setComment] = useState('')

    const onComment = () => {
        console.log(comment);
    }

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }

    // const {
    //     params: { id },
    //   } = useMatch('/DisplayTweet/:id');

    //   console.log(id)

    const posts =
    {
        "id": 1,
        "text": "Hello Tweeter",
        "comment": "Goodbye"
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
                                <div className='user-name'> Apoorva </div>
                                <div className='user-handle' style={{ opacity: 0.5 }}>@lolololo</div>
                            </div>
                        </div>

                    </div>

                    <div className='post-content'>
                        <div className='tweet-content'>

                            <div className='tweet-wordings'>
                                {posts.text}
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
                            <textarea type="text" className="textbox" placeholder="Tweet your reply" ></textarea>
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

                <Comment />


            </div>

            <RightSidebar />
        </div>


    )

    // <>
    // {posts.filter((post) =>(
    //     <Post key={post.id} post ={post}></Post>
    // ))}
    // </>
}

export default DisplayTweet
