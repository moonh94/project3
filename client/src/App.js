import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Confirm from "./pages/Confirm";
import Modal from "./components/Modal";
import Register from "./pages/Register";
import Footer from "./components/Footer";
import FreelancerProfile from "./pages/FreelancerProfile";
import ActualSearchResults from "./pages/ActualSearchResults";
import RequestWork from "./pages/RequestWork";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="mainBody" style={{ paddingBottom: 60 }}>
            <NavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={ActualSearchResults} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/confirm" component={Confirm} />
              <Route exact path="/login" component={Modal} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/freelancers/:id" component={FreelancerProfile} />
              <Route exact path="/searchresults/:position/:location" component={ActualSearchResults} />
              <Route exact path="/request" component={RequestWork} />
            </Switch>
          </div>
       
        </div>
      </Router>
    )
  }
}
export default App;
