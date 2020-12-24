import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <main>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
