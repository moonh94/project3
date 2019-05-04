const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/project3"
);

const freeLancerSeed = [
    {
        name: "John Doe",
        position: "Developer",
        location: "Denver",
        bio: "I like Javascript",
        rate: 25
    },
    {
        name: "Jane Doe",
        position: "Landscaper",
        location: "Denver",
        bio: "I like landscaping",
        rate: 20
    },
    {
        name: "Gordan Ramsey",
        position: "Chef",
        location: "Denver",
        bio: "I like cooking",
        rate: 100
    },
    {
        name: "Tom Bird",
        position: "Dog Walker",
        location: "Seattle",
        bio: "I like dogs",
        rate: 10
    },
    {
        name: "Cesar Milan",
        position: "Dog Walker",
        location: "Seattle",
        bio: "I like dogs a lot",
        rate: 20
    },
    {
        name: "Beethoven",
        position: "Musician",
        location: "Seattle",
        bio: "I like music",
        rate: 20
    },
    {
        name: "Julian Assange",
        position: "Developer",
        location: "Houston",
        bio: "I like hac.. I mean developing from pris... I mean the comfort of my home",
        rate: 60
    },
    {
        name: "Tom Guy",
        position: "Landscaper",
        location: "Houston",
        bio: "I like land",
        rate: 30
    },
    {
        name: "Sonny Guy",
        position: "Care Taker",
        location: "Houston",
        bio: "I like taking care",
        rate: 30
    }
]

db.Freelancer
    .remove({})
    .then(() => db.Freelancer.collection.insertMany(freeLancerSeed))
    .then(data => {
        console.log(data.result.n + "records inserted!")
        process.exit(0)
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });