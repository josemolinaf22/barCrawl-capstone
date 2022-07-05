import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { GalleryData } from "./components/GalleryData";
import { Navigate, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import React, { useState, useEffect } from "react";
import About from "./components/About";
import LoginHome from "./components/LoginHome";
import BrowseCrawl from "./components/BrowseCrawl";
import Logout from "./components/Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function setStatus() {
    setIsLoggedIn(!isLoggedIn);
  }

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setIsLoggedIn(true);
    }
  }, []);

  // console.log(isLoggedIn);
  return (
    <section className="App">
      <Header isLoggedIn={isLoggedIn} setStatus={setStatus} />
      <Routes>
        {/* <Route path="/login" element={<Login isLoggedIn={setStatus} />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/"
          element={<LandingPage slides={GalleryData} isLoggedIn={setStatus} />}
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? <LoginHome /> : <Login isLoggedIn={setStatus} />
          }
        />
        <Route
          path="/loginHome"
          element={
            isLoggedIn ? <LoginHome /> : <Login isLoggedIn={setStatus} />
          }
        />
        {/* <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/loginHome" />
            ) : (
              <LandingPage slides={GalleryData} isLoggedIn={setStatus} />
            )
          }
        /> */}

        {/* <Route path="/loginHome" element={<LoginHome />} /> */}
        <Route
          path="/browsecrawl"
          element={
            isLoggedIn ? <BrowseCrawl /> : <Login isLoggedIn={setStatus} />
          }
        />
        {/* <Route path="/browsecrawl" element={<BrowseCrawl />} /> */}
        <Route path="/logout" element={<Logout isLoggedIn={setStatus} />} />
      </Routes>
      <Footer />
    </section>
  );
}

export default App;
