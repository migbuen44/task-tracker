import styles from './loginSection.module.scss'
import Form from './form'

const Login = () => {
  return (
    <Form login={true} submitCallback={() => console.log('submit')}/>
  )
}

export default Login;