import styles from './loginSection.module.scss'
import axios from 'axios'
import config from '../config'
import React, { useState } from 'react'

const { API_URL} = config;

interface SubmitUserSignUpParams {
  name: string,
  email: string,
  password: string,
}

interface SignUpProps {
  setSignUpSelected: Function
}

const SignUp = ({ setSignUpSelected } : SignUpProps) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitUserSignUp = (signUpBody : SubmitUserSignUpParams) => {
    console.log('signUpBody: ', signUpBody);
    // axios.post(API_URL, signUpBody);
  }

  type submitEvent = React.FormEvent | React.MouseEvent;

  const handleSubmit = (e : submitEvent) => {
    e.preventDefault();
    submitUserSignUp({name, email, password});
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input onChange={(e) => setName(e.target.value)} className={styles.name_input}/>
        </div>
        <div>
          <label>Email</label>
          <input onChange={(e) => setEmail(e.target.value)}className={styles.email_input}/>
        </div>
        <div>
          <label>Password</label>
          <input onChange={(e) => setPassword(e.target.value)} className={styles.password_input}/>
        </div>
        <button onClick={handleSubmit} type="submit">Create Account</button>
      </form>
      <button onClick={() => setSignUpSelected(false)}>Login</button>
    </div>
  )
}

export default SignUp;