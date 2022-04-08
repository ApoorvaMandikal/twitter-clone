import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import {BsEmojiSmile} from 'react-icons/fa'
import {GrGallery} from 'react-icons/gr'
import {AiOutlineFileGif} from 'react-icons/ai'
import './tweet.css'

const Tweet = (props) => {

  const {user, timestamp, onTweet} = props;
    const [text, setText] = useState('')

    const handleChange = (e) => {
      setText(e.target.value)
    }
    
    const onSubmit = (e)=>{
      e.preventDefault()
      onTweet({text})
      setText('')
      //console.log(text);
      //timeStamp: 545986.5
    }
   
  return (
    <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className='modal-d'>
          <div className="modal-header">
          <FaTimes onClick={props.onClose} className="close-button"/>
          </div>
          <div className="modal-body">
          <input type='text' 
            placeholder='Whats Happening?' 
            value={text} 
            onChange = {handleChange}
          />
          </div>
          <div className="modal-footer">
            <button onClick={onSubmit} className="submit-button">
              Tweet
            </button>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Tweet

