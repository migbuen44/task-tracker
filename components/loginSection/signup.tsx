import styles from './loginSection.module.scss'
import Form from './form'

const SignUp = () => {
  return (
    <Form login={false} submitCallback={() => console.log('submit')}/>
  )
}

export default SignUp;