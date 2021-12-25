import styles from './loginSection.module.scss'
import Login from './login'

const LoginSection = () => {
  return (
    <div className={styles.main_container}>
      <Login />
    </div>
  )
}

export default LoginSection