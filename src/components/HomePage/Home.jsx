import { useState, useEffect } from "react"
import { authentication } from "../../Firebase/firebase"
import Tweet from "../Tweet/Tweet"
import Sidebar from "../Sidebar/Sidebar"
import Tweets from "../Tweets/Tweets"
import MobileSidebar from "../Mobile-Sidebar/MobileSidebar"
import "./home.css"
import { CgProfile } from 'react-icons/cg'
import { FaPlus } from "react-icons/fa";
import RightSidebar from "../Right-Sidebar/RightSidebar"
import { Container, Button, Link, lightColors, darkColors } from 'react-floating-action-button'



const Home = () => {

  const [show, setShow] = useState(false);

  const [showResults, setShowResults] = useState(false)

  const [isLoadingTweet, setIsLoadingTweet] = useState(false)

  const onClick  =()=>{
    setShowResults(wasOpened => !wasOpened);
  }

  const [open, setOpen] = useState(false);


    const [posts, setPosts] = useState([])

    useEffect(()=> {
      const getPosts = async() => {
        const res = await fetch('http://localhost:5000/tweet')
        const data = await res.json()  
        const postFromServer = await fetchPosts()
        setPosts(postFromServer)

      }
      getPosts()
      
    },[isLoadingTweet])
  
    //Fetch Posts
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:5000/tweet')
      const data = await res.json()
  
      return data
    }

    //Delete Post
    const deletePost = async (id) => {
      await fetch(`http://localhost:5000/tweet/${id}`, {
        method: 'DELETE'
      })
      console.log(id)
      setPosts(posts.filter((post)=> post.id!==id))
    }


  const str = authentication.currentUser.displayName

  return (
      <div className="home-container">
        <Sidebar className="sidebar" id="sidebar" setIsLoadingTweet={setIsLoadingTweet}/>
        

            <div className="posts-container">
              <div className="welcome">
                <div className="mobile-home-logo">
                  <div className="sidebar-button">
                    <CgProfile className='sidebar-profile-picture' style={{ color: '#50b7f5'}} onClick={()=>setOpen(true)}/>
                    <MobileSidebar onClose={()=> setOpen(false)} open={open}/>
                  </div>
                  <div><a href="/">Home</a></div>
                </div>
                <div className="welcome-greeting">
                 Welcome, &nbsp;
                 {
                     str.substring(0, str.indexOf(' '))
                 }
                </div>
              </div>
                <Tweets className="post" posts={posts} onDelete={deletePost}/>
                <Container className="floating-tweetB">
              <Button
                className = "fab"
                tooltip="Tweet!"
                // rotate={true}
                onClick={() => setShow(true)} 
                styles={{backgroundColor: '#50b7f5'}}>
                  <FaPlus style={{height: '2em', width: '2em', color: '#ffffff'}}/>
                </Button>
            </Container>
            <Tweet onClose={() => setShow(false)} show={show} />
            </div>
            
            
          <RightSidebar className="rightSidebar"/>
          {/* <Fab id="fab" color="secondary" aria-label="edit">
              <EditIcon />
            </Fab> */}
        </div>  
        
  )
}

export default Home
