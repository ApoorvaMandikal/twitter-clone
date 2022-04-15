import { useState, useEffect } from "react"
import { authentication } from "../../Firebase/firebase"
import Post from "../Posts/Post"
import Sidebar from "../Sidebar/Sidebar"
import Tweets from "../Tweets/Tweets"
import MobileSidebar from "../Mobile-Sidebar/MobileSidebar"
import "./home.css"
import { CgProfile } from 'react-icons/cg'


const Home = () => {

  const [showResults, setShowResults] = useState(false)
  const onClick  =()=>{
    setShowResults(wasOpened => !wasOpened);
  }

  const [open, setOpen] = useState(false);


    const [posts, setPosts] = useState([])
    const [tweet, setTweet] = useState([])

    useEffect(()=> {
      const getPosts = async() => {
        const res = await fetch('http://localhost:5000/tweet')
        const data = await res.json()  
        const postFromServer = await fetchPosts()
        setPosts(postFromServer)

      }
      getPosts()
    }, [])
  
    //Fetch Posts
    const fetchPosts = async () => {
      const res = await fetch('http://localhost:5000/tweet')
      const data = await res.json()
  
      return data
    }
  
    //Fetch Post
    const fetchPost = async (id) => {
      const res = await fetch(`http://localhost:5000/tweet/${id}`)
      const data = await res.json()
  
      return data
    }

    const deletePost = async (id) => {
      await fetch(`http://localhost:5000/tweet/${id}`, {
        method: 'DELETE'
      })
      console.log(id)
      setPosts(posts.filter((post)=> post.id!==id))
    }

      
    //ComposeTweet
      const tweetContent = (text) => {
        setTweet([...text, tweetContent]);
        console.log(text);
      }
      // console.log(tweet);
  
//    const addTask = (task) =>{
//   //   const res = await fetch('http://localhost:5000/tasks', {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-type': 'application/json'
//   //     },
//   //     body: JSON.stringify(task)
//   //   })
  
//   //   const data = await res.json()
//   const id = Math.floor(Math.random() * 10000) +1
//   const newTask = {id, ...task}
//    setTasks([...tasks, newTask])
//    }

      const str = authentication.currentUser.displayName
  return (
      <div className="home-container">
        <Sidebar className="sidebar" id="sidebar" onTweet = {tweetContent}/>
            <div className="posts-container">
              <div className="welcome">
                <div className="mobile-home-logo">
                  <div className="sidebar-button">
                    <CgProfile className='profile-picture' style={{ color: '#50b7f5'}} onClick={()=>setOpen(true)}/>
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
              <Tweets className="post" posts={posts} onDelete={deletePost} onTweet = {tweetContent}/>
            </div>
        </div>  
  )
}

export default Home
