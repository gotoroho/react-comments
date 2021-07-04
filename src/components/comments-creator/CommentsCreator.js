import React, { Component } from 'react'

import UserNameField from './user-name-field/UserNameField'
import UserTextField from './user-text-field/UserTextField'

class CommentsCreator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userName: '',
      userText: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    const { state: { userName, userText }, props: { createComment } } = this

    createComment(userName, userText)
    this.setState({ userName: '', userText: '' })
  }

  handleChange(e) {
    const { name: commentKey, value: commentValue } = e.target

    this.setState({ [commentKey]: commentValue })
  }

  render() {
    const { state: { userName, userText }, handleChange, handleSubmit } = this

    return (
      <form id="js-create-comment" className="create-comment" onSubmit={handleSubmit}>
        <UserNameField
          userData={userName}
          handleChange={handleChange}
        />

        <UserTextField
          userData={userText}
          handleChange={handleChange}
        />

        <button type="submit" className="create-comment__submit-button">Отправить</button>
      </form>
    )
  }
}

export default CommentsCreator