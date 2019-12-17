let nextTodoId = 0
let nextComment = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = id => ({
  type: 'DELETE_TODO',
  id
})

export const addComment = (id, text) => ({
  type: 'ADD_COMMENT',
  id,
  commentId: nextComment++,
  text
})

export const updateComment = (id, commentId, text) => ({
  type: 'UPDATE_COMMENT',
  id,
  commentId,
  text
})

export const deleteComment = (id, commentId) => ({
  type: 'DELETE_COMMENT',
  id,
  commentId,
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
