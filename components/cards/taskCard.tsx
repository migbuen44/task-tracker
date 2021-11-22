import styles from './cards.module.scss'

interface TaskCardProps {
  task: string
}

const TaskCard = ({ task } : TaskCardProps) => {
  return (
    <div className={styles.taskCard_container}>
      <div className={styles.task_container}>
        {task}
      </div>
    </div>
  )
}

export default TaskCard;