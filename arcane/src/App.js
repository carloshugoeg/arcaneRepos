import './App.css';
import React, { Component } from "react";
import { Route, NavLink, Routes, HashRouter } from "react-router-dom";
import Lugares from "./Lugares";
import Sinopsis from './Sinopsis';
import Personajes from './Personajes';
class App extends Component {
  render () {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Arcane_Title_Text.png" alt="logo1" />
          </header>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Personajes">About</NavLink></li>
            <li><NavLink to="/Lugares">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Sinopsis />}></Route>
              <Route exact path="/Personajes" element={<Personajes/>}/>
              <Route exact path="/Lugares" element={<Lugares/>}/>
            </Routes>
          </div>
      </div>
      </HashRouter>
      
    );
  }
}

export default App;
