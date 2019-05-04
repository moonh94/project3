import axios from "axios";

export default {
    getFreelancers: function(){
        return axios.get("/api/freelancers")
    },
    getFreelancer: function(id){
        return axios.get("/api/freelancers/freelancers/" + id)
    },
    getFreelancerByPositionAndLocation: function(position, location){
        return axios.get(`/api/freelancers/searchresults/${position}/${location}`)
    }
};