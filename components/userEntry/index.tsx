import styles from './userEntry.module.scss'
import Login from './login'
import SignUp from './signup'
import { useState } from 'react'

const UserEntry = () => {
  const [signUpSelected, setSignUpSelected] = useState(false);

  return (
    <div>
      {
        signUpSelected ?
        <SignUp setSignUpSelected={setSignUpSelected}/> :
        <Login setSignUpSelected={setSignUpSelected}/>
      }
    </div>
  )
}

export default UserEntry;