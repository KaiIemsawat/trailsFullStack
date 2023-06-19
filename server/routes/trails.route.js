const TrailController = require("../controllers/trails.controller");
const Trail = require("../models/trails.model");

module.exports = (app) => {
    app.get("/api/allTrails", TrailController.getAllTrails);
    app.get("/api/getOneTrail/:id", TrailController.getTrailById);
    app.post("/api/addTrail", TrailController.addTrail);
    app.put("/api/editTrail/:id", TrailController.editTrail);
    app.delete("/api/deleteTrail/:id", TrailController.deleteTrail);
};
