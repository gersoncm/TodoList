import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comments'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import { Icon, Tooltip, Checkbox, Modal, Input } from 'antd'

function Todo  ({ onClick, completed, text, id, onDelete, comments, dispatch }) {
  const [ showModal, setShowModal ] = React.useState(false)
  const [ showComments, setShowComments ] = React.useState(false)
  const [ addCommentInput, setAddCommentInput ] = React.useState('')
  const [ showDeleteModal, setShowDeleteModal ] = React.useState(false)

  const { TextArea } = Input;

  const handleToggleModal = () => {
    setShowModal(!showModal)
    setAddCommentInput('')
  }

  const handleToggleShowComments = () => {
    setShowComments(!showComments)
  }

  const handleShowDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal)
  }

  const handleDelete = () => {
    onDelete()
    setShowDeleteModal(!showDeleteModal)
  }

  const handleAddComment = () => {
    if (!addCommentInput.trim()) {
      return
    }
    dispatch(addComment(id, addCommentInput))
    setAddCommentInput('')
    setShowModal(!showModal)
    setShowComments(true)
  }

  const deleteModal = () => {
    return (
      <Modal
        title="Eliminar tarea"
        visible={showDeleteModal}
        onOk={handleDelete}
        onCancel={handleShowDeleteModal}
        >
        <p>¿Está seguro de eliminar la tarea "{text}"?</p>
      </Modal>
    )
  }

  return(
    <Container>
      <TodoContent>
        <Checkbox checked={completed} onChange={onClick}>
          {text}
        </Checkbox>
        <div>
          <Tooltip title={showComments? 'Ocultar comentarios' : 'Mostrar comentarios'}>
            <Icon 
              type={!showComments? 'eye-invisible' : 'eye'} 
              style={{ marginRight: '10px'}} 
              onClick={handleToggleShowComments} 
              theme="twoTone" twoToneColor={showComments ? "#52c41a" : "#eb2f96"}/>
          </Tooltip>
          <Tooltip title="Agregar comentario">
            <Icon type="plus-circle" style={{ marginRight: '10px'}} onClick={handleToggleModal} theme="twoTone"/>
          </Tooltip>
          <Tooltip title="Eliminar tarea">
            <Icon type="delete" onClick={handleShowDeleteModal} theme="twoTone" twoToneColor="#eb2f96"/>
          </Tooltip>
        </div>
      </TodoContent>
      {showComments ?  <Comment todoId={id} comments={comments}/> : null }
      <Modal
        title="Agregar Comentario"
        visible={showModal}
        onOk={handleAddComment}
        onCancel={handleToggleModal}
      >
        <TextArea rows={4} onChange={e => setAddCommentInput(e.target.value)} value={addCommentInput}/>
      </Modal>
      {deleteModal()}
    </Container>
  )
  
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

const Container = styled.div`
  padding: 10px 20px;
  margin-bottom: 20px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 6px 19px rgba(41, 76, 143, 0.12);
  border-radius: 8px;
  border: none;
`

const TodoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default connect()(Todo)
