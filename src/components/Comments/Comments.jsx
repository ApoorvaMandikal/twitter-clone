import Comment from "../Comment/Comment"
import { useState } from "react"

const Comments = ({comments}) => {

    return (
        <>
      {comments.map((comment) =>(
          <Comment key={comment.id} comment ={comment}></Comment>
      ))}
      </>
  )
}

export default Comments
