import axios from "axios";

export default {
    getFreelancers: function () {
        return axios.get("/api/freelancers")
    },
    getFreelancer: function (id) {
        return axios.get("/api/freelancers/freelancers" + id)
    },
    searchFreelancerByPosition: function (position) {
        return axios.get(`/api/freelancers/searchresults/${position}`)
    },
    searchFreelancerByLocation: function (location) {
        return axios.get(`/api/freelancers/searchresults/${location}`)
        // Doesn't work, see freelancers.js
    },
    getFreelancerByPositionAndLocation: function (position, location) {
        return axios.get(`/api/freelancers/searchresults/${position}/${location}`)
    },
    //This will be for a freelancer to create his/her own profile 
    createUser: function (id, userData) {
        return axios.post("/api/freelancers/freelancers" + id, userData)
    },
    login: function (loginInfo) {
        return axios.post("/api/users/login", loginInfo);
    },

    // signs up user, then logs them in
    signup: function (signupInfo) {
        return axios.post("/api/users/signup", signupInfo);
    },

    // checks to see if user is logged in, then returns the user
    isLoggedIn: function () {
        return axios.get("/api/users/profile");
    },

    // checks to see if the user is logged in and and admin, then returns the user
    isAdmin: function () {
        return axios.get("/api/users/logout")
    },

    // logs out the user
    logout: function () {
        return axios.get("/api/users/logout")
    }
};

