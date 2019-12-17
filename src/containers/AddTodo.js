import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import styled from 'styled-components'
import { Input, Button } from 'antd'

function AddTodo ({ dispatch }) {
  const [ addTodoInput, setAddtodo ] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!addTodoInput.trim()) {
      return
    }
    dispatch(addTodo(addTodoInput))
    setAddtodo('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <AddContainer>
        <Input onChange={e => setAddtodo(e.target.value)} value={addTodoInput} />
        <Button type="submit" onClick={handleSubmit} style={{float:'right'}}>
          Agregar Tarea
        </Button>
      </AddContainer>
      </form>
    </div>
  )
}

const AddContainer = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default connect()(AddTodo)
