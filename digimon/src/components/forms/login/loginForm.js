import { useState } from "react";
import{ Link } from "react-router-dom"
import * as userService from "../../../utilities/service/user";
import styles from "./loginForm.module.css";

export default function LoginForm({ setUser }) {
  const defaultCredentials = {
    email: "",
    password: "",
    error: "",
  };
  const [credentials, setCredentials] = useState(defaultCredentials);
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({
      ...credentials,
      [evt.target.name]: evt.target.value,
      error: "",
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await userService.login(credentials);

      console.log("User:", user);
      setUser(user);
      setCredentials(defaultCredentials);
    } catch {
      setError("LOGIN FAILED");
    }
  }

  return (
    <>
    <div className={styles.container}>
        <form autoComplete='off' onSubmit={handleSubmit}>
        <label> Password</label>
          <br />
          <input
            type='email'
            name='email'
            value={credentials.email}
            onChange={handleChange}
            placeholder='Enter Email'
            autoFocus
            required
          />
          <br />
          <label> Password</label>
          <br />
          <input
            type='password'
            name='password'
            value={credentials.password}
            onChange={handleChange}
            placeholder='Enter Password'
            required
          />
          <br />
          <button className={styles.button} type='submit'>LOGIN</button>
          <br />
          <Link className={styles.link} to="/">Don't have an account? Sign Up! </Link>
          
        </form>
      
      <p>{credentials.error}</p>
      
      </div>
    </>
  );
}
