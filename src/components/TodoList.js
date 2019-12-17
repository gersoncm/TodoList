import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import styled from 'styled-components'


const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  
  <ListContainer>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        onDelete={() => deleteTodo(todo.id)}
      />
    )}
  </ListContainer>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

const ListContainer = styled.div`
`

export default TodoList
