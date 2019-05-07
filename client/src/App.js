import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Confirm from "./pages/Confirm";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Register from  "./pages/Register";




function App() {
  return (
    <Router>
      <div className="mainBody">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component = {SearchResults} />
        <Route exact path="/confirm" component ={Confirm} />
        <Route exact path="/login" component ={Modal} />
        <Route exact path="/register" component ={Register} />
      </Switch>

      <Footer />
      </div>
    </Router>
  );
}

export default App;
