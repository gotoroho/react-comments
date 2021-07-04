import React from 'react'

const UserTextField = ({ handleChange, userData }) => {
  return (
    <textarea
      onChange={handleChange}
      value={userData}
      required
      rows="8"
      name="userText"
      className="create-comment__text"
      placeholder="Ваш комментарий"
    ></textarea>
  )
}

export default UserTextField