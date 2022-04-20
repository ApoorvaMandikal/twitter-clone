import './rightSidebar.css'
import { RiHome7Fill } from 'react-icons/ri'
import { FaTwitter } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'

const RightSidebar = () => {
  return (
    <div className='container-Rightsidebar'>

      <div className='box-news'>
        <div className='box-contents'>

          <div className='heading-whatsHappening'><h2>What's Happening</h2></div>

          <div className='topics-trending'>
            <div className='trending'>
              <div className='genre-trending'>Music</div>
              <div>&nbsp; &bull; &nbsp; </div>
              <div className='word-trending'>Trending</div>
            </div>
            <div className='topic-trending'><h2>Taylor Swift</h2></div>
            <div className='no-tweets'>12.3K Tweets</div>
          </div>

          <div className='topics-trending'>
            <div className='trending'>
              <div className='genre-trending'>Art & Culture</div>
              <div>&nbsp; &bull; &nbsp; </div>
              <div className='word-trending'>Trending</div>
            </div>
            <div className='topic-trending'><h2>Episode 55</h2></div>
            <div className='no-tweets'>6300 Tweets</div>
          </div>

          <div className='topics-trending'>
            <div className='trending'>
              <div className='genre-trending'>Health</div>
              <div>&nbsp; &bull; &nbsp; </div>
              <div className='word-trending'>Live</div>
            </div>
            <div className='topic-trending'><h2>Covid-19 new variant</h2></div>
            <div className='no-tweets'>729 Tweets</div>
          </div>

          <div className='topics-trending'>
            <div className='trending'>
              <div className='genre-trending'>War</div>
              <div>&nbsp; &bull; &nbsp; </div>
              <div className='word-trending'>Trending</div>
            </div>
            <div className='topic-trending'><h2>Ukraine Strikes back!</h2></div>
            <div className='no-tweets'>62.3K Tweets</div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default RightSidebar
