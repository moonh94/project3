import axios from "axios";

export default {
    getFreelancers: function(){
        return axios.get("/api/freelancers/all")
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
    getNewFreelancerByPositionAndLocation: function(position, location){
        return axios.get(`/api/freelancers/searchresults/${position}/${location}`)
    },
    //This will be for a freelancer to create his/her own profile 
    createUser: function(freelancerData){
        console.log(freelancerData)
        return axios.post("/api/freelancers/register/", freelancerData)
    },
    updateUser: function(id, userData){
        console.log(userData)
        return axios.put("/api/freelancers/profile/" + id, userData)
    }
};

