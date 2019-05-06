import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/SearchResults";
import Confirm from "./pages/Confirm";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import FreelancerProfile from "./pages/FreelancerProfile";

class App extends Component {

  render(){
    return (
      <Router>
        <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component = {Search} />
          <Route exact path="/confirm" component ={Confirm} />
          <Route exact path="/freelancers/:id" component ={FreelancerProfile} />
        </Switch>
        <Jumbotron />
  
        <Footer />
        </div>
      </Router>
    );

  }
}

export default App;
