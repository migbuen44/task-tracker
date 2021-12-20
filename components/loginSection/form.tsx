import styles from './loginSection.module.scss'

interface FormProps {
  login: boolean,
  submitCallback: Function
}


const Form = ({ login, submitCallback } : FormProps) => {

  const handleSubmit = () => {
    submitCallback();
  }

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        {
          login ? <></> :
          <div className={styles.name_input}>
            <label className={styles.password_input}>Name</label>
            <input />
          </div>
        }
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

export default Form;