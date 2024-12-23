import { v4 as uuidv4 } from 'uuid'
import { useState, useEffect } from 'react'
import './App.css'
import MainTitle from './components/MainTitle'
import Footer from './components/UI/Footer'
import TodoForm from './components/TodoItems/TodoForm'
import TodoList from './components/TodoItems/TodoList'
import TodoControls from './components/TodoItems/TodoControls'

function App() {
  let [todos, setTodos] = useState([])

  // Handlers
  const addTodoHandler = (text) => {
    const newTodo = {
      id: uuidv4(),
      todoText: text,
    }
    setTodos([newTodo, ...todos])
  }

  const resetTodoHandler = () => {
    setTodos([])
  }

  const removeTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      )
    )
  }

  const removeCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  // Save data to localStorage
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <div className="App">
      <>
        <MainTitle>React Todo App</MainTitle>
        <TodoForm addTodos={addTodoHandler} />
        <TodoList
          todos={todos}
          removeTodo={removeTodoHandler}
          toggleCompleteStatus={toggleTodoHandler}
        />
        <TodoControls
          todos={todos}
          resetTodoList={resetTodoHandler}
          removeCompletedTodos={removeCompletedTodosHandler}
        />
        <Footer />
      </>
    </div>
  )
}

export default App
