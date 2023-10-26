import LoginForm from '../../components/forms/login/loginForm'
import styles from './login.module.css'
export default function login() {
    
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logInForm}>
                    <LoginForm />
                </div>
            </div>
        </>
    )
}