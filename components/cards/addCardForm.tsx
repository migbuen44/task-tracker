import styles from './cards.module.scss'
import { useState } from 'react'
import type { FormEvent, ChangeEvent } from 'react'

interface AddCardFormProps {
  setTasks: Function,
  setAddCardIsOpen: Function,
  idx: number
}

const AddCardForm = ({ setTasks, setAddCardIsOpen, idx } : AddCardFormProps) => {

  const [taskInput, setTaskInput] = useState('');

  const handleAddCardSubmit = (e : FormEvent<HTMLFormElement>) => {
    //setTasks
    e.preventDefault();
    setTasks((prev: string[]) => [...prev, taskInput])
    const form = document.getElementById(`AddCardForm-${idx}`);
    if (form) (form as HTMLFormElement).reset();
  }

  const handleClickout = () => {
    setAddCardIsOpen(false);
  }

  const handleTaskInputChange = (e : ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value)
  }

  return (
    <div className={styles.addCardForm_container}>
      <form onSubmit={handleAddCardSubmit} id={`AddCardForm-${idx}`}>
        <input autoFocus onBlur={handleClickout} onChange={handleTaskInputChange}/>
      </form>
    </div>
  )
}

export default AddCardForm;