import SignUpForm from "../../components/forms/signUp/signUp";
import styles from "./signUp.module.css";
export default function SignUp({ setUser }) {

  return (
    <>
      <div className={styles.container}>
        <div className={styles.signUpForm}>
          <SignUpForm setUser={setUser} />
        </div>
      </div>

    </>
  );
}
