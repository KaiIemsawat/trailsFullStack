const Trails = require("../models/trails.model");

module.exports.getAllTrails = (req, resp) => {
    Trails.find()
        .then((allTrails) => {
            resp.json(allTrails);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.getTrailById = (req, resp) => {
    console.log(req.params);
    Trails.findById({ _id: req.params.id })
        .then((oneTrail) => {
            resp.json(oneTrail);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.addTrail = (req, resp) => {
    Trails.create(req.body)
        .then((newTrail) => {
            resp.status(201).json(newTrail);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.editTrail = (req, resp) => {
    Trails.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateTrail) => {
            resp.json(updateTrail);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.deleteTrail = (req, resp) => {
    Trails.deleteOne({ _id: req.params.id })
        .then((resu) => {
            resp.json(resu);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};
