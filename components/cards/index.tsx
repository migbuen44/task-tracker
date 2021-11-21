import CardContainer from './cardContainer';
import styles from './cards.module.scss';

const CardMain = () => {
  return (
    <div className={styles.main_container}>
      <CardContainer idx={0}/>
      <CardContainer idx={1}/>
      <CardContainer idx={2}/>
    </div>
  )
}

export default CardMain;