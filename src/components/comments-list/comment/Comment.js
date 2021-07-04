import React from 'react'

const Comment = ({ deleteComment, userName, userText }) => {
  return (
    <li className="comments__item comment">
      <button className="comment__close-button" onClick={deleteComment}>Удалить</button>
      <p className="comment__name">{userName}</p>
      <p className="comment__text t__text">{userText}</p>
    </li>
  )
}

export default Comment