import { CgProfile } from 'react-icons/cg'
import './comment.css'


const Comment = () => {
    const posts =
    {
        "id": 1,
        "text": "Hello Tweeter",
        "comment": "Goodbye"
    }
    return (
        <div>
            <div className='comment-container'>

                <div className='pic-userdeets'>
                    <div className='width-picUser'>
                        <div className='profilepicture'>
                            <CgProfile className='picture' style={{ color: '#50b7f5' }} />
                        </div>

                        <div className='user-dets'>
                            <div className='user-name'> Apoorva </div>
                            <div className='user-handle' style={{ opacity: 0.5 }}>@lolololo</div>
                        </div>
                    </div>

                </div>

                <div className='content'>
                    <div className='comment'>{posts.comment}</div>
                </div>



            </div>
        </div>
    )
}

export default Comment
