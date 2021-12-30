import styles from './userEntry.module.scss'
import axios from 'axios'
import config from '../config'
import React, { useState } from 'react'

const { API_URL } = config;

interface SubmitUserLoginParams {
  email: string,
  password: string,
}

interface LoginProps {
  setSignUpSelected: Function
}

const Login = ({setSignUpSelected} : LoginProps) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitUserLogin = (loginBody: SubmitUserLoginParams) => {
    console.log('loginBody: ', loginBody);
    // axios.post(API_URL, loginBody)
  }

  type submitEvent = React.FormEvent | React.MouseEvent;

  const handleSubmit = (e : submitEvent) => {
    e.preventDefault();
    submitUserLogin({email, password});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input onChange={((e) => setEmail(e.target.value))} className={styles.email_input}/>
        </div>
        <div>
          <label>Password</label>
          <input onChange={((e) => setPassword(e.target.value))}className={styles.password_input}/>
        </div>
        <button onClick={handleSubmit} type="submit">Login</button>
      </form>
      <button onClick={() => setSignUpSelected(true)}>Create An Account</button>
    </div>
  )
}

export default Login;