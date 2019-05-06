import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Confirm from "./pages/Confirm";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import FreelancerProfile from "./pages/FreelancerProfile";
import ActualSearchResults from "./pages/ActualSearchResults";
import SearchResults from "./pages/SearchResults";

class App extends Component {

  render(){
    return (
      <Router>
        <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component = {SearchResults} />
          <Route exact path="/confirm" component ={Confirm} />
          <Route exact path="/freelancers/:id" component ={FreelancerProfile} />
          <Route exact path="/searchresults/:position/:location" component ={ActualSearchResults} />
        </Switch>
        <Jumbotron />
  
        <Footer />
        </div>
      </Router>
    );

  }
}

export default App;
