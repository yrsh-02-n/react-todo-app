import { useEffect, useRef } from 'react'
import styles from './Button.module.css'

function Button(props) {
  const { children, isCompleted } = props
  const buttonRef = useRef(null)

  // Add a class to a button depending on the parent id
  function buttonParentCheck(parentID, buttonClass) {
    if (buttonRef.current) {
      const buttonParent = buttonRef.current.parentNode

      buttonParent.id === parentID
        ? buttonRef.current.classList.add(`${buttonClass}`)
        : buttonRef.current.classList.add(styles.button)
    }
  }

  // Additional function tied to the id of the parent of the buttons to change buttons class
  // There may be an easier way, but it works
  function isCompletedButton(parentID) {
    if (buttonRef.current) {
      const buttonParent = buttonRef.current.parentNode

      buttonParent.id === parentID
        ? buttonRef.current.classList.add(styles.buttonTodoItemCompleted)
        : buttonRef.current.classList.remove(styles.buttonTodoItemCompleted)
    }
  }

  // buttonRef, parent ID, button class
  useEffect(() => {
    buttonParentCheck('todoForm', styles.buttonForm)
    buttonParentCheck(
      'todoItemControls',
      buttonRef.current.id === 'removeTodo'
        ? styles.buttonRemoveTodoItem
        : styles.buttonTodoItem
    )
    isCompletedButton('todoItemControlsComplete')
    buttonParentCheck('todoControls', styles.buttonControls)
  }, [isCompleted])

  return (
    <button
      {...props}
      ref={buttonRef}
      className={`${styles.button}
      }`}
    >
      {children}
    </button>
  )
}

export default Button
