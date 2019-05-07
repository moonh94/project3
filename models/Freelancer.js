const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freelancerSchema = new Schema({
    name: {type: String, required: true},
    position: {type: String, required: true},
    location: {type: String, require: true},
    bio: {type: String, required: true},
    rate: {type: Number, required: true},
    email: {type: String, require: true},
    password: {type: String, require: true}
});

const Freelancer = mongoose.model("Freelancer", freelancerSchema);

module.exports = Freelancer;