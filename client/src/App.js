import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import NavBarComp from "./components/NavBarComp";
import FooterComp from "./components/FooterComp";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <NavBarComp />
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </div>
          <FooterComp />
        </div>
      </HashRouter>
    );
  }
}

export default App;