import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
