import { useState, useEffect } from "react"
import { authentication } from "../../Firebase/firebase"
import Sidebar from "../Sidebar/Sidebar"
import Tweets from "../Tweets/Tweets"
import MobileSidebar from "../Mobile-Sidebar/MobileSidebar"
import "./home.css"
import { CgProfile } from 'react-icons/cg'
import RightSidebar from "../Right-Sidebar/RightSidebar"


const Home = () => {

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
            </div>
          <RightSidebar className="rightSidebar"/>
        </div>  
  )
}

export default Home
