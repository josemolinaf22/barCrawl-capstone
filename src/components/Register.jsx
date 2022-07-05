import React from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: null,
      passwordTwo: null,
    },
    onSubmit: (values) => {
      // console.log("values before destructure", values);

      if (values.password === values.passwordTwo) {
        const bodyObj = {
          username: values.username,
          password: values.password,
        };
        // console.log(values.username, values.password);
        axios
          .post("http://localhost:4006/api/registerUser", bodyObj)
          .then(() => navigate("/LoginHome"))
          .catch(() => {
            Swal.fire({
              title: "Username Already Exists, Try Again Please",
              timer: 2000,
              timerProgressBar: true,
            });
          });
      } else {
        Swal.fire({
          title: "Password Didn't Match, Please Try Again",
          timer: 2000,
          timerProgressBar: true,
        });
      }
    },
  });
  return (
    <section className={styles.body}>
      <section className={styles.signInCard}>
        <h1>Create An Account</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="username"
            type="text"
            id="user"
            className="userInput"
            required
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <br />
          <label htmlFor="user">Enter Username</label>
          <br />
          <input
            name="password"
            type="password"
            id="password"
            className="userInput"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <br />
          <label htmlFor="password">Enter A Password</label>
          <br />
          <input
            name="passwordTwo"
            type="password"
            id="passwordTwo"
            className="userInput"
            required
            value={formik.values.passwordTwo}
            onChange={formik.handleChange}
          />
          <br />
          <label htmlFor="passwordTwo">Confirm Password</label>
          <br />
          <button className="btn-71" type="submit">
            Create
          </button>
        </form>
        <p>
          <Link to="/login" className="link">
            <p className="gobackBtn"> go back </p>
          </Link>
        </p>
      </section>
    </section>
  );
};

export default Register;
