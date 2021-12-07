import styles from './header.module.scss'
import Link from 'next/link'

const HeaderMain = () => {

  return (
    <div className={styles.container}>
      <span className={styles.login_button_container}>
        <Link href="/login" passHref>
          <button className={styles.logn_button}>Login</button>
        </Link>
      </span>
    </div>
  )
}

export default HeaderMain;