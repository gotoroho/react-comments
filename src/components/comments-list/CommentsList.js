import React from 'react'
import Comment from './comment/Comment'

const CommentsList = ({ comments, deleteComment }) => {
  localStorage.setItem('comments', JSON.stringify(comments))

  const commentsList = comments.map((comment) => {
    const { id, name, text } = comment

    return (
      <Comment
        key={id}
        userName={name}
        userText={text}
        deleteComment={() => deleteComment(id)}
      />
    )
  })
  
  return (
    <ul className="comments">
      {commentsList}
    </ul>
  )
}

export default CommentsList