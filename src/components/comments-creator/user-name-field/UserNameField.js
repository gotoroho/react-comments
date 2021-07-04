import React from 'react'

const UserNameField = ({ handleChange, userData }) => {
  return (
    <input
      onChange={handleChange}
      value={userData}
      required
      type="text"
      name="userName"
      className="create-comment__name"
      placeholder="Ваше имя"
    ></input>
  )
}

export default UserNameField