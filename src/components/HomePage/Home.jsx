import { useState, useEffect } from "react"
import { authentication } from "../../Firebase/firebase"
import Post from "../Posts/Post"
import Sidebar from "../Sidebar/Sidebar"
import Tweets from "../Tweets/Tweets"
import "./home.css"

const Home = () => {

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
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      })
      setPosts(posts.filter((post)=> post.id!==id))
    }

      
    //ComposeTweet
      const tweetContent = (text) => {
        setTweet([...text, tweetContent]);
        console.log(text);
      }
      console.log(tweet);
  
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

  return (
      <div className="home-container">
        <Sidebar className="container-sidebar"  onTweet = {tweetContent}/>
            <div className="posts-container">
            Welcome
            {
                authentication.currentUser.email
            }
            <Tweets className="post" posts={posts} onDelete={deletePost} onTweet = {tweetContent}/>
            </div>

    </div>
  )
}

export default Home
