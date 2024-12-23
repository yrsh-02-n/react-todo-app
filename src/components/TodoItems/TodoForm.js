import { useState } from 'react'
import { RiArrowRightLine } from 'react-icons/ri'
import Button from '../UI/Button'
import styles from './TodoForm.module.css'

function TodoForm({ addTodos }) {
  const [text, setText] = useState('')
  const [isFieldEmpty, setIsFieldEmpty] = useState(false)

  // Changes in input monitoring
  const textChangeHandler = (event) => {
    setText(event.target.value)
    setIsFieldEmpty(false)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()

    // empty field on submit check
    text && !/^\s*$/.test(text)
      ? addTodos(text) && setText('')
      : setIsFieldEmpty(true)
    setText('')
  }


  return (
    <form id="todoForm" className={styles.form} onSubmit={onSubmitHandler}>
      <input
        // Change class if empty field checked as true
        className={`${styles.input} ${!isFieldEmpty ? '' : styles.inputError}`}
        type="text"
        placeholder="Enter task text"
        value={text}
        onChange={textChangeHandler}
      />
      <Button type="submit" title="Submit">
        <RiArrowRightLine />
      </Button>
    </form>
  )
}

export default TodoForm
