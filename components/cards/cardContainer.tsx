import styles from './cards.module.scss'
import { useState } from 'react'
import TaskCard from './taskCard'
import AddCardForm from './addCardForm'

interface CardContainerProps {
  idx: number
}

 export interface TaskInfo {
  text: string,
  color: string,
  members: string[]
}

const CardContainer = ( {idx} : CardContainerProps) => {

  const [tasks, setTasks] = useState<TaskInfo[]>([]);
  const [addCardIsOpen, setAddCardIsOpen] = useState(false);

  const handleAddTaskClick = () => {
    setAddCardIsOpen(true);
  }

  return (
    <div className={styles.card_container}>
      <div className={styles.card_wrapper}>
        {tasks.map((task, idx) =>
          <TaskCard key={`task-card-${idx}`} task={task} taskIdx={idx} setTasks={setTasks}/>
        )}
      </div>
      {addCardIsOpen ?
        <AddCardForm setTasks={setTasks} setAddCardIsOpen={setAddCardIsOpen} idx={idx}/>
        : <></>
      }
      <button className={styles.add_card_button} onClick={handleAddTaskClick}>
        Add Icon
      </button>
    </div>
  )
}

export default CardContainer;