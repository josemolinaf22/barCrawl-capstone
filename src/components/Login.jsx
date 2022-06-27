import React, { useState } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const [user, SetUser] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <section className={styles.body}>
      <section className={styles.signInCard}>
        <h1>Sign In</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={user} required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={pwd} required />
        </form>
        <button>Login</button>
        <p>Don't have an account</p>
      </section>
    </section>
  );
};

export default Login;
