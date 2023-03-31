const mongoose = require("mongoose");


const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Pet name is required"],
        minlength: [3, "Pet name must be at least 3 atleast 3 characters long"]
    },
    type: {
        type: String,
        required: [true, "Type name is required"],
        minlength: [3, "Type must be at least 3 atleast 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Description name is required "],
        minlength: [3, "Description must be at least 3 atleast 3 characters long"]
    },
    skills: {
        type: String,
        required: [true, "Skillsname is required"],
        minlength: [3, "Skills must be at least 3 atleast 3 characters long"]
    },
}, { timestamps: true });
const Pet = mongoose.model("Pet", PetSchema);
module.exports = Pet;