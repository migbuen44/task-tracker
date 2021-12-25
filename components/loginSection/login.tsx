import styles from './loginSection.module.scss'

const Login = () => {
  return (
    <div className={styles.login_container}>
      <form>
        <div>
          <label className={styles.email_input}>Email</label>
          <input />
        </div>
        <div>
          <label className={styles.password_input}>Password</label>
          <input />
        </div>
      </form>
    </div>
  )
}

export default Login;