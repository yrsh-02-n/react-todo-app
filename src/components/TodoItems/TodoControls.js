import { RiRefreshLine } from 'react-icons/ri'
import { RiDeleteBin7Line } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodoControls.module.css'

function TodoControls({ todos, resetTodoList, removeCompletedTodos }) {
  return (
    <div id="todoControls" className={styles.todoControls}>
      <Button
        title="Reset list"
        onClick={resetTodoList}
        disabled={todos.length === 0 ? true : false}
      >
        <RiRefreshLine />
      </Button>
      <Button
        title="Remove completed tasks"
        onClick={removeCompletedTodos}
        disabled={
          todos.filter((todo) => todo.isCompleted).length === 0 ? true : false
        }
      >
        <RiDeleteBin7Line />
      </Button>
    </div>
  )
}

export default TodoControls
