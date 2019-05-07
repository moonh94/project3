import axios from "axios";

export default {
    getFreelancers: function(){
        return axios.get("/api/freelancers/search")
    },
    getFreelancer: function(id){
        return axios.get("/api/freelancers/" + id)
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
    },
    //This will be for a freelancer to create his/her own profile 
    createUser: function(id, userData){
        return axios.post("/api/freelancers/freelancers" + id, userData)
    }
};

