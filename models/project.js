const mongoose = require("mongoose");
const { Schema } = mongoose;

projectSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    upvotes: {
        type: Number,
        min:[0,"Upvotes cannot be negative"],
        default: 0
    }
},{timestamps:true});



module.exports = mongoose.model("Project",projectSchema);