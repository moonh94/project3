import axios from "axios";

export default {
    getFreelancers: function(){
        return axios.get("/api/freelancers")
    },
    getFreelancer: function(id){
        return axios.get("/api/freelancers/freelancers" + id)
    },
    searchFreelancerByPosition: function(position){
        return axios.get(`/api/freelancers/searchresults/${position}`)
    },
    searchFreelancerByLocation: function(location){
        return axios.get(`/api/freelancers/searchresults/${location}`)
        // Doesn't work, see freelancers.js
    },
    getFreelancerByPositionAndLocation: function(position, location){
        return axios.get(`/api/freelancers/searchresults/${position}/${location}`)
    }
};