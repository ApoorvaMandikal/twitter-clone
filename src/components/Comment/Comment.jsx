import { CgProfile } from 'react-icons/cg'
import { authentication } from '../../Firebase/firebase'
import './comment.css'


const Comment = ({ comment }) => {

    return (
        <div className='comment-container'>

            <div className='comment-details'>
                <div className='picture'>
                    <div className='profilepicture'>
                        <CgProfile className='picture' style={{ color: '#50b7f5' }} />
                    </div>
                </div>

                <div className='userdetails-comment'>
                    <div className='comment-user-dets'>
                        <div className='user-name'> {authentication.currentUser.displayName} </div>
                        <div className='user-handle' style={{ opacity: 0.5 }}>@{authentication.currentUser.email}</div>
                    </div>
                    <div className='replyingTo'> Replying to @{authentication.currentUser.email}</div>
                    <div className='comment-content'>
                        <div className='comment'>{comment.comment}</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Comment
