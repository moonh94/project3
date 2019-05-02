import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/SearchResults";
import Confirm from "./pages/Confirm";
// import Footer from "./components/Footer";
// import Jumbotron from "./components/Jumbotron";


function App() {
  return (
    <Router>
      <div>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component = {Search} />
        <Route exact path="/confirm" component ={Confirm} />
      </Switch>
      {/* <Jumbotron />

      <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
