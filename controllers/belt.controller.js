const Pet= require("../models/belt.model");


// /C This function is creating a new author
module.exports.createNewPet = (req, res) => {
    // const { fullName } = req.body
    Pet.create(req.body)
        .then(data => res.json({ results: data }))
        .catch(err => res.json({ errors: err }));
};
module.exports.getAllPets = (req, res) => {
    Pet.find()
        .then(pet=> res.json(pet))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.getOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(findeOnePet => res.json({ pet: findeOnePet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatePet => res.json({ pet: updatePet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
        .then(pet => res.json({ pet: pet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
// to add on the nested schema   add to the updateUser controller {$addToSet:{quotes: req.body}}