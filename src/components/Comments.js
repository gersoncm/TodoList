import React from 'react'
import { connect } from 'react-redux'
import { updateComment, deleteComment } from '../actions'
import { Icon, Divider, Tooltip, Modal, Input } from 'antd'
import styled from 'styled-components'

function Comments ({ dispatch, todoId, comments }) {
  const [ showEditModal, setShowEditModal ] = React.useState(false)
  const [ editComment, setEditComment ] = React.useState('')
  const [ commentId, setCommentId ] = React.useState('')
  const [ modalType, setModalType ] = React.useState('')

  const { TextArea } = Input;

  // function to edit a comment
  const handleUpdateComment = (commentId) => {
    if (!editComment.trim()) {
      return
    }
    dispatch(updateComment(todoId, commentId, editComment))
    setShowEditModal(!showEditModal)
    setEditComment('')
  }

  // function to delete a comment
  const handleDeleteComment = (commentId) => {
    console.log('delete', commentId)
    dispatch(deleteComment(todoId, commentId))
    setShowEditModal(!showEditModal)
    setEditComment('')
  }

  // open, close edit comment modal
  const handleToggleEditModal = () => {
    setShowEditModal(!showEditModal)
    setEditComment('')
  }

  // open modal with parameters to edit
  const openEditModal = (id, text, type) => {
    setModalType(type)
    setEditComment(text)
    setCommentId(id)
    setShowEditModal(true)
  }

  // html for edit modal
  const EditModal = () => {
    return (
      <Modal
        title={modalType === "Edit" ? 'Editar comentario' : 'Eliminar comentario'}
        visible={showEditModal}
        onOk={() => modalType ==='Edit' ? handleUpdateComment(commentId) : handleDeleteComment(commentId)}
        onCancel={ handleToggleEditModal }
        >
        {modalType === 'Edit' ? 
          <TextArea rows={4} onChange={e => setEditComment(e.target.value)} value={editComment === '' ? editComment : editComment}/>
          :
        <p>¿Está seguro que desea eliminar el comentario : "{editComment}"?</p>}   
      </Modal>
    )
  }

  return (
    <div>
      {comments.length > 0 ? 
       <div>
          {comments.map(c => 
          <div key={c.id}>
            <Divider />
            <CommentContent>
              <Comment>{c.text}</Comment>
              <div>
                <Tooltip title="Editar Comentario">
                  <Icon type="edit" onClick={() => openEditModal(c.id, c.text, 'Edit')} style={{ marginRight: '10px'}} theme="twoTone"/>
                </Tooltip>
                <Tooltip title="Eliminar Comentario">
                  <Icon type="delete" onClick={() => openEditModal(c.id, c.text, 'Delete')} theme="twoTone" twoToneColor="#eb2f96"/>
                </Tooltip>
              </div>
            </CommentContent>
            {EditModal()}
          </div>
          )}
        </div>
        : 
        <div>
          <Divider/>
          <Comment>
            No hay Comentarios
          </Comment>
        </div>
        }
    </div>
  )
}

const CommentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Comment = styled.p`
  font-size: 15px;
  margin-left: 30px;
`

export default connect()(Comments)
