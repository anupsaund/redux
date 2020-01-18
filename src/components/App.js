import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
const App = ({ match: { params } }) => {
  return (
    <div>
      <AddTodo />
      <TodoList filter={params.filter || 'SHOW_ALL'} />
      <Footer />
    </div>
  )
}
export default App