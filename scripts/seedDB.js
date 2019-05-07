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
        rate: 25,
        email: "email@gmail.com",
        password: "password"
    },
    {
        name: "Jane Doe",
        position: "Landscaper",
        location: "Denver",
        bio: "I like landscaping",
        rate: 20,
        email: "email1@gmail.com",
        password: "password"
    },
    {
        name: "Gordan Ramsey",
        position: "Chef",
        location: "Denver",
        bio: "I like cooking",
        rate: 100,
        email: "email2@gmail.com",
        password: "password"
    },
    {
        name: "Tom Bird",
        position: "Dog Walker",
        location: "Seattle",
        bio: "I like dogs",
        rate: 10,
        email: "email3@gmail.com",
        password: "password"
    },
    {
        name: "Cesar Milan",
        position: "Dog Walker",
        location: "Seattle",
        bio: "I like dogs a lot",
        rate: 20,
        email: "email4@gmail.com",
        password: "password"
    },
    {
        name: "Beethoven",
        position: "Musician",
        location: "Seattle",
        bio: "I like music",
        rate: 20,
        email: "email5@gmail.com",
        password: "password"
    },
    {
        name: "Julian Assange",
        position: "Developer",
        location: "Houston",
        bio: "I like hac.. I mean developing from pris... I mean the comfort of my home",
        rate: 60,
        email: "email6@gmail.com",
        password: "password"
    },
    {
        name: "Tom Guy",
        position: "Landscaper",
        location: "Houston",
        bio: "I like land",
        rate: 30,
        email: "email7@gmail.com",
        password: "password"
    },
    {
        name: "Sonny Guy",
        position: "Care Taker",
        location: "Houston",
        bio: "I like taking care",
        rate: 30,
        email: "email8@gmail.com",
        password: "password"
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