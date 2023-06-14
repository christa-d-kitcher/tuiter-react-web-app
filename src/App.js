import logo from './logo.svg';
import './App.css';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */

/*2.1 Implementing Single Page Applications & 2.1.2 Implementing the Labs component*/

import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter, Link} from "react-router-dom";
import {Routes, Route} from "react-router";
import Assignment3 from "./labs/a3";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Link to="/labs">Labs</Link> |
              <Link to="/tuiter">Tuiter</Link> |
              <Routes>
                  <Route path="/" element={ <Assignment3/>}/>
                  <Route path="/labs/*" element={<Labs/>}/>
                  <Route path="/hello"    element={<HelloWorld/>}/>
                  <Route path="/tuiter/*" element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>

  );
}
export default App;



