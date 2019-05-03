const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freelancerSchema = new Schema({
    name: {type: String, required: true},
    positions: {type: String, required: true},
    bio: {type: String, required: true},
    rate: {type: Number, required: true}
});

const Freelance = mongoose.model("Freelancer", freelancerSchema);

module.exports = Freelance;