import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import homePage from "./containers/HomePage";
import registerPage from "./containers/registerPage";
import loginPage from "./containers/loginPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={homePage}></Route>
        <Route path="/login" component={loginPage}></Route>
        <Route path="/signup" component={registerPage}></Route>
      </Router>
    </div>
  );
}

export default App;
