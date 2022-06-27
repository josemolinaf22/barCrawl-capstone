import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { GalleryData } from "./components/GalleryData";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Gallery slides={GalleryData} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
