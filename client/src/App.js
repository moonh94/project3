import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/SearchResults";
import Confirm from "./pages/Confirm";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
// **passport code**//
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/confirm" component={Confirm} />
          <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
          <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
        <Jumbotron />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
