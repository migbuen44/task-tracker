import CardContainer from './cardContainer';
import styles from './cards.module.scss';

const CardMain = () => {
  return (
    <div className={styles.main_container}>
      <CardContainer />
      <CardContainer />
      <CardContainer />
    </div>
  )
}

export default CardMain;