import logo from "./logo.svg";
import "./App.css";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Gallery from "./containers/Gallery";

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
