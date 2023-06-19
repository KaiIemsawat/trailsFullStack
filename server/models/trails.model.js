const mongoose = require("mongoose");
const TrailSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
            minLength: [3, "The name must be 3 or more characters"],
            maxLength: [50, "The name can't be over 50 characters"],
        },
        distance: {
            type: Number,
            required: [true, "Distance is required"],
            min: [0.5, "No distance lass thab 0.5 mile allowed"],
        },
        location: {
            type: String,
            required: [true, "Location of the trail need to be filled"],
            minLength: [5, "The location need to be 5 characters or more"],
            maxLength: [30, "The location can not exceed 30 characters"],
        },
        wheelChairAccess: {
            type: Boolean,
            required: [true, "Please specific accessibility"]
        },
        description: {
            type: String,
            required: [true, "The description is needed"],
            minLength: [5, "The description need to be 5 characters or more"],
            maxLength: [50, "The description can not be over 50 characters"],
        },
        difficulty: {
            type: Number,
            required: [true,"Please specific the difficalty of the trail in scale of 1-5"],
            min: [1, "The difficalty scale can't be below 1"],
            max: [5, "The difficalty scall can't be exceed 5"],
        },
    },
    // { timestamps: true } will create timestamp, of course
    { timestamps: true }
);


const Trail = mongoose.model("Trail", TrailSchema);

module.exports = Trail;