const  BeltController = require("../controllers/belt.controller");

module.exports = app => {
    // Creating a new author
    app.post("/api/pet", BeltController.createNewPet);
    // R
    app.get("/api/pet", BeltController.getAllPets);
    app.get("/api/pet/:id", BeltController.getOnePet);
    // U
    app.put("/api/pet/:id", BeltController.updatePet);
    // D
    app.delete("/api/pet/:id", BeltController.deletePet);

}