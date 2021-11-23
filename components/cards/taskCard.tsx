import styles from './cards.module.scss'
import type { TaskInfo } from './cardContainer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import ColorIcon from './colorIcon'

interface TaskCardProps {
  task: TaskInfo,
  taskIdx: number,
  setTasks: Function
}

const TaskCard = ({ task, taskIdx, setTasks } : TaskCardProps) => {

  const [dropColorMenu, setDropColorMenu] = useState(false);
  const [colorOrder, setColorOrder] = useState<string[]>(['lightblue', 'yellow', 'red']);

  useEffect(() => {
    setTasks((prev: TaskInfo[]) => {
      prev[taskIdx].color = colorOrder[0];
      return prev;
    })
  }, [colorOrder])

  return (
    <div className={styles.taskCard_container}>
      <div className={styles.task_container}>
        {task.text}
      </div>
      <span className={styles.taskColor_container} onClick={() => setDropColorMenu(!dropColorMenu)}>
          <ColorIcon color={colorOrder[0]} setColorOrder={setColorOrder}/>
          {
            dropColorMenu &&
              <div>
                <ColorIcon color={colorOrder[1]} setColorOrder={setColorOrder}/>
                <ColorIcon color={colorOrder[2]} setColorOrder={setColorOrder}/>
              </div>
          }
      </span>
    </div>
  )
}

export default TaskCard;