const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/project3"
);

const freeLancerSeed = [
    {
        name: "John Doe",
        postition: "Developer",
        bio: "I like Javascript",
        rate: 25
    },
    {
        name: "Jane Doe",
        postition: "Landscaper",
        bio: "I like landscaping",
        rate: 20
    },
    {
        name: "Gordan Ramsey",
        postition: "Chef",
        bio: "I like cooking",
        rate: 100
    },
    {
        name: "Tom Bird",
        postition: "Dog Walker",
        bio: "I like dogs",
        rate: 10
    },
    {
        name: "Cesar Milan",
        postition: "Dog Walker",
        bio: "I like dogs a lot",
        rate: 20
    },
    {
        name: "Beethoven",
        postition: "Musician",
        bio: "I like music",
        rate: 20
    },
    {
        name: "Julian Assange",
        postition: "Developer",
        bio: "I like hac.. I mean developing from pris... I mean the comfort of my home",
        rate: 60
    },
    {
        name: "Tom Guy",
        postition: "Landscaper",
        bio: "I like land",
        rate: 30
    },
    {
        name: "Sonny Guy",
        postition: "Care Taker",
        bio: "I like taking care",
        rate: 30
    }
]

db.freeLancer
    .remove({})
    .then(() => db.freeLancer.collection.insertMany(freeLancerSeed))
    .then(data => {
        console.log(data.result.n + "records inserted!")
        process.exit(0)
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });