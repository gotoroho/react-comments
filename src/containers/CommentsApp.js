import React, { Component } from 'react'

import './scss/CommentsApp.scss'

import CommentsList from '../components/comments-list/CommentsList'
import CommentsCreator from '../components/comments-creator/CommentsCreator'

import { connect } from 'react-redux'
import { createComment, deleteComment } from '../actions'

let CommentsApp = (props) => {
  const { comments, createComment, deleteComment } = props
  
  return (
    <div className="comments-app">
      <h1 className="t__title">Комментариум</h1>

      <CommentsList
        comments={comments}
        deleteComment={deleteComment}
      />

      <CommentsCreator
        createComment={createComment}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    comments: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteComment: (id) => dispatch(deleteComment(id)),
    createComment: (name, text) => dispatch(createComment(name, text))
  }
}

CommentsApp = connect(mapStateToProps, mapDispatchToProps)(CommentsApp)

export default CommentsApp;