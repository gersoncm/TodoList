const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          comments: [],
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'ADD_COMMENT':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, comments: [
              ...todo.comments, {
              id: action.commentId, 
              text: action.text
              }]
            }
          : todo
      )
    case 'DELETE_COMMENT':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, comments: todo.comments.filter(comment =>
            (comment.id !== action.commentId))}
          : todo
      )
    case 'UPDATE_COMMENT':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, comments: todo.comments.map(comment =>
            (comment.id === action.commentId)
              ? {...comment, text: action.text }
              : comment
            )}
          : todo
      )
    default:
      return state
  }
}

export default todos
