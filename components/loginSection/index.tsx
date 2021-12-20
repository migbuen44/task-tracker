import styles from './loginSection.module.scss'
import Login from './login'
import SignUp from './signup'
import { useState } from 'react'

const LoginSection = () => {

  const [signUpSelected, setSignUpSelected] = useState(false)

  return (
    <div className={styles.main_container}>
      {signUpSelected ?
      <SignUp /> :
      <Login />}
      {signUpSelected ?
      <button onClick={() => setSignUpSelected(false)}>Login</button> :
      <button onClick={() => setSignUpSelected(true)}>SignUp</button>}
    </div>
  )
}

export default LoginSection