// Lakukan import useState dengan import React, {useState} from react
// lakukan import createContext terlebih dulu.
import React, {useState, createContext} from 'react'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'

// Tempatkan data pada object Context menggunakan Context.Provider
export const TodoContext = createContext()

const App = () =>{
  // Definisikan state dari todo dengan const [todos, setTodos = useState(nilai awal)  
  const [todos, setTodos] = useState([
    {
      id: 1,
      judul: "Selesaikan React Progate",
      komplit: false
    },
    {
      id: 2,
      judul: "Selesaikan Udemy JS",
      komplit: false
    },
    {
      id: 3,
      judul: "Belajar apa saja",
      komplit: false
    },
  ])

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId){
        todo.komplit = !todo.komplit
      }
      return todo
    })
    // Gunakan setTodos daripada this.setState
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => {
      return todo.id !== todoId
    })
    // Gunakan setTodos daripada this.setState
    setTodos(updatedTodos)
  }

  const addTodo = (todoJudul) => {
    if (todoJudul === ''){
      return
    }

    const newTodo = {
      id: todos.length + 1,
      judul: todoJudul,
      komplit: false
    }

    const updatedTodos = todos.concat(newTodo)
    // Gunakan setTodos daripada this.setState
    setTodos(updatedTodos)
  }

  return (
    <TodoContext.Provider value={{toggleCompleted, deleteTodo}}>
    <div style={{textAlign: 'center', padding: '12px'}}>
      <h1>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} />
    </div>
    </TodoContext.Provider>
  )

}

export default App;