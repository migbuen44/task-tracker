import styles from './cards.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

interface ColorIconProps {
  color: string
  setColorOrder: Function
}

const ColorIcon = ({ color, setColorOrder } : ColorIconProps) => {
  const COLOR_ICON_STYLE = {
    background: color
  }

  const handleIconClick = () => {
    setColorOrder((colorOrder : string[]) => {
      colorOrder = colorOrder.filter(current => current !== color);
      return [color, ...colorOrder];
    })
  }
  return (
    <div className={styles.taskColor_icon} style={COLOR_ICON_STYLE} onClick={handleIconClick}/>
  )
}

export default ColorIcon;