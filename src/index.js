import React from "react";
import ReactDOM from "react-dom";

import CommentsApp from "./containers/CommentsApp";

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { comments } from './reducers'

let storageComments = localStorage.getItem('comments')
let initialComments = []

if (storageComments) initialComments = JSON.parse(storageComments)

const store = createStore(comments, initialComments)

ReactDOM.render(<Provider store={store}><CommentsApp /></Provider>, document.getElementById("root"));