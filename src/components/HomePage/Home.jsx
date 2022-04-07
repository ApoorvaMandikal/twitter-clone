import { useState } from "react"
import { authentication } from "../../Firebase/firebase"
import Post from "../Posts/Post"
import Sidebar from "../Sidebar/Sidebar"
import "./home.css"

const Home = () => {
  const [tasks, setTasks] = useState([])
   const addTask = (task) =>{
  //   const res = await fetch('http://localhost:5000/tasks', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(task)
  //   })
  
  //   const data = await res.json()
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = {id, ...task}
   setTasks([...tasks, newTask])
   }

  return (
      <div className="home-container">
        <Sidebar className="container-sidebar" />
            <div className="posts-container">
            Welcome
            {
                authentication.currentUser.email
            }
            <Post className="post" />
            </div>

    </div>
  )
}

export default Home
