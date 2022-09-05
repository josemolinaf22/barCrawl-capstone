import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingComponents/LandingPage";
import { GalleryData } from "./components/GalleryData";
import { Routes, Route } from "react-router-dom";
import Login from "./components/LandingComponents/Login";
import Register from "./components/LandingComponents/Register";
import React, { useState, useEffect } from "react";
import About from "./components/LandingComponents/About";
import LoginHome from "./components/WebComponents/LoginHome";
import BrowseCrawl from "./components/WebComponents/BrowseCrawl";
import Logout from "./components/LandingComponents/Logout";

function App() {
  // Helps with login feature
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function setStatus() {
    setIsLoggedIn(!isLoggedIn);
  }

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <section className="App">
      <Header isLoggedIn={isLoggedIn} setStatus={setStatus} />

      {/* Section is to route pages on site */}
      <Routes>
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

        <Route
          path="/browsecrawl"
          element={
            isLoggedIn ? <BrowseCrawl /> : <Login isLoggedIn={setStatus} />
          }
        />

        <Route path="/logout" element={<Logout isLoggedIn={setStatus} />} />
      </Routes>

      {/* End of section */}
      <Footer />
    </section>
  );
}

export default App;