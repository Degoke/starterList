const mongoose = require("mongoose");
const { Schema } = mongoose;

startupSchema = new Schema({
    name: {
        type: String,
        required:true
    },
    shortDescription: {
        type: String,
        required: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    ratings: {
        type: Number,
        min:[0,"Upvotes cannot be negative"],
        default: 0
    },
    industry: String,
    location: String,
    logo: String,
    website: String,
    images: String,
    comments: [{
        author: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        comment: String
    }],
    dateFounded: Date,
    fundRaisingRound: String,
    existingInvestors: String,
    longDescription: String,
    totalFunding: String,
    userMetrics: String,
    ownerImage: String

},{timestamps:true});



module.exports = mongoose.model("Startup",startupSchema);