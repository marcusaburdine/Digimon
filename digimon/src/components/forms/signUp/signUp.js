import { useState } from "react";
import * as userService from "../../../utilities/service/user";
import styles from "./signUp.module.css";
import { Link } from "react-router-dom"

export default function SignUpFormForm({ setUser }) {
  const defaultCredentials = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  const [credentials, setCredentials] = useState(defaultCredentials);

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
      error: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = { ...credentials };
      delete formData.confirm;
      delete formData.error;
      const user = await userService.signUp(formData);
      setUser(user);
      setCredentials(defaultCredentials);
    } catch (error) {
      console.log("Error in Submit", error);
      setCredentials({ ...credentials, error: "FAILED" });
    }
  };
  const disable = credentials.password !== credentials.confirm;
  return (
    <>
      <div className={styles.container}>
        <form autoComplete='off' onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
          <input
            type='text'
            name='name'
            value={credentials.name}
            onChange={handleChange}
            placeholder='Enter Username'
            autoFocus
            required
          />
          <br />
          <label>Email</label>
          <br />
          <input
            type='email'
            name='email'
            value={credentials.email}
            onChange={handleChange}
            placeholder='Enter Email'
            required
          />
          <br />
          <label>Password</label>
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
          <label>Confirm</label>
          <br />
          <input
            type='password'
            name='confirm'
            value={credentials.confirm}
            onChange={handleChange}
            placeholder='Confirm Password'
            autoFocus
            required
          />
          <br />
          <button className={styles.button} type='submit' disabled={disable}>
            SUBMIT
          </button>
          <br />
          <Link className={styles.link} to="/logIn">Already have an account? Log In!</Link>
        </form>
        
      </div>
      <p className=''>&nbsp;{credentials.error}</p>
    </>
  );
}
