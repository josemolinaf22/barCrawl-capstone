import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import Swal from "sweetalert2";

const Login = ({ isLoggedIn }) => {
  // Form functionality
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      let { password } = values;

      password = password.toString();
      axios
        .post("http://localhost:3000/api/verifyUser", {
          username: values.username,
          password: password,
        })

        .then((res) => {
          localStorage.setItem("username", res.data.username);
          isLoggedIn();
          navigate("/LoginHome");
        })

        .catch(() => {
          Swal.fire({
            title: "Username Or Password Was Incorrect, Please Try Again",
            timer: 2000,
            timerProgressBar: true,
          });
        });
    },
  });
  // End of form functionality

  return (
    <section className="LoginBody">
      <section className="LoginSignInCard">
        <h1>Sign In</h1>
        <form onSubmit={formik.handleSubmit}>
          <input
            name="username"
            type="text"
            id="username"
            className="userInput"
            required
            autoComplete="off"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <br />
          <label htmlFor="username">Username</label>
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
          <label htmlFor="password">Password</label>
          <br />
          <button type="submit" className="btn-71">
            Login
          </button>
        </form>
        <p>
          Need an Account?
          <br />
          <Link to="/register" className="link">
            {" "}
            <span className="gobackBtn">Create One</span>
          </Link>
        </p>
      </section>
    </section>
  );
};

export default Login;
