import { useState } from 'react'
import {FaTimes} from 'react-icons/fa'
import {BsEmojiSmile} from 'react-icons/fa'
import {GrGallery} from 'react-icons/gr'
import {AiOutlineFileGif} from 'react-icons/ai'
import './tweet.css'

import React from 'react'

const Tweet = (props) => {

    const [text, setText] = useState('')
    // onSubmit = (e) => {

    //     props({text})

    //     setText('')
    // } 
   
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
            onChange = {(e) => setText(e.target.value)}
          />
          </div>
          <div className="modal-footer">
            <button onClick={props.onSubmit} className="submit-button">
              Tweet
            </button>
          </div>
        </div>
        </div>
      </div>
  )
}

export default Tweet

