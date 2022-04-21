import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { BsEmojiSmile } from 'react-icons/bs'
import { AiOutlineFileGif } from 'react-icons/ai'
import { RiGalleryFill } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import './tweet.css'
import { authentication } from '../../Firebase/firebase';

const Tweet = ({ show, onClose, setIsLoadingTweet }) => {

  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const onClickTweet = async (e) => {
    try {
      const body = {
        "tweet": text,
        "email": authentication.currentUser.email,
        "timestamp": new Date().toISOString(),
      }
      setIsLoadingTweet(true);
      const res = await fetch('http://localhost:5000/tweet', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
      })

      const data = await res.json()
      setIsLoadingTweet(false);

      onClose()

      setText('')


    }
    catch (e) {
      alert('Failed to add, please try again later')
      console.log(e);
    }
  }

  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className='modal-d'>
          <div className="modal-header">
            <FaTimes onClick={onClose} className="modal-close-button" />
          </div>
          <div className='modal-body'>
            <div className='modal-profile-picture'>
              <CgProfile className='modal-picture' style={{ color: '#50b7f5' }} />
            </div>
            <div className="modal-text-footer">
              <div className='modal-text'>
                <textarea
                  className='modal-textarea'
                  placeholder='Whats Happening?'
                  value={text}
                  onChange={handleChange}
                />
              </div>
              <div className="modal-footer">
                <div className='additions'>
                  <div><RiGalleryFill className='modal-additional-icons' style={{ color: '#50b7f5' }} /> </div>
                  <div><BsEmojiSmile className='modal-additional-icons' style={{ color: '#50b7f5' }} /></div>
                  <div><AiOutlineFileGif className='modal-additional-icons' style={{ color: '#50b7f5' }} /></div>
                </div>
                <div className='tweet-button-modal' >
                  <button onClick={onClickTweet} className="submit-button">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweet

