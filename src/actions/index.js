import { v1 as uuidv1 } from 'uuid';

export const createComment = (name, text) => {
  const id = uuidv1()

  return {
    type: 'CREATE_COMMENT',
    name,
    text,
    id
  }
}

export const deleteComment = (id) => {
  return {
    type: 'DELETE_COMMENT',
    id
  }
}