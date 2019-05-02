const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const freelancerSchema = new Schema({
    name: {type: String, required: true},
    positions: {type: String, require: true},
    bio: {type: String, required: true},
    rate: {Type: Number, required: true}
});

const Freelance = mongoose.model("Freelance", freelancerSchema);

module.exports = Freelancer;