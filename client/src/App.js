import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Confirm from "./pages/Confirm";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import FreelancerProfile from "./pages/FreelancerProfile";
import ActualSearchResults from "./pages/ActualSearchResults";
import Register from "./pages/Register"
import SearchResults from "./pages/SearchResults";
import Login from "./pages/Login"

class App extends Component {

  render(){
    return (
      <Router>
        <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component = {ActualSearchResults} />
          <Route exact path="/register" component = {Register} />
          <Route exact path="/confirm" component ={Confirm} />
          <Route exact path="/freelancers/:id" component ={FreelancerProfile} />
          <Route exact path="/searchresults/:position/:location" component ={ActualSearchResults} 
          />
          <Route exact path="/login" component={Login}/>
        </Switch>
        <Jumbotron />
  
        <Footer />
        </div>
      </Router>
    );

  }
}

export default App;
