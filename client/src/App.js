import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Confirm from "./pages/Confirm";
import Modal from "./components/Modal";
import Register from  "./pages/Register";
import Footer from "./components/Footer";
import FreelancerProfile from "./pages/FreelancerProfile";
import ActualSearchResults from "./pages/ActualSearchResults";
import SearchResults from "./pages/SearchResults";


class App extends Component {
render () {
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
          <Route exact path="/freelancers/:id" component ={FreelancerProfile} />
          <Route exact path="/searchresults/:position/:location" component ={ActualSearchResults} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
  } 
}
export default App;
