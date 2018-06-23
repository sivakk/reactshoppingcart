import React, { Component } from "react";
import Router from "./Router";
import { NavLink } from "react-router-dom";

const Navigation = props => {
  return (
    <div className='page-container'>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/cart">cart</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

 class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Router />

      </div>
    );
  }
}

export default App;
