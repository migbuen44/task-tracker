import type { NextPage } from 'next'
import styles from '../styles/Login.module.scss'
import Head from 'next/head'
import LoginSection from '../components/loginSection'
import Link from 'next/link'

const Login: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>TaskTracker</title>
      </Head>
      <div className={styles.background_img_container}>Background Img</div>
      <div className={styles.login_section_container}>
        <div className={styles.app_logo}>
          app_logo
        </div>
        <div className={styles.login_form_container}>
          <LoginSection />
          <Link href="/" passHref>
            <button>Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login;