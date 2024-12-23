import { RiDeleteBin7Line } from 'react-icons/ri'
import { RiCheckLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodoItem.module.css'

function TodoItem({ todo, removeTodo, toggleCompleteStatus }) {
  return (
    <div
      id="todoContainer"
      className={
        todo.isCompleted
          ? `${styles.todoContainer} ${styles.todoContainerComplete}`
          : styles.todoContainer
      }
    >
      <p className={styles.todoText}>{todo.todoText}</p>
      <div
        id={
          todo.isCompleted
            ? `${'todoItemControlsComplete'}`
            : `${'todoItemControls'}`
        }
        className={styles.todoItemControls}
      >
        <Button
          id="removeTodo"
          onClick={() => removeTodo(todo.id)}
          isCompleted={todo.isCompleted}
        >
          <RiDeleteBin7Line />
        </Button>
        <Button
          onClick={() => toggleCompleteStatus(todo.id)}
          isCompleted={todo.isCompleted}
        >
          <RiCheckLine />
        </Button>
      </div>
    </div>
  )
}

export default TodoItem
