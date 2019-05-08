import React, {Component} from "react";
import FreelancerCard from "../components/FreelancerCard";
import { Link } from "react-router-dom";
import API from "../utils/API";


class FreelancerProfile extends Component {
    state = {
        freelancer: {}
    }

    componentDidMount(){
        API.getFreelancer(this.props.match.params.id)
            .then(res => this.setState({freelancer: res.data}))
            .catch(err => console.log(err))
    }
    handleSubmit () {

    }
    render(){
        return (
            <div>
            <FreelancerCard 
                name= {this.state.freelancer.name}
                position= {this.state.freelancer.position}
                location= {this.state.freelancer.location}
                bio= {this.state.freelancer.bio}
                rate= {`$${this.state.freelancer.rate} per hour`}
                />
            </div>
        )
    }
}

export default FreelancerProfile;