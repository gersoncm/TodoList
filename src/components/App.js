import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styled from 'styled-components'

const App = () => (
  <Container>
    <Header >
      <Title>Mi lista de tareas</Title>
      <AddTodo />
    </Header>
    <VisibleTodoList />
    <Footer />
  
  </Container>
)

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto; 
  padding: 30px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0px 6px 19px rgba(41, 76, 143, 0.12);
`

const Header = styled.div`
  padding-bottom: 20px;
`

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 20px;
`

export default App
