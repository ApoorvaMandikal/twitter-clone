import Post from "../Posts/Post"
import Tweet from "../Tweet/Tweet"
const Tweets = ({posts, onDelete}) => {
  return (
      <>
    {posts.map((post) =>(
        <Post key={post.id} post ={post} onDelete={onDelete}></Post>
    ))}
    </>
  )
}

export default Tweets
