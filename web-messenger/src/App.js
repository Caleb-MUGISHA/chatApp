import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import homePage from "./containers/HomePage";
import registerPage from "./containers/registerPage";
import loginPage from "./containers/loginPage";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div className="App">
      <Router>
        {/* only a loged in use can access this page */}
        <PrivateRoute path="/" exact component={homePage} />

        <Route path="/login" component={loginPage} />
        <Route path="/signup" component={registerPage} />
      </Router>
    </div>
  );
}

export default App;
