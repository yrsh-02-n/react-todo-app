import { useState, useEffect } from 'react'
import TodoItem from './TodoItem'
import styles from './TodoList.module.css'

function TodoList({ todos, removeTodo, toggleCompleteStatus }) {
  const [counterText, setCounterText] = useState(`not`)

  const todosIsEmpty = () => {
    return todos.length === 0
  }

  useEffect(() => {
    const completedTasksCounter = todos.filter(
      (todo) => todo.isCompleted
    ).length
    setCounterText(
      !todosIsEmpty() ? (
        <>
          <span className={styles.completedTasksCounter}>
            {completedTasksCounter}
          </span>
          {` completed`}
        </>
      ) : (
        'not'
      )
    )
  }, [todos])

  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          toggleCompleteStatus={toggleCompleteStatus}
        />
      ))}
      
      <h2
        className={
          todosIsEmpty() ? styles.todoListTextEmpty : styles.todoListText
        }
      >
        You have {counterText} tasks
      </h2>
    </div>
  )
}

export default TodoList
