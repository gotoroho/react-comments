export const comments = (state = [], { type, name, text, id }) => {
  let newComments = []

  switch (type) {
    case 'CREATE_COMMENT':
      newComments = [
        ...state,
        {
          name,
          text,
          id
        }
      ]

      return newComments
    
    case 'DELETE_COMMENT':
      newComments = state.filter(comment => comment.id != id)

      return newComments
    
    default:
      return state
  }
}