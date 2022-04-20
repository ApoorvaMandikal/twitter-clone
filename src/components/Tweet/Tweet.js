import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import {BsEmojiSmile} from 'react-icons/fa'
import {GrGallery} from 'react-icons/gr'
import {AiOutlineFileGif} from 'react-icons/ai'
import './tweet.css'
import { authentication } from '../../Firebase/firebase';

const Tweet = ({show, onClose, setIsLoadingTweet}) => {  

    const [text, setText] = useState('')

    const handleChange = (e) => {
      setText(e.target.value)
    }
    
    const onClickTweet = async (e)=>{
      try{
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
    catch(e){
      alert('Failed to add, please try again later')
      console.log(e);
    }
    }
   
  return (
    <div className={`modal ${show ? 'show' : ''}`} onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className='modal-d'>
          <div className="modal-header">
          <FaTimes onClick={onClose} className="close-button"/>
          </div>
          <div className="modal-body">
          <textarea 
            placeholder='Whats Happening?' 
            value={text} 
            onChange = {handleChange}
          />
          </div>
          <div className="modal-footer">
            <button onClick={onClickTweet} className="submit-button">
              Tweet
            </button>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Tweet

