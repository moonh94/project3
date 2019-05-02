const db = require("../models");

module.exports = {
    findAll: function(req, res){
        db.Freelancer
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))   
    },
    searchFreelancerByPosition: function(req, res){
        db.Freelancer   
            .find(req.params.position)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    searchFreelancerByName: function(req, res){
        db.Freelancer   
            .find({name: req.params.name})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    searchByLocation: function(req, res){
        db.Freelancer   
            .find({location: req.params.location})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    searchByPositionAndLocation: function(req, res){
        db.Freelancer   
            .find({position: req.params.position, location: req.params.location})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    sortByPrice: function(req, res){
        db.Freelancer
            .find(req.params.position)
            .sort({rate: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
    




}